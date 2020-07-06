import { Component, OnInit } from '@angular/core';
import { InterLibraryLoan } from 'src/app/models/models';
import {InterlibraryServiceService} from '../../services/interlibrary-service.service'

@Component({
  selector: 'app-view-past-interlibrary',
  templateUrl: './view-past-interlibrary.component.html',
  styleUrls: ['./view-past-interlibrary.component.css']
})
export class ViewPastInterlibraryComponent implements OnInit {

  interLibraryLoanList : InterLibraryLoan [] = new Array();

  constructor(private interLibraryLoanService: InterlibraryServiceService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.interLibraryLoanService.getInterLibraryLoans().subscribe(dataList => {
      for(const key in dataList){
        this.interLibraryLoanList.push(dataList[key]);
      }
    })
  }

}
