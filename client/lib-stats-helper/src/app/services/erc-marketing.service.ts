import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ERCMarketing } from "../models/models";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ErcMarketingService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  getERCMarketings() {
    let eRCMarketingGetAllUrl = this.baseUrl + "/api/ercMarketings";

    return this.http.get(eRCMarketingGetAllUrl, this.httpOptionsHelper());
  }

  createErcMarketing(ercMarketing: ERCMarketing) {
    let eRCMarketingCreateUrl = this.baseUrl + "/api/ercMarketings";

    return this.http.post<ERCMarketing>(
      eRCMarketingCreateUrl,
      ercMarketing,
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
