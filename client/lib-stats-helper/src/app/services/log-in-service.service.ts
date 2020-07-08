import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ReginaUser } from "../models/models";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class LogInServiceService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

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
      }),
    };

    this.http
      .post<ReginaUser>(logInUrl, reginaUser, httpOptions)
      .subscribe((data) => {
        console.log("data ", data);
      });
  }
}
