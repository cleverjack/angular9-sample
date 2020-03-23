import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DefaultLanguage, RiskLevels, TopicPickerSelected, Topics } from 'src/constants';

interface TopicViewModel {
  name: string,
  level: number,
  icon: string,
  riskColor: string,
}

@Component({
  selector: 'app-regression-test-box',
  templateUrl: './regression-test-box.component.html',
  styleUrls: [ './regression-test-box.component.less' ]
})
export class RegressionTestBoxComponent implements OnInit {
  defaultLanguage = DefaultLanguage;
  topicArray: Array<TopicViewModel> = [];
  riskLevels = RiskLevels;
  @Input() topics: { [topic: string]: any } = {};
  @Input() isShow = false;
  @Output() _close = new EventEmitter<boolean>();

  constructor () { }

  ngOnInit (): void {
    // Handle topicArray
    this.topicArray = Object.entries(this.topics).map(([ topic, level ]) => {
      const { name, faIcon: icon } = Topics[topic];
      const riskColor = RiskLevels[level].color;

      return { name, level, icon, riskColor };
    });
  }

  onClose () {
    console.log('[app-regression-test-box] onClose exec ...');
    this.isShow = false;
    this._close.emit(false);
  }

  // Todo: handle language change
  onLanguageChanged (language) {
    console.log('[app-regression-test-box] onLanguageChanged selected language: ', language);
  }

  // Todo: handle level change
  onChangeLevel (currentTopic: TopicViewModel, newLevel: string) {
    console.log('[app-regression-test-box] onChangeLevel get currentTopic: [%s], newLevel: [%s]', currentTopic, newLevel);
  }

  // Todo: handle selected topic change
  onTopicPickerChanged (topicSelected: TopicPickerSelected) {
    console.log('[app-regression-test-box] onTopicPickerChanged get topicSelected: ', topicSelected);
  }
}
