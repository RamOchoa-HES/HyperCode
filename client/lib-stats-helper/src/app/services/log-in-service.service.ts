import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ReginaUser } from "../models/models";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LogInServiceService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  authenticate(username: string, password: string) {
    let logInUrl = `${this.baseUrl}/api/validateLogin`;

    let reginaUser = {
      username: username,
      password: password,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(username + ":" + password),
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, DELETE, PUT, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      }),
    };

    this.http
      .post<ReginaUser>(logInUrl, reginaUser, httpOptions)
      .subscribe((data) => {
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("role", data.role.role);
        sessionStorage.setItem("password", password);
        this.router.navigate(["home"]);
      });
  }
}
