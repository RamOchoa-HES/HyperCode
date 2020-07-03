import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewElectronicComponent } from './add-new-electronic.component';

describe('AddNewElectronicComponent', () => {
  let component: AddNewElectronicComponent;
  let fixture: ComponentFixture<AddNewElectronicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewElectronicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
