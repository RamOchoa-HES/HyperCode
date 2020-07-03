import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEducationComponent } from './add-new-education.component';

describe('AddNewEducationComponent', () => {
  let component: AddNewEducationComponent;
  let fixture: ComponentFixture<AddNewEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
