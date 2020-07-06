import { Component, OnInit } from "@angular/core";
import { EducationService, Months } from "../../models/models";
import { EducationServiceService } from "../../services/education-service.service";

@Component({
  selector: "app-add-new-education",
  templateUrl: "./add-new-education.component.html",
  styleUrls: ["./add-new-education.component.css"],
})
export class AddNewEducationComponent implements OnInit {
  educationService: EducationService = new EducationService();

  monthList = Months;

  selectedMonth1: any = null;
  selectedMonth2: any = null;
  selectedMonth3: any = null;
  selectedMonth4: any = null;

  constructor(private educationServiceService: EducationServiceService) {}

  ngOnInit() {}

  addEducationalService() {
    console.log("from edu ", this.educationService);
    this.educationServiceService
      .createEducationService(this.educationService)
      .subscribe((data) => {
        console.log("posted ", data);
      });
  }

  isInvalid() {
    if (
      !this.educationService ||
      !this.educationService.year ||
      !this.educationService.semester ||
      !this.educationService.numberOfPrograms ||
      !this.educationService.numberInAttendance ||
      !this.educationService.instagramFollowers ||
      !this.educationService.feedbackWallResponses ||
      !this.educationService.facebookFollowers ||
      !this.educationService.isCorrect
    ) {
      return true;
    }
    return false;
  }

  reset() {
    this.educationService.year = 0;
    this.educationService.semester = "";
    this.educationService.numberOfPrograms = 0;
    this.educationService.numberInAttendance = 0;
    this.educationService.instagramFollowers = 0;
    this.educationService.feedbackWallResponses = 0;
    this.educationService.facebookFollowers = 0;
    this.educationService.isCorrect = false;
    this.educationService.patreonMonth1 = 0;
    this.educationService.patreonMonth1Name = "";
    this.educationService.patreonMonth2 = 0;
    this.educationService.patreonMonth2Name = "";
    this.educationService.patreonMonth3 = 0;
    this.educationService.patreonMonth3Name = "";
    this.educationService.patreonMonth4 = 0;
    this.educationService.patreonMonth4Name = "";
  }

  selectedMonth1Func(value) {
    this.selectedMonth1 = value;
    this.educationService.patreonMonth1Name = this.selectedMonth1;
  }

  selectedMonth2Func(value) {
    this.selectedMonth2 = value;
    this.educationService.patreonMonth2Name = this.selectedMonth2;
  }

  selectedMonth3Func(value) {
    this.selectedMonth3 = value;
    this.educationService.patreonMonth3Name = this.selectedMonth3;
  }

  selectedMonth4Func(value) {
    this.selectedMonth4 = value;
    this.educationService.patreonMonth4Name = this.selectedMonth4;
  }
}
