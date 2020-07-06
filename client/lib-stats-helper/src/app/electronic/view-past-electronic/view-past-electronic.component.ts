import { Component, OnInit } from "@angular/core";
import { ElectronicInformation } from "../../models/models";
import { ElectronicServiceService } from "../../services/electronic-service.service";

@Component({
  selector: "app-view-past-electronic",
  templateUrl: "./view-past-electronic.component.html",
  styleUrls: ["./view-past-electronic.component.css"],
})
export class ViewPastElectronicComponent implements OnInit {
  electronicInfoList: ElectronicInformation[] = new Array();

  constructor(private electronicServiceService: ElectronicServiceService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.electronicServiceService
      .getElectronicInformations()
      .subscribe((dataList) => {
        for (const key in dataList) {
          this.electronicInfoList.push(dataList[key]);
        }
      });
  }
}
