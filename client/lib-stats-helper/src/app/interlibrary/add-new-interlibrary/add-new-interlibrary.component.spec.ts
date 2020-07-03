import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewInterlibraryComponent } from './add-new-interlibrary.component';

describe('AddNewInterlibraryComponent', () => {
  let component: AddNewInterlibraryComponent;
  let fixture: ComponentFixture<AddNewInterlibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewInterlibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewInterlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
