import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "lib-stats-helper";

  loggedIn = false;

  toggleLogIn(){
    this.loggedIn = !this.loggedIn;
  }
}
