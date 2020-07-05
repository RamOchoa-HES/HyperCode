import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessServiceServiceService {

  baseUrl : string = "http://localhost:9191/api/accessServices"

  constructor(private http: HttpClient) { }

  getAccessService(){
    return this.http.get(this.baseUrl);
  }

}
