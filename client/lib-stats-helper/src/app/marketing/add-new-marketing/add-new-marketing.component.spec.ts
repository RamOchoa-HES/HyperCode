import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMarketingComponent } from './add-new-marketing.component';

describe('AddNewMarketingComponent', () => {
  let component: AddNewMarketingComponent;
  let fixture: ComponentFixture<AddNewMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
