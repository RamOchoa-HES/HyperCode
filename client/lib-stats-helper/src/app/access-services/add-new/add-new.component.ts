import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { AccessService } from "../../models/models";

@Component({
  selector: "app-add-new",
  templateUrl: "./add-new.component.html",
  styleUrls: ["./add-new.component.css"],
})
export class AddNewComponent implements OnInit {
  accessService = new AccessService();

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
}
