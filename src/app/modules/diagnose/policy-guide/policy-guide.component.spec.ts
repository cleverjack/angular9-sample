import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyGuideComponent } from './policy-guide.component';

describe('PolicyGuideComponent', () => {
  let component: PolicyGuideComponent;
  let fixture: ComponentFixture<PolicyGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
