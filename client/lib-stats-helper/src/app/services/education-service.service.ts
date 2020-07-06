import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { EducationService } from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class EducationServiceService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getEducationServices() {
    let educationServiceGetAllUrl = this.baseUrl + "/api/educationServices";

    return this.http.get(educationServiceGetAllUrl);
  }

  createEducationService(educationService: EducationService) {
    let EducationServiceGetAllUrl = this.baseUrl + "/api/educationService";

    return this.http.post<EducationService>(EducationServiceGetAllUrl, educationService);
  }
}
