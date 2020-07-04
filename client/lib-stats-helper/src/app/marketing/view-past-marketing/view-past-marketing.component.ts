import { Component, OnInit } from '@angular/core';
import { ERCMarketing } from 'src/app/models/models';

@Component({
  selector: 'app-view-past-marketing',
  templateUrl: './view-past-marketing.component.html',
  styleUrls: ['./view-past-marketing.component.css']
})
export class ViewPastMarketingComponent implements OnInit {

  ercMarketingList : ERCMarketing [] = new Array();

  constructor() { }

  ngOnInit() {
  }

}
