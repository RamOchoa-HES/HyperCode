import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InterlibraryComponent } from "./interlibrary.component";

fdescribe("InterlibraryComponent", () => {
  let component: InterlibraryComponent;
  let fixture: ComponentFixture<InterlibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterlibraryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create interlibrary page", () => {
    expect(component).toBeTruthy();
  });

  it("should display welcome message", () => {
    const tag = fixture.debugElement.nativeElement.querySelector(".display-6");
    expect(tag.innerHTML).toBe("Welcome to Interlibrary Loan");
    expect(tag.innerHTML.length).toBeGreaterThan(0);
  });
});
