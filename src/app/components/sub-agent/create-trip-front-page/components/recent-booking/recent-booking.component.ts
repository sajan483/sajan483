import { Component, OnInit,Input } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Router} from '@angular/router';
import { AppStore } from 'src/app/stores/app.store';
import { NotificationService } from 'src/app/common/services/notification.service';


@Component({
  selector: 'app-recent-booking',
  templateUrl: './recent-booking.component.html',
  styleUrls: ['./recent-booking.component.scss']
})
export class RecentBookingComponent implements OnInit {
  @Input() recentHistory:any;
  ratingMakkah=1;

  constructor(private translate: TranslateService,private router:Router,private appStore: AppStore,private notifyService : NotificationService) { }

  ngOnInit() {
  }

  /**
   * this method for navigate details page
   */
  viewhistory(id:any){
    this.router.navigate(["payment",id,"history"]);
  }

  /**
   * this merthod is used to copy data
   * @param val 
   */
  copytext(val: string){
      let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      this.notifyService.showSuccess("copied BRN");
  }

  /**
   * this method used for show details
   * @param i 
   */
  viewDetails(i:any){
    (<HTMLElement>document.getElementById("bookDetails"+i)).style.display = "revert";
    (<HTMLElement>document.getElementById("arrowdown"+i)).style.display = "none";
    (<HTMLElement>document.getElementById("arrowup"+i)).style.display = "block";
  }
  
  /**
   * 
   * @param i this method used for hide details
   */
  lessDetails(i:any){
    (<HTMLElement>document.getElementById("bookDetails"+i)).style.display = "none";
    (<HTMLElement>document.getElementById("arrowdown"+i)).style.display = "block";
    (<HTMLElement>document.getElementById("arrowup"+i)).style.display = "none";
  }
}
