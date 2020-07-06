import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { AccessService } from "../models/models";

@Injectable({
  providedIn: "root",
})
export class AccessServiceServiceService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAccessService() {
    let accessServiceGetAllUrl = this.baseUrl + "/api/accessServices";

    return this.http.get(accessServiceGetAllUrl);
  }

  createAccessService(accessService: AccessService) {
    let accessServiceGetAllUrl = this.baseUrl + "/api/accessService";

    return this.http.post<AccessService>(accessServiceGetAllUrl, accessService);
  }
}
