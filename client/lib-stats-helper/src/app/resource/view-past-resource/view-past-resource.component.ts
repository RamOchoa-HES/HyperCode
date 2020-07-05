import { Component, OnInit } from "@angular/core";
import { ResearchInstruction } from "../../models/models";

@Component({
  selector: "app-view-past-resource",
  templateUrl: "./view-past-resource.component.html",
  styleUrls: ["./view-past-resource.component.css"],
})
export class ViewPastResourceComponent implements OnInit {

  researchInstructionList : ResearchInstruction [] = new Array();

  constructor() {}

  ngOnInit() {}

  fetchData(){
  }
}
