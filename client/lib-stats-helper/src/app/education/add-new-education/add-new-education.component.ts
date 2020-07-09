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

  constructor(private educationServiceService: EducationServiceService) {}

  ngOnInit() {}

  addEducationalService() {
    this.educationServiceService
      .createEducationService(this.educationService)
      .subscribe((data) => {
        console.log("posted ", data);
        alert("Congratulations! Your changes have been saved");
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
  }

}
