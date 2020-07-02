import { Component, OnInit, OnChanges } from "@angular/core";
import { AccessService } from "../models/models";

@Component({
  selector: "app-access-services",
  templateUrl: "./access-services.component.html",
  styleUrls: ["./access-services.component.css"],
})
export class AccessServicesComponent implements OnInit, OnChanges {
  accessService = new AccessService();
  accessServiceList: AccessService[] = new Array();

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

  addAccessService() {
    this.accessServiceList.push(this.accessService);
  }
}
