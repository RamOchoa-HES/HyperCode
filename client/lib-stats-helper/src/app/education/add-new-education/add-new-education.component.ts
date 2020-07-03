import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { EducationService } from "../../models/models";

@Component({
  selector: "app-add-new-education",
  templateUrl: "./add-new-education.component.html",
  styleUrls: ["./add-new-education.component.css"],
})
export class AddNewEducationComponent implements OnInit {
  educationService: EducationService = new EducationService();

  @Output() educationServiceInfo = new EventEmitter<EducationService>();

  constructor() {}

  ngOnInit() {}

  addEducationalService() {
    this.educationServiceInfo.emit(this.educationService);
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
