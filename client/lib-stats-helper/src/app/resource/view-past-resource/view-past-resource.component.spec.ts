import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastResourceComponent } from './view-past-resource.component';

describe('ViewPastResourceComponent', () => {
  let component: ViewPastResourceComponent;
  let fixture: ComponentFixture<ViewPastResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPastResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPastResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
