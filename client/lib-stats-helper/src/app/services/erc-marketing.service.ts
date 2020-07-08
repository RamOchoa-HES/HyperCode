import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ERCMarketing } from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class ErcMarketingService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getERCMarketings() {
    let eRCMarketingGetAllUrl = this.baseUrl + "/api/ercMarketings";

    return this.http.get(eRCMarketingGetAllUrl);
  }

  createErcMarketing(ercMarketing: ERCMarketing) {
    let eRCMarketingCreateUrl = this.baseUrl + "/api/ercMarketings";

    return this.http.post<ERCMarketing>(eRCMarketingCreateUrl, ercMarketing);
  }
}
