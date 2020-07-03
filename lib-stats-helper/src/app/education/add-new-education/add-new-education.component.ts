import { Component, OnInit } from "@angular/core";
import { EducationService } from "../../models/models";

@Component({
  selector: "app-add-new-education",
  templateUrl: "./add-new-education.component.html",
  styleUrls: ["./add-new-education.component.css"],
})
export class AddNewEducationComponent implements OnInit {
  educationService: EducationService = new EducationService();
  educationServiceList: EducationService[] = new Array();

  constructor() {}

  ngOnInit() {}

  addEducationalService() {
    this.educationServiceList.push(this.educationService);
  }
}
