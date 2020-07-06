import { Component, OnInit } from "@angular/core";
import { ERCMarketing } from "src/app/models/models";
import { ErcMarketingService } from "../../services/erc-marketing.service";

@Component({
  selector: "app-view-past-marketing",
  templateUrl: "./view-past-marketing.component.html",
  styleUrls: ["./view-past-marketing.component.css"],
})
export class ViewPastMarketingComponent implements OnInit {
  ercMarketingList: ERCMarketing[] = new Array();

  constructor(private ercMarketingService: ErcMarketingService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.ercMarketingService.getERCMarketings().subscribe((dataList) => {
      for (const key in dataList) {
        this.ercMarketingList.push(dataList[key]);
      }
    });
  }
}
