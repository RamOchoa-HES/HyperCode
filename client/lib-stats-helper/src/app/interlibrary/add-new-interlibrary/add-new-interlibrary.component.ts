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
    this.interLibraryLoan.isCorrect = false;
  }

  addInterLibraryLoan() {
    this.interLibraryService
      .createInterLibraryLoan(this.interLibraryLoan)
      .subscribe((data) => {
        console.log("posted ", data);
        alert("Congratulations! Your changes have been saved");
      });
  }
}
