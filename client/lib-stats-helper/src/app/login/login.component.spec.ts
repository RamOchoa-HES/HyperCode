import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "protractor";

fdescribe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      declarations: [LoginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create login page", () => {
    expect(component).toBeTruthy();
  });

  it("should enter username", () => {
    const usernameInput: HTMLInputElement = fixture.nativeElement.querySelector(
      "#username"
    );
    fixture.detectChanges();
    fixture.whenStable().then((val) => {
      usernameInput.value = "Joe";
      usernameInput.dispatchEvent(new Event("input"));
      fixture.detectChanges();
      expect(component.username).toBe("Joe");
    });
  });

  it("should enter password", () => {
    const passwordInput: HTMLInputElement = fixture.nativeElement.querySelector(
      "#password"
    );
    fixture.detectChanges();
    fixture.whenStable().then((val) => {
      passwordInput.value = "Pass123";
      passwordInput.dispatchEvent(new Event("input"));
      fixture.detectChanges();
      expect(component.password).toBe("Pass123");
    });
  });
});
