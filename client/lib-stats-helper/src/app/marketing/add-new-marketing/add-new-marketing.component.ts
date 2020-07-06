import { Component, OnInit } from "@angular/core";
import { ERCMarketing, Months } from "../../models/models";
import { ErcMarketingService } from "../../services/erc-marketing.service";

@Component({
  selector: "app-add-new-marketing",
  templateUrl: "./add-new-marketing.component.html",
  styleUrls: ["./add-new-marketing.component.css"],
})
export class AddNewMarketingComponent implements OnInit {
  ercMarketing: ERCMarketing = new ERCMarketing();

  monthList = Months;

  selectedMonth1: any = null;
  selectedMonth2: any = null;
  selectedMonth3: any = null;
  selectedMonth4: any = null;

  constructor(private ercMarketingService: ErcMarketingService) {}

  ngOnInit() {}

  addERCMarketing() {
    this.ercMarketingService
      .createErcMarketing(this.ercMarketing)
      .subscribe((data) => {
        console.log("posted ", data);
      });
  }

  isInvalid() {
    if (
      !this.ercMarketing ||
      !this.ercMarketing.year ||
      !this.ercMarketing.semester ||
      !this.ercMarketing.lamination ||
      !this.ercMarketing.binding ||
      !this.ercMarketing.isCorrect
    ) {
      return true;
    }
    return false;
  }

  reset() {
    this.ercMarketing.year = 0;
    this.ercMarketing.semester = "";
    this.ercMarketing.lamination = 0;
    this.ercMarketing.binding = 0;
    this.ercMarketing.patreonMonth1 = 0;
    this.ercMarketing.patreonMonth1Name = "";
    this.ercMarketing.patreonMonth2 = 0;
    this.ercMarketing.patreonMonth2Name = "";
    this.ercMarketing.patreonMonth3 = 0;
    this.ercMarketing.patreonMonth3Name = "";
    this.ercMarketing.patreonMonth4 = 0;
    this.ercMarketing.patreonMonth4Name = "";

    this.ercMarketing.isCorrect = false;
  }

  selectedMonth1Func(value) {
    this.selectedMonth1 = value;
    this.ercMarketing.patreonMonth1Name = this.selectedMonth1;
  }

  selectedMonth2Func(value) {
    this.selectedMonth2 = value;
    this.ercMarketing.patreonMonth2Name = this.selectedMonth2;
  }

  selectedMonth3Func(value) {
    this.selectedMonth3 = value;
    this.ercMarketing.patreonMonth3Name = this.selectedMonth3;
  }

  selectedMonth4Func(value) {
    this.selectedMonth4 = value;
    this.ercMarketing.patreonMonth4Name = this.selectedMonth4;
  }
}
