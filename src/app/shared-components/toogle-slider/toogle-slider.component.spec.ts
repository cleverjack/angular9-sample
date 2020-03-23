import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleSliderComponent } from './toogle-slider.component';

describe('ToogleSliderComponent', () => {
  let component: ToogleSliderComponent;
  let fixture: ComponentFixture<ToogleSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToogleSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
