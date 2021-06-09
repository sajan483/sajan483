import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HotelDetailsPopupComponent } from '../hotel-details-popup/hotel-details-popup.component';

@Component({
  selector: 'app-room-details-popup',
  templateUrl: './room-details-popup.component.html',
  styleUrls: ['./room-details-popup.component.scss']
})
export class RoomDetailsPopupComponent implements OnInit {
  selectedRoomDetails: boolean;

  constructor(private translate: TranslateService) { }
  @Input() setViewData:any;

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
  /*
 * this method for hide room details popup
 */
  hideRoomDetailsPopUp(){
    HotelDetailsPopupComponent.roomMoreDetails = false;
  }

}