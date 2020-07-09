import { Component, OnInit } from "@angular/core";
import { LogInServiceService } from "../services/log-in-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  authenticated = true;

  constructor(
    private logInService: LogInServiceService,
    private router: Router
  ) {}

  errorMessage = "";

  ngOnInit() {}

  logIn() {
    this.logInService
      .authenticate(this.username, this.password)
      .subscribe(
        (data) => {
          sessionStorage.setItem("username", data.username);
          sessionStorage.setItem("role", data.role.role);
          sessionStorage.setItem("password", this.password);
          this.authenticated = true;
          this.router.navigate(["home"]);
        },
        (err) => (this.authenticated = false)
      );

    if (!this.authenticated) {
      this.errorMessage = "Incorrect Username or Password";
    } else {
      this.errorMessage = "";
    }
  }
}
