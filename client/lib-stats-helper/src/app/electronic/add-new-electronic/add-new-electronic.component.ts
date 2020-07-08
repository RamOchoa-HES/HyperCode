import { Component, OnInit } from "@angular/core";
import { ElectronicInformation, Months } from "../../models/models";
import { ElectronicServiceService } from "../../services/electronic-service.service";

@Component({
  selector: "app-add-new-electronic",
  templateUrl: "./add-new-electronic.component.html",
  styleUrls: ["./add-new-electronic.component.css"],
})
export class AddNewElectronicComponent implements OnInit {

  electronicInfo: ElectronicInformation = new ElectronicInformation();

  monthList = Months;

  constructor(private electronicServiceService: ElectronicServiceService) {}

  ngOnInit() {}

  addElectronicInfo() {
    this.electronicServiceService
      .createElectronicInfo(this.electronicInfo)
      .subscribe((data) => {
        console.log("posted ", data);
        alert("Congratulations! Your changes have been saved");
      });
  }

  isInvalid() {
    if (
      !this.electronicInfo ||
      !this.electronicInfo.year ||
      !this.electronicInfo.semester ||
      !this.electronicInfo.isCorrect
    ) {
      return true;
    }
    return false;
  }

  reset() {
    this.electronicInfo.year = 0;
    this.electronicInfo.semester = "";
    this.electronicInfo.uniquePageViewsInASession = 0;
    this.electronicInfo.uniqueUserSessions = 0;
    this.electronicInfo.bibliographicDatabasesFullText = 0;
    this.electronicInfo.bibliographicDatabasesSearches = 0;
    this.electronicInfo.fullTextDatabasesFullText = 0;
    this.electronicInfo.fullTextDatabasesSearches = 0;
    this.electronicInfo.edsSearches = 0;
    this.electronicInfo.edsSessions = 0;
    this.electronicInfo.edsTotalFullText = 0;
    this.electronicInfo.edsAbstract = 0;
    this.electronicInfo.ebooksUsed = 0;
    this.electronicInfo.streamVideosViewed = 0;
    this.electronicInfo.isCorrect = false;
  }

}
