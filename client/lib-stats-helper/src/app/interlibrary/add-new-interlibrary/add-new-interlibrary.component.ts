import { Component, OnInit } from "@angular/core";
import { InterLibraryLoan, Months } from "../../models/models";
import { InterlibraryServiceService } from "../../services/interlibrary-service.service";

@Component({
  selector: "app-add-new-interlibrary",
  templateUrl: "./add-new-interlibrary.component.html",
  styleUrls: ["./add-new-interlibrary.component.css"],
})
export class AddNewInterlibraryComponent implements OnInit {
  interLibraryLoan: InterLibraryLoan = new InterLibraryLoan();

  monthList = Months;

  selectedMonth1: any = null;
  selectedMonth2: any = null;
  selectedMonth3: any = null;
  selectedMonth4: any = null;

  constructor(private interLibraryService: InterlibraryServiceService) {}

  ngOnInit() {}

  isInvalid() {
    if (
      !this.interLibraryLoan ||
      !this.interLibraryLoan.year ||
      !this.interLibraryLoan.semester ||
      !this.interLibraryLoan.numOfRequestedArticlesBorrowing ||
      !this.interLibraryLoan.numOfRequestedArticlesLending ||
      !this.interLibraryLoan.numOfRequestedBooksBorrowing ||
      !this.interLibraryLoan.numOfRequestedBooksLending ||
      !this.interLibraryLoan.getItNow ||
      !this.interLibraryLoan.docDeliveryAlreadyOwned ||
      !this.interLibraryLoan.docDeliveryFoundFree ||
      !this.interLibraryLoan.docDeliveryPurchased ||
      !this.interLibraryLoan.isCorrect
    ) {
      return true;
    }
    return false;
  }

  reset() {
    this.interLibraryLoan.year = 0;
    this.interLibraryLoan.semester = "";
    this.interLibraryLoan.numOfRequestedArticlesBorrowing = 0;
    this.interLibraryLoan.numOfRequestedArticlesLending = 0;
    this.interLibraryLoan.numOfRequestedBooksBorrowing = 0;
    this.interLibraryLoan.numOfRequestedBooksLending = 0;
    this.interLibraryLoan.getItNow = 0;
    this.interLibraryLoan.docDeliveryAlreadyOwned = 0;
    this.interLibraryLoan.docDeliveryFoundFree = 0;
    this.interLibraryLoan.docDeliveryPurchased = 0;
    this.interLibraryLoan.isCorrect;
    this.interLibraryLoan.patreonMonth1 = 0;
    this.interLibraryLoan.patreonMonth1Name = "";
    this.interLibraryLoan.patreonMonth2 = 0;
    this.interLibraryLoan.patreonMonth2Name = "";
    this.interLibraryLoan.patreonMonth3 = 0;
    this.interLibraryLoan.patreonMonth3Name = "";
    this.interLibraryLoan.patreonMonth4 = 0;
    this.interLibraryLoan.patreonMonth4Name = "";
  }

  addInterLibraryLoan() {
    this.interLibraryService
      .createInterLibraryLoan(this.interLibraryLoan)
      .subscribe((data) => {
        console.log("posted ", data);
      });
  }

  selectedMonth1Func(value) {
    this.selectedMonth1 = value;
    this.interLibraryLoan.patreonMonth1Name = this.selectedMonth1;
  }

  selectedMonth2Func(value) {
    this.selectedMonth2 = value;
    this.interLibraryLoan.patreonMonth2Name = this.selectedMonth2;
  }

  selectedMonth3Func(value) {
    this.selectedMonth3 = value;
    this.interLibraryLoan.patreonMonth3Name = this.selectedMonth3;
  }

  selectedMonth4Func(value) {
    this.selectedMonth4 = value;
    this.interLibraryLoan.patreonMonth4Name = this.selectedMonth4;
  }
}
