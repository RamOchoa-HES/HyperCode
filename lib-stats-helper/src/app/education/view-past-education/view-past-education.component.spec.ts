import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastEducationComponent } from './view-past-education.component';

describe('ViewPastEducationComponent', () => {
  let component: ViewPastEducationComponent;
  let fixture: ComponentFixture<ViewPastEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPastEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPastEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
