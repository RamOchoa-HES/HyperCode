import { Component, OnInit } from '@angular/core';
import { InterLibraryLoan } from 'src/app/models/models';

@Component({
  selector: 'app-view-past-interlibrary',
  templateUrl: './view-past-interlibrary.component.html',
  styleUrls: ['./view-past-interlibrary.component.css']
})
export class ViewPastInterlibraryComponent implements OnInit {

  interLibraryLoanList : InterLibraryLoan [] = new Array();

  constructor() { }

  ngOnInit() {
  }

  fetchData(){
  }

}
