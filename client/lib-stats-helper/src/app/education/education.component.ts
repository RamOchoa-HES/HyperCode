import { Component, OnInit, OnChanges } from "@angular/core";
import { EducationService } from "../models/models";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"],
})
export class EducationComponent implements OnInit {
  showViewPast = true;

  educationInfo: EducationService;

  constructor() {}

  ngOnInit() {}

  onNewInfo(educationInfo: EducationService) {
    this.educationInfo = educationInfo;
  }
}
