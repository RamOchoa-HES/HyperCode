import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EducationComponent } from "./education.component";

fdescribe("EducationComponent", () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EducationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create ERCMarketing page", () => {
    expect(component).toBeTruthy();
  });

  it("should display welcome message", () => {
    const tag = fixture.debugElement.nativeElement.querySelector(".display-6");
    expect(tag.innerHTML).toBe("Welcome to Marketing Outreach");
    expect(tag.innerHTML.length).toBeGreaterThan(0);
  });
});
