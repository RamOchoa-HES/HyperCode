import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MarketingComponent } from "./marketing.component";

fdescribe("MarketingComponent", () => {
  let component: MarketingComponent;
  let fixture: ComponentFixture<MarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create marketing", () => {
    expect(component).toBeTruthy();
  });

  it("should display welcome message", () => {
    const tag = fixture.debugElement.nativeElement.querySelector(".display-6");
    expect(tag.innerHTML).toBe("Welcome to Educational Resource Center");
    expect(tag.innerHTML.length).toBeGreaterThan(0);
  });
});
