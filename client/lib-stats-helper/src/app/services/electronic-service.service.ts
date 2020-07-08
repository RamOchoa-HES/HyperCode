import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ElectronicInformation } from "../models/models";

@Injectable({
  providedIn: "root",
})
export class ElectronicServiceService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getElectronicInformations() {
    let electronicInformationGetAllUrl =
      this.baseUrl + "/api/electronicInformationServices";

    return this.http.get(electronicInformationGetAllUrl);
  }

  createElectronicInfo(electronicInformation: ElectronicInformation) {
    let electronicInformationCreateUrl =
      this.baseUrl + "/api/electronicInformationServices";

    return this.http.post<ElectronicInformation>(
      electronicInformationCreateUrl,
      electronicInformation
    );
  }
}
