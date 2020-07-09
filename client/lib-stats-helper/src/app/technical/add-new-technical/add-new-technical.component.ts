import { Component, OnInit } from "@angular/core";
import { TechincalService, Months } from "src/app/models/models";
import { TechnicalServiceService } from "../../services/technical-service.service";

@Component({
  selector: "app-add-new-technical",
  templateUrl: "./add-new-technical.component.html",
  styleUrls: ["./add-new-technical.component.css"],
})
export class AddNewTechnicalComponent implements OnInit {
  techincalService: TechincalService = new TechincalService();

  monthList = Months;

  constructor(private technicalServiceService: TechnicalServiceService) {}

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
    this.techincalService.isCorrect = false;
  }

  addTechnicalService() {
    this.technicalServiceService
      .createTechnicalService(this.techincalService)
      .subscribe((data) => {
        console.log("posted ", data);
        alert("Congratulations! Your changes have been saved");
      });
  }

}
