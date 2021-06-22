import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listHistory } from '../../../models/listHistory';
import { NgxSpinnerService } from "ngx-spinner";
import { TranslateService } from '@ngx-translate/core';
import { SubAgentApiService } from 'src/app/Services/sub-agent-api-services';


@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})

export class BookingHistoryComponent implements OnInit {
  activePage: number;
  currentPage: number;
  totalPage: number;
  pageNo: number;
  pageSize: number;
  history: listHistory;
  constructor(private paymentLoader: NgxSpinnerService, private common: SubAgentApiService, private router: Router,
    private translate: TranslateService,) { }

  /**
   * this methode is used for user is logged or not
   */
  ngOnInit(): void {
    this.paginateHistoryList(1);
  }

  ngAfterViewChecked() {
    this.translate.use((sessionStorage.getItem('userLanguage') === 'ar-AE') ? "ar-AE" : "en-US");
    if (sessionStorage.getItem('userLanguage') == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
  }

  /**
   * API calling for history list
   * @param activePage 
   */
  paginateHistoryList(activePage: number) {
    this.common.getPaginatedhistoryList(activePage,sessionStorage.getItem('userLanguage')).subscribe(response => {
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
  viewhistory(id: any) {
    this.router.navigate(["/payment", id, "history"]);
  }

}