import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { AccessService } from "../models/models";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AccessServiceServiceService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  getAccessServices(): Observable<AccessService[]> {
    let accessServiceGetAllUrl = `${this.baseUrl}/api/accessServices`;

    return this.http.get<AccessService[]>(
      accessServiceGetAllUrl,
      this.httpOptionsHelper()
    );
  }

  createAccessService(accessService: AccessService) {
    let accessServiceGetAllUrl = this.baseUrl + "/api/accessServices";

    return this.http.post<AccessService>(
      accessServiceGetAllUrl,
      accessService,
      this.httpOptionsHelper()
    );
  }

  httpOptionsHelper() {
    let username = sessionStorage.getItem("username");
    let password = sessionStorage.getItem("password");

    if (!username || !password) {
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("password");
      sessionStorage.removeItem("role");

      this.router.navigate(["home"]);
    }

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
    return httpOptions;
  }
}
