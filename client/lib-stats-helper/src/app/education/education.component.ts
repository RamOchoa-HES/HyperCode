import { Component, OnInit } from "@angular/core";
import { EducationService } from "../models/models";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"],
})
export class EducationComponent implements OnInit {
  educationService: EducationService = new EducationService();
  educationServiceList: EducationService[] = new Array();

  constructor() {}

  ngOnInit() {}

  addEducationalService() {
    this.educationServiceList.push(this.educationService);
  }
}
