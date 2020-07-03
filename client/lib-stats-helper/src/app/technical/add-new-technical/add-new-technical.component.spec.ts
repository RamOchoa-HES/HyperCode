import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTechnicalComponent } from './add-new-technical.component';

describe('AddNewTechnicalComponent', () => {
  let component: AddNewTechnicalComponent;
  let fixture: ComponentFixture<AddNewTechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
