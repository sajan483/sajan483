import { Component, OnInit } from '@angular/core';
import { SubAgentApiService } from 'src/app/Services/sub-agent-api-services';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/common/services/helper-service';

@Component({
  selector: 'app-iban-account-details',
  templateUrl: './iban-account-details.component.html',
  styleUrls: ['./iban-account-details.component.scss']
})
export class IBANAccountDetailsComponent implements OnInit {
  today: any;
  fromDate : any;
  accDetails:any
  startDate: string;
  endDate: string;
  accountHistory:any[] = [];
  shimmer:boolean = true;

  constructor(private subAgentApi: SubAgentApiService,private translate: TranslateService,private helper: HelperService) { }

  ngOnInit() {
    this.today = new Date();
    this.fromDate = this.helper.dicrimentMonth(this.today,1);
    this.accounddetails();
    this.getIbanDetails(this.fromDate,this.today);
  }
  
  accounddetails(){
    this.subAgentApi.getIbanDetails(sessionStorage.getItem('userLanguage')).subscribe((data)=>{
      this.accDetails = data.Balance;
    })
  }

  getIbanDetails(from1,to1){
    var from = this.helper.dateFormaterYMd(from1);
    var to = this.helper.dateFormaterYMd(to1);
    this.subAgentApi.getIbanHistory(from,to,sessionStorage.getItem('userLanguage')).subscribe((data)=>{
      this.shimmer = false;
      this.accountHistory = data.response.ResponseDeatils.AccountStatment.AccountStatmentDeatils;
    })
  }

  setSearchDate(){
    this.shimmer = true;
    this.startDate = (<HTMLInputElement>document.getElementById("historydate_input")).value.split(" - ")[0];
    this.endDate = (<HTMLInputElement>document.getElementById("historydate_input")).value.split(" - ")[1];
    if(this.startDate && this.endDate){
      this.getIbanDetails(this.startDate,this.endDate);
    }
    else{
      this.getIbanDetails(this.fromDate,this.today);
    }
  }

}
