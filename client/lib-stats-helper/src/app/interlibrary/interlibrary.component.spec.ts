import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterlibraryComponent } from './interlibrary.component';

fdescribe('InterlibraryComponent', () => {
  let component: InterlibraryComponent;
  let fixture: ComponentFixture<InterlibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterlibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
