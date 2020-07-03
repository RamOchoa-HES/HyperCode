import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastInterlibraryComponent } from './view-past-interlibrary.component';

describe('ViewPastInterlibraryComponent', () => {
  let component: ViewPastInterlibraryComponent;
  let fixture: ComponentFixture<ViewPastInterlibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPastInterlibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPastInterlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
