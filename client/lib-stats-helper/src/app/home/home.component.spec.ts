import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";

fdescribe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create homepage", () => {
    expect(component).toBeTruthy();
  });
  it("should display application title", () => {
    const tag = fixture.debugElement.nativeElement.querySelector("#appTitle");
    expect(tag.innerHTML).toBe("A Library Statistics Tracker App");
    expect(tag.innerHTML.length).toBeGreaterThan(0);
  });
});
