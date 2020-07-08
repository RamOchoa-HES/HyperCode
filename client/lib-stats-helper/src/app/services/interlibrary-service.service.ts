import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { InterLibraryLoan } from "../models/models";

@Injectable({
  providedIn: "root",
})
export class InterlibraryServiceService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getInterLibraryLoans() {
    let interLibraryLoanGetAllUrl = this.baseUrl + "/api/interLibraryLoans";

    return this.http.get(interLibraryLoanGetAllUrl);
  }

  createInterLibraryLoan(interLibraryLoan: InterLibraryLoan) {
    let interLibraryLoanCreateUrl = this.baseUrl + "/api/interLibraryLoans";

    return this.http.post<InterLibraryLoan>(
      interLibraryLoanCreateUrl,
      interLibraryLoan
    );
  }
}
