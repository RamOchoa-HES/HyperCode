import { Component, OnInit, OnChanges } from "@angular/core";
import { EducationService } from "../../models/models";
import { EducationServiceService } from "../../services/education-service.service";

@Component({
  selector: "app-view-past-education",
  templateUrl: "./view-past-education.component.html",
  styleUrls: ["./view-past-education.component.css"],
})
export class ViewPastEducationComponent implements OnInit, OnChanges {
  educationServiceList: EducationService[] = new Array();

  constructor(private educationServiceService: EducationServiceService) {}

  ngOnInit() {
    this.fetchData();
  }

  ngOnChanges() {}

  fetchData() {
    this.educationServiceService
      .getEducationServices()
      .subscribe((dataList) => {
        for (const key in dataList) {
          this.educationServiceList.push(dataList[key]);
        }
      });
  }
}
