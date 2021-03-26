import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-roomdetails-popup',
  templateUrl: './roomdetails-popup.component.html',
  styleUrls: ['./roomdetails-popup.component.scss']
})
export class RoomdetailsPopupComponent implements OnInit {
  selectedRoomDetails : boolean = false;

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