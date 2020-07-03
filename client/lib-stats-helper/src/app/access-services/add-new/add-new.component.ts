import { Component, OnInit } from '@angular/core';
import { AccessService } from "../../models/models";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  accessService = new AccessService();

  accessServiceList: AccessService[] = new Array();

  constructor() { }

  ngOnInit() {
  }

  addAccessService() {
    this.accessServiceList.push(this.accessService);
  }

}
