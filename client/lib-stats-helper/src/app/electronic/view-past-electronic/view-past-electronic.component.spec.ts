import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastElectronicComponent } from './view-past-electronic.component';

describe('ViewPastElectronicComponent', () => {
  let component: ViewPastElectronicComponent;
  let fixture: ComponentFixture<ViewPastElectronicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPastElectronicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPastElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
