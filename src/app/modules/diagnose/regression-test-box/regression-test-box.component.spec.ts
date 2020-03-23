import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressionTestBoxComponent } from './regression-test-box.component';

describe('RegressionTestBoxComponent', () => {
  let component: RegressionTestBoxComponent;
  let fixture: ComponentFixture<RegressionTestBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegressionTestBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegressionTestBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
