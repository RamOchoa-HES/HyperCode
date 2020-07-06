import { Component, OnInit } from "@angular/core";
import { ResearchInstruction } from "../../models/models";
import { ResearchService} from '../../services/research.service'

@Component({
  selector: "app-view-past-resource",
  templateUrl: "./view-past-resource.component.html",
  styleUrls: ["./view-past-resource.component.css"],
})
export class ViewPastResourceComponent implements OnInit {

  researchInstructionList : ResearchInstruction [] = new Array();

  constructor(private researchService: ResearchService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.researchService.getResearchInstructions().subscribe(dataList => {
      for(const key in dataList){
        this.researchInstructionList.push(dataList[key]);
      }
    }) 
  }
}
