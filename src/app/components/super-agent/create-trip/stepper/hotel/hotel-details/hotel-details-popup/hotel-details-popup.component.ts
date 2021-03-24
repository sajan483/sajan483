import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { StepperAdapter } from 'src/app/adapters/super-agent/stepper-adapter';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { StepperComponent } from '../../../stepper.component';

@Component({
  selector: 'app-hotel-details-popup',
  templateUrl: './hotel-details-popup.component.html',
  styleUrls: ['./hotel-details-popup.component.scss']
})

export class HotelDetailsPopupComponent implements OnInit,OnChanges {
  private stepperAdapter: StepperAdapter = new StepperAdapter(null,null);
  showHotelDetails:boolean = true;
  selectedHotel: any;
  selectedRoomGroups: any[];
  hotelPics: any[];
  hotelPics1: any[];
  hotelPics2: any[];
  moreimages: boolean;
  imageshow: number;

  @Input() popupData :any;

  constructor(private stepper: StepperComponent,
    private superAgentApiService:SuperAgentApiService) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.setPopUp()
  }

  setPopUp(){
    this.selectedHotel = [];
    this.selectedRoomGroups = [];
    this.selectedHotel = this.popupData;
    this.selectedHotel.room_groups.forEach(element => {
      element.rooms.forEach(room => {
        this.selectedRoomGroups.push(room)
      });
    });
    let arr:any[] = [];
    this.selectedRoomGroups.forEach(function (element) {
      arr = [];
      arr.push(element.name);
      element.nameArray = arr;
    });
  this.hotelPics = [];
  this.hotelPics1 = [];
  this.hotelPics2 = [];
  this.moreimages = false;
  this.imageshow = 0;
  for(let i=0;i<this.selectedHotel.meta_data.images.length;++i){
    this.hotelPics.push(this.selectedHotel.meta_data.images[i].image_url)
    if (i<=5) {
      this.hotelPics1.push(this.selectedHotel.meta_data.images[i].image_url)
    } 
    if(i>=6 && i<=11) {
      this.hotelPics2.push(this.selectedHotel.meta_data.images[i].image_url)
      this.moreimages = true;
    }
   }
  }

  saveSelectedHotel(){
      this.stepper.stepContent('hotel','hotelMedinah');
      this.superAgentApiService.updatePackageAPI(this.stepperAdapter.saveHotelRequest(this.selectedHotel,null,null),'SAR','en-US',null).subscribe((res) => {
    });
  }

}