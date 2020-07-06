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

  selectedMonth1: any = null;
  selectedMonth2: any = null;
  selectedMonth3: any = null;
  selectedMonth4: any = null;

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
      });
  }

  selectedMonth1Func(value) {
    this.selectedMonth1 = value;
    this.researchInstruction.patreonMonth1Name = this.selectedMonth1;
  }

  selectedMonth2Func(value) {
    this.selectedMonth2 = value;
    this.researchInstruction.patreonMonth2Name = this.selectedMonth2;
  }

  selectedMonth3Func(value) {
    this.selectedMonth3 = value;
    this.researchInstruction.patreonMonth3Name = this.selectedMonth3;
  }

  selectedMonth4Func(value) {
    this.selectedMonth4 = value;
    this.researchInstruction.patreonMonth4Name = this.selectedMonth4;
  }

  reset() {}
}
