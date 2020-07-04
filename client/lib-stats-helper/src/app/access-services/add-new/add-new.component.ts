import { Component, OnInit } from "@angular/core";
import { AccessService, Months } from "../../models/models";

@Component({
  selector: "app-add-new",
  templateUrl: "./add-new.component.html",
  styleUrls: ["./add-new.component.css"],
})
export class AddNewComponent implements OnInit {
  accessService = new AccessService();

  monthList = Months;

  selectedMonth1: any = null;
  selectedMonth2: any = null;
  selectedMonth3: any = null;
  selectedMonth4: any = null;

  constructor() {}

  ngOnInit() {}

  isInvalid() {
    if (
      !this.accessService ||
      !this.accessService.year ||
      !this.accessService.semester ||
      !this.accessService.groupStudyRoom ||
      !this.accessService.numberOfCourseReserves ||
      !this.accessService.numberOfItemReserves ||
      !this.accessService.physicalItem ||
      !this.accessService.isCorrect
    ) {
      return true;
    }
    return false;
  }

  reset() {
    this.accessService.year = 0;
    this.accessService.semester = "";
    this.accessService.groupStudyRoom = 0;
    this.accessService.numberOfCourseReserves = 0;
    this.accessService.numberOfItemReserves = 0;
    this.accessService.isCorrect = false;
    this.accessService.physicalItem = 0;
  }

  addAccessService() {
    console.log("access ", this.accessService);
  }

  selectedMonth1Func(value) {
    this.selectedMonth1 = value;
  }

  selectedMonth2Func(value) {
    this.selectedMonth2 = value;
  }

  selectedMonth3Func(value) {
    this.selectedMonth3 = value;
  }

  selectedMonth4Func(value) {
    this.selectedMonth4 = value;
  }
}
