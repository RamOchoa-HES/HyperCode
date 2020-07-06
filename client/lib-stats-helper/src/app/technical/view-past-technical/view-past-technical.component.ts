import { Component, OnInit } from "@angular/core";
import { TechincalService } from "src/app/models/models";
import { TechnicalServiceService } from "../../services/technical-service.service";

@Component({
  selector: "app-view-past-technical",
  templateUrl: "./view-past-technical.component.html",
  styleUrls: ["./view-past-technical.component.css"],
})
export class ViewPastTechnicalComponent implements OnInit {
  technicalServiceList: TechincalService[] = new Array();

  constructor(private technicalServiceService: TechnicalServiceService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.technicalServiceService
      .getTechnicalServices()
      .subscribe((dataList) => {
        for (const key in dataList) {
          this.technicalServiceList.push(dataList[key]);
        }
      });
  }
}
