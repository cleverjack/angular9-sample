import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectBoxItem } from 'src/constants';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: [ './select-box.component.less' ]
})
export class SelectBoxComponent implements OnInit {
  @Input() listData: SelectBoxItem[] = [];
  @Input() maximumItemShow = 8;
  @Input() selectedValue: string | number = null;
  @Input() transformSelectedContent: (value: any) => string = null;
  @Output() selectChanged = new EventEmitter<string | number>();

  constructor () { }

  ngOnInit (): void {}

  // return the first item or empty item
  get firstItem (): SelectBoxItem {
    return this.listData?.length
      ? this.listData[0]
      : { content: '', value: '' };
  }

  // if listData is null || undefined || empty just return an item with empty content
  // return the first item if the default selectedValue have not passed
  get currentSelected (): SelectBoxItem {
    if (!this.listData?.length) {
      return { content: '', value: '' };
    }

    return this.selectedValue === null
      ? this.listData[0]
      : this.listData.find(item => item.value === this.selectedValue);
  }

  get selectedContent () {
    return this.transformSelectedContent ? this.transformSelectedContent(this.currentSelected.value) : this.currentSelected.content;
  }

  // emit selectChanged event
  onSelect (value: string | number) {
    this.selectedValue = value;
    this.selectChanged.emit(value);
  }
}
