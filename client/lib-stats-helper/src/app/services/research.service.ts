import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ResearchInstruction } from "../models/models";

@Injectable({
  providedIn: "root",
})
export class ResearchService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getResearchInstructions() {
    let getResearchInstructionAllUrl =
      this.baseUrl + "/api/researchInstructions";

    return this.http.get(getResearchInstructionAllUrl);
  }

  createResearchInstructionService(researchInstruction: ResearchInstruction) {
    let researchInstructionCreateUrl =
      this.baseUrl + "/api/researchInstructions";

    return this.http.post<ResearchInstruction>(
      researchInstructionCreateUrl,
      researchInstruction
    );
  }
}
