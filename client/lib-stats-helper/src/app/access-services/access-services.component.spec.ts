import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccessServicesComponent } from "./access-services.component";

fdescribe("AccessServicesComponent", () => {
  let component: AccessServicesComponent;
  let fixture: ComponentFixture<AccessServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccessServicesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create access service page", () => {
    expect(component).toBeTruthy();
  });

  it("should display welcome message", () => {
    const tag = fixture.debugElement.nativeElement.querySelector(".display-6");
    expect(tag.innerHTML).toBe("Welcome to Access Services");
    expect(tag.innerHTML.length).toBeGreaterThan(0);
  });
});
