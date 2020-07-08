import { Component, OnInit } from "@angular/core";
import { ResearchInstruction, Months } from "../../models/models";
import { ResearchService } from "../../services/research.service";

@Component({
  selector: "app-add-new-resource",
  templateUrl: "./add-new-resource.component.html",
  styleUrls: ["./add-new-resource.component.css"],
})
export class AddNewResourceComponent implements OnInit {
  
  researchInstruction: ResearchInstruction = new ResearchInstruction();

  monthList = Months;

  constructor(private researchService: ResearchService) {}

  ngOnInit() {}

  isInvalid() {
    if (
      !this.researchInstruction ||
      !this.researchInstruction.isCorrect ||
      !this.researchInstruction.year ||
      !this.researchInstruction.semester
    ) {
      return true;
    }
    return false;
  }

  addResearchInstruction() {
    this.researchService
      .createResearchInstructionService(this.researchInstruction)
      .subscribe((data) => {
        console.log("posted ", data);
        alert("Congratulations! Your changes have been saved");
      });
  }
  reset() {
      this.researchInstruction.isCorrect = false;
      this.researchInstruction.year = 0;
      this.researchInstruction.semester = "";
  }
}
