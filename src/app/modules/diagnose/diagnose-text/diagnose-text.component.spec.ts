import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnoseTextComponent } from './diagnose-text.component';

describe('DiagnoseTextComponent', () => {
  let component: DiagnoseTextComponent;
  let fixture: ComponentFixture<DiagnoseTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnoseTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
