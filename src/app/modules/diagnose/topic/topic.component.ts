import { Component, OnInit, Input } from '@angular/core';
import { Topics, RiskLevels } from 'src/constants';

enum Type {
  compact = 'compact'
}

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.less']
})
export class TopicComponent implements OnInit {
  @Input() topic: string;
  @Input() level: any;
  @Input() type: Type = null;

  riskColor: string;
  topicData: any;

  constructor() { }

  ngOnInit(): void {
    this.topicData = Topics[this.topic];
    this.riskColor = RiskLevels[this.level].color;
  }
}
