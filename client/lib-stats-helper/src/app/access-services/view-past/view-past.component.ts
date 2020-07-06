import { Component, OnInit } from "@angular/core";
import { AccessService } from "../../models/models";
import { AccessServiceServiceService } from "../../services/access-service-service.service";

@Component({
  selector: "app-view-past",
  templateUrl: "./view-past.component.html",
  styleUrls: ["./view-past.component.css"],
})
export class ViewPastComponent implements OnInit {
  accessServiceList: AccessService[] = new Array();

  constructor(private accessServiceService: AccessServiceServiceService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.accessServiceService.getAccessService().subscribe((dataList) => {
      for (const key in dataList) {
        this.accessServiceList.push(dataList[key]);
      }
    });
  }
}
