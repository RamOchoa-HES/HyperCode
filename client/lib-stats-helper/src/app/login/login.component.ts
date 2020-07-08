import { Component, OnInit } from "@angular/core";
import { LogInServiceService } from "../services/log-in-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";

  constructor(private logInService: LogInServiceService) {}

  errorMessage = "";

  ngOnInit() {}

  logIn() {
    let authenticated = this.logInService.authenticate(
      this.username,
      this.password
    );

    if (!authenticated) {
      this.errorMessage = "Incorrect Username or Password";
    } else {
      this.errorMessage = "";
    }
  }
}
