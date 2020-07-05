import { Component, OnInit } from "@angular/core";
import { AccessService } from "../../models/models";

@Component({
  selector: "app-view-past",
  templateUrl: "./view-past.component.html",
  styleUrls: ["./view-past.component.css"],
})
export class ViewPastComponent implements OnInit {
  accessServiceList: AccessService[] = new Array();

  constructor() {}

  ngOnInit() {}

  fetchData(){
  }
}
