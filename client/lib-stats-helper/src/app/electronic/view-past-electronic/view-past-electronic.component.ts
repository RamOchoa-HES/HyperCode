import { Component, OnInit } from "@angular/core";
import { ElectronicInformation } from "../../models/models";

@Component({
  selector: "app-view-past-electronic",
  templateUrl: "./view-past-electronic.component.html",
  styleUrls: ["./view-past-electronic.component.css"],
})
export class ViewPastElectronicComponent implements OnInit {
  
  electronicInfoList : ElectronicInformation [] = new Array();
  
  constructor() {}

  ngOnInit() {}

  fetchData() {}
}
