import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { EducationService } from "../../models/models";

@Component({
  selector: "app-view-past-education",
  templateUrl: "./view-past-education.component.html",
  styleUrls: ["./view-past-education.component.css"],
})
export class ViewPastEducationComponent implements OnInit, OnChanges {
  educationServiceList: EducationService[] = new Array();

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges() {}

}
