import { Component, OnInit } from "@angular/core";
import { TechincalService, Months } from "src/app/models/models";

@Component({
  selector: "app-add-new-technical",
  templateUrl: "./add-new-technical.component.html",
  styleUrls: ["./add-new-technical.component.css"],
})
export class AddNewTechnicalComponent implements OnInit {
  techincalService: TechincalService = new TechincalService();

  monthList = Months;

  selectedMonth1: any = null;
  selectedMonth2: any = null;
  selectedMonth3: any = null;
  selectedMonth4: any = null;

  constructor() {}

  ngOnInit() {}

  isInvalid() {
    if (
      !this.techincalService ||
      !this.techincalService.year ||
      !this.techincalService.semester ||
      !this.techincalService.numberOfBooksDVDs ||
      !this.techincalService.numberOfEbooks ||
      !this.techincalService.additionalItems ||
      !this.techincalService.isCorrect
    ) {
      return true;
    }
    return false;
  }

  reset() {
    this.techincalService.year = 0;
    this.techincalService.semester = "";
    this.techincalService.numberOfBooksDVDs = 0;
    this.techincalService.numberOfEbooks = 0;
    this.techincalService.additionalItems = 0;
    this.techincalService.isCorrect;
    this.techincalService.patreonMonth1 = 0;
    this.techincalService.patreonMonth1Name = "";
    this.techincalService.patreonMonth2 = 0;
    this.techincalService.patreonMonth2Name = "";
    this.techincalService.patreonMonth3 = 0;
    this.techincalService.patreonMonth3Name = "";
    this.techincalService.patreonMonth4 = 0;
    this.techincalService.patreonMonth4Name = "";
  }

  addTechnicalService() {
    console.log("technical ", this.techincalService);
  }

  selectedMonth1Func(value) {
    this.selectedMonth1 = value;
    this.techincalService.patreonMonth1Name = this.selectedMonth1;
  }

  selectedMonth2Func(value) {
    this.selectedMonth2 = value;
    this.techincalService.patreonMonth2Name = this.selectedMonth2;
  }

  selectedMonth3Func(value) {
    this.selectedMonth3 = value;
    this.techincalService.patreonMonth3Name = this.selectedMonth3;
  }

  selectedMonth4Func(value) {
    this.selectedMonth4 = value;
    this.techincalService.patreonMonth4Name = this.selectedMonth4;
  }
}
