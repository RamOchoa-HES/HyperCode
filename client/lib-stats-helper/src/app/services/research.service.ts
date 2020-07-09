import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ResearchInstruction } from "../models/models";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ResearchService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  getResearchInstructions() {
    let getResearchInstructionAllUrl =
      this.baseUrl + "/api/researchInstructions";

    return this.http.get(
      getResearchInstructionAllUrl,
      this.httpOptionsHelper()
    );
  }

  createResearchInstructionService(researchInstruction: ResearchInstruction) {
    let researchInstructionCreateUrl =
      this.baseUrl + "/api/researchInstructions";

    return this.http.post<ResearchInstruction>(
      researchInstructionCreateUrl,
      researchInstruction,
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
