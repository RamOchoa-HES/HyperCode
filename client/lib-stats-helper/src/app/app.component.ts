import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "lib-stats-helper";

  loggedIn = false;

  constructor() {}

  isLogggedIn() {
    let user = sessionStorage.getItem("username");
    if (!(user == null)) {
      this.loggedIn = true;
    }
    return !(user == null);
  }

  logOut() {
    sessionStorage.removeItem("username");
    this.loggedIn = false;
  }

  isAdminRole() {
    return sessionStorage.getItem("role") == "ADMIN";
  }

  isAccessServiceRole() {
    return sessionStorage.getItem("role") == "ACCESS_SERVICES";
  }

  isERCRole() {
    return sessionStorage.getItem("role") == "ERC";
  }

  isEduServiceRole() {
    return sessionStorage.getItem("role") == "EDUCATION_SERVICE";
  }

  isInterLibraryRole() {
    return sessionStorage.getItem("role") == "INTERLIBRARY";
  }

  isResearchInstructionRole() {
    return sessionStorage.getItem("role") == "RESEARCH_INSTRUCTION";
  }

  isTechnicalServiceRole() {
    return sessionStorage.getItem("role") == "TECHNICAL_SERVICE";
  }

  isElectronicInfoRole() {
    return sessionStorage.getItem("role") == "ELECTRONIC_INFORMATION";
  }
}
