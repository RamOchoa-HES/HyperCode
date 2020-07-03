import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastMarketingComponent } from './view-past-marketing.component';

describe('ViewPastMarketingComponent', () => {
  let component: ViewPastMarketingComponent;
  let fixture: ComponentFixture<ViewPastMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPastMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPastMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
