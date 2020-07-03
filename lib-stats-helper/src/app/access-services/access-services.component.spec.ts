import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessServicesComponent } from './access-services.component';

describe('AccessServicesComponent', () => {
  let component: AccessServicesComponent;
  let fixture: ComponentFixture<AccessServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
