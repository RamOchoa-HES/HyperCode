import { Component, OnInit } from '@angular/core';
import { TechincalService } from 'src/app/models/models';

@Component({
  selector: 'app-view-past-technical',
  templateUrl: './view-past-technical.component.html',
  styleUrls: ['./view-past-technical.component.css']
})
export class ViewPastTechnicalComponent implements OnInit {

  technicalServiceList : TechincalService[] = new Array();
  
  constructor() { }

  ngOnInit() {
  }

}
