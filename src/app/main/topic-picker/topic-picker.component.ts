import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Topic, TopicPickerSelected, Topics } from 'src/constants';
import { KeyValue } from '@angular/common';

const defaultTitle = 'Add more topics';
const hoverTitle = 'Choose Topic';

@Component({
  selector: 'app-topic-picker',
  templateUrl: './topic-picker.component.html',
  styleUrls: [ './topic-picker.component.less' ]
})
export class TopicPickerComponent implements OnInit {
  title: string = defaultTitle;
  topics: { [key: string]: Topic } = Topics;
  selecteds: { [key: string]: any } = {};

  @Input() maximumItemShow = 8;
  @Input() topicSelected: { [key: string]: any } = {};
  @Output() _onSelectChanged = new EventEmitter<TopicPickerSelected>();
  constructor () { }

  ngOnInit (): void {
    // add selected topic on @Input to memo
    for (const topicNumber in this.topics) {
      if (this.topicSelected.hasOwnProperty(topicNumber)) {
        this.selecteds[topicNumber] = this.topics[topicNumber];
      }
    }
  }

  // Handle event mouse enter
  onMouseEnter () {
    this.title = hoverTitle;
  }

  // Handle event mouse leave
  onMouseLeave () {
    this.title = defaultTitle;
  }

  // Handle select & unSelect item
  onSelect (topicNumber: string, topic: Topic): void {
    if (this.selecteds.hasOwnProperty(topicNumber)) {
      delete this.selecteds[topicNumber];
    } else {
      this.selecteds[topicNumber] = topic;
    }

    // Event emit
    this._onSelectChanged.emit(this.selecteds);
  }

  // check a topic is selected
  isSelected (topicNumber: string): boolean {
    return this.selecteds.hasOwnProperty(topicNumber);
  }

  originalOrder = (a: KeyValue<string, Topic>, b: KeyValue<string, Topic>): number => {
    return 0;
  }
}
