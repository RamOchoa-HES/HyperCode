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

  ngOnInit() {}

  logIn() {
    this.logInService.authenticate(this.username, this.password);
  }
}
