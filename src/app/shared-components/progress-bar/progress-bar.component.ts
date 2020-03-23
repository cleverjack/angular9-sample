import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent implements OnInit {
  @Input() label: string;
  @Input() value: number;
  percent = '0';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.percent = Math.round(this.value * 100) + '%';
    }, 400)
  }

}
