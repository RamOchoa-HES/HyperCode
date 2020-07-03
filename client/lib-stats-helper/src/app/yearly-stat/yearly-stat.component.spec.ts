import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyStatComponent } from './yearly-stat.component';

describe('YearlyStatComponent', () => {
  let component: YearlyStatComponent;
  let fixture: ComponentFixture<YearlyStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
