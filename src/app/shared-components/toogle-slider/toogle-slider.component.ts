import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toogle-slider',
  templateUrl: './toogle-slider.component.html',
  styleUrls: [ './toogle-slider.component.less' ]
})
export class ToogleSliderComponent implements OnInit {
  @Input() defaultActive = false;
  @Output() _onChanged = new EventEmitter<boolean>();

  public isActive: boolean;

  constructor () {
    this.isActive = this.defaultActive;
  }

  ngOnInit (): void {}

  onClick () {
    this.isActive = !this.isActive;
    this._onChanged.emit(this.isActive);
  }
}
