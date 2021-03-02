import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { listHistory } from '../../../listHistory';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService }from '../../../common/services/auth-services';
import { TranslateService } from "@ngx-translate/core";
import { CommonApiService } from 'src/app/common/services/common-api-services';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss'],
  providers: [CommonApiService,AuthService]
})
export class BookingHistoryComponent implements OnInit {
  activePage:number;
  currentPage:number;
  totalPage:number;
  pageNo:number;
  pageSize:number;
  history: listHistory;
  constructor(private paymentLoader: NgxSpinnerService,private common:CommonApiService,private router:Router,private translate: TranslateService,
    private authLogin:AuthService) { }

  /**
   * this methode is used for user is logged or not
   */
  ngOnInit():void {
    if(this.authLogin.isLoggedIn()){
      this.paginateHistoryList(1);
    }else{
      this.router.navigate(["/login"]);
    }
  }
  
  /**
   * API calling for history list
   * @param activePage 
   */
  paginateHistoryList(activePage: number) {
    this.common.getPaginatedhistoryList(activePage).subscribe(response => {
      this.pageNo = response.page;
      this.pageSize = response.page_size;
      this.history = response.results;
      this.totalPage = response.total_pages;
      this.currentPage = response.page;
    })
  }

  /**
   * this methode used for navigate history view page
   * @param id 
   */
  viewhistory(id:any){
    this.router.navigate(["payment",id,"history"]);
  }

}