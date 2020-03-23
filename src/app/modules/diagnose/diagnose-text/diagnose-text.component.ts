import { Component, OnInit, Input } from '@angular/core';
import { Slots, Rule } from 'classify-text-swagger-client';
import { generalRiskTopic } from 'src/constants';

interface Word {
  original: string,
  text: string,
  level: any,
  tokens: Array<Rule>,
}

@Component({
  selector: 'app-diagnose-text',
  templateUrl: './diagnose-text.component.html',
  styleUrls: ['./diagnose-text.component.less']
})
export class DiagnoseTextComponent implements OnInit {
  @Input() extended: Array<Slots>
  wordDiagnosed: Array<Word>
  generalRiskTopic: number;

  constructor() { }

  ngOnInit(): void {
    this.wordDiagnosed = this.handleGroupWord(this.extended);
    this.generalRiskTopic = generalRiskTopic;
  }

  /* Note:
   * + The rule we're using to group 2 or many word is the [text]
   *   property will be empty when it was used on the prev token
   * + We need to group [original] & tokens
   */
   handleGroupWord(extended: Array<Slots>): Array<Word> {
    const dataGrouped = extended.reduce((memo, slot, index) => {
      const { text, original, tokens } = slot;
      if(text === '') {
        let previousWord = memo[index-1];
        let { original: prevOriginal, tokens: prevTokens } = previousWord;

        // append the current original text to the previous one
        prevOriginal = `${prevOriginal} ${original}`

        // merge tokens
        prevTokens = this.mergeTokens(prevTokens, tokens);

        previousWord = Object.assign(previousWord, {
          original: prevOriginal,
          tokens: prevTokens
        })
      } else {
        const word = this.wordFromSlot(slot);
        memo.push(word)
      }

      return memo;
    }, [])

    return dataGrouped;
  }

  /*
   * Handle [slot] data to set some properties like color, topics...
   * Note: The color we're using get by trisk level of general-riskhe
   */
  wordFromSlot (slot: Slots): Word {
    const { text, solution, original, tokens } = slot;
    const chosenToken = tokens.find(token => token.text === solution);
    const level = chosenToken.topics[generalRiskTopic];

    // Note: Reverse array to show the grouping at the top. Need to confirm
    const tokensReverse = tokens.reverse();
    const filterToken = this.mergeTokens(tokensReverse);

    return { text, original, level, tokens: filterToken };
  }

  /*
   * Merge tokens which have dulpicate [text] property
   */
  mergeTokens (...tokens : Array<Array<Rule>>): Array<Rule> {
    const tokenFlated = tokens.flat();
    const mapTextToken = tokenFlated.reduce((memo, slot) => {
      if ( !memo.hasOwnProperty(slot.text) ) {
        memo[slot.text] = slot;
      }

      return memo;
    }, {})

    return Object.values(mapTextToken);
  }
}
