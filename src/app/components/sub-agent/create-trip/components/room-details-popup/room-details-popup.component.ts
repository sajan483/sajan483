import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-details-popup',
  templateUrl: './room-details-popup.component.html',
  styleUrls: ['./room-details-popup.component.scss']
})
export class RoomDetailsPopupComponent implements OnInit {
  selectedRoomDetails: boolean;

  constructor() { }
  @Input() setViewData:any;

  ngOnInit() {
    this.selectedRoomDetails = true;
  }

  /*
 * this method for hide room details popup
 */
  hideRoomDetailsPopUp(){
    this.selectedRoomDetails = false;
  }

}