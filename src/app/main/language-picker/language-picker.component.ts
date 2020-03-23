import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sortBy } from 'lodash';

import { Language, Languages, SelectBoxItem } from 'src/constants';

enum type {
  name = 'name',
  code = 'code'
}

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: [ './language-picker.component.less' ]
})
export class LanguagePickerComponent implements OnInit {
  // type of selectedValue: Language name or
  @Input() type: type = type.name;
  @Input() selectedLanguage = 'en';
  @Output() languageChanged = new EventEmitter<string>();

  languages: Language[] = [];
  selectBoxList: SelectBoxItem[] = [];
  transformSelectedContent: (value: any) => string = null;

  constructor () { }

  // Todo: Apply some logic to show allowed language by user account
  // constructor (private userService: UserService) { }

  async ngOnInit () {
    // Get the current user
    // const user = await this.userService.me();

    // Filter the user's languages by the ones they're allowed to use
    // if (user?.config?.allowedLanguages) {
    //   this.languages = Languages.filter(lang =>
    //     user.config.allowedLanguages.includes(lang.code)
    //   );
    // }

    // Dummy languages for now
    this.languages = Languages;

    // Sort by language name, not code.
    this.languages = sortBy(this.languages, 'name');

    // get selectBoxList from languages
    this.selectBoxList = this.languages.map(language => ({
      content: language.name,
      value: language.code
    }));

    // transform selected content of select box
    // TODO: add more transform function here
    if (this.type === type.code) {
      this.transformSelectedContent = value => {
        const currentItem: Language = this.languages.find(
          item => item.code === value
        );
        return currentItem?.code;
      };
    }
  }

  /**
   * Fired when the user changes their language
   */
  onLanguageChanged (languageCode: string) {
    this.languageChanged.emit(languageCode);
  }
}
