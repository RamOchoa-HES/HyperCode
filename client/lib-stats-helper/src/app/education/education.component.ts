import { Component, OnInit } from "@angular/core";
import { EducationService } from "../models/models";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"],
})
export class EducationComponent implements OnInit {
  educationInfo: EducationService;

  constructor() {}

  ngOnInit() {}
}
