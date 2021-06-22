import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppStore } from 'src/app/stores/app.store';
import { NotificationService } from 'src/app/common/services/notification.service';


@Component({
  selector: 'app-recent-booking',
  templateUrl: './recent-booking.component.html',
  styleUrls: ['./recent-booking.component.scss']
})
export class RecentBookingComponent implements OnInit {
  @Input() recentHistory: any;
  ratingMakkah = 1;
  readonly = true;

  constructor(private router: Router, private appStore: AppStore, private notifyService: NotificationService,
    private translate: TranslateService,) { }

  ngOnInit() {
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
   * this method for navigate details page
   */
  viewhistory(id: any) {
    this.router.navigate(["subagent/bookings", id, "itinerary"]);
  }

  /**
   * navigate history page 
   */
  navigateHostory() {
    this.router.navigate(["subagent/history"]);
  }

  /**
   * this merthod is used to copy data
   * @param val 
   */
  copytext(val: string) {
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
    this.notifyService.showSuccess(this.translate.instant("Copied Booking Reference Number"));
  }

}
