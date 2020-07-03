import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastTechnicalComponent } from './view-past-technical.component';

describe('ViewPastTechnicalComponent', () => {
  let component: ViewPastTechnicalComponent;
  let fixture: ComponentFixture<ViewPastTechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPastTechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPastTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
