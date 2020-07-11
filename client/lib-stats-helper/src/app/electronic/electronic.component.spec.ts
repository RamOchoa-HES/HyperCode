import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ElectronicComponent } from "./electronic.component";

fdescribe("ElectronicComponent", () => {
  let component: ElectronicComponent;
  let fixture: ComponentFixture<ElectronicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display welcome message", () => {
    const btn = fixture.debugElement.nativeElement.querySelector(".display-6");
    expect(btn.innerHTML).toBe("Welcome to Electronic Information");
    expect(btn.innerHTML.length).toBeGreaterThan(0);
  });
});
