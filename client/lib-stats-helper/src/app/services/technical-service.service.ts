import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { TechincalService } from "../models/models";

@Injectable({
  providedIn: "root",
})
export class TechnicalServiceService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getTechnicalServices() {
    let technicalServicGetAllUrl = this.baseUrl + "/api/technicalServices";

    return this.http.get(technicalServicGetAllUrl);
  }

  createTechnicalService(technicalService: TechincalService) {
    let technicalServicGetAllUrl = this.baseUrl + "/api/technicalService";

    return this.http.post<TechincalService>(
      technicalServicGetAllUrl,
      technicalService
    );
  }
}
