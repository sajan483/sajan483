import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { StepperAdapter } from 'src/app/adapters/super-agent/stepper-adapter';
import { HelperService } from 'src/app/common/services/helper-service';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { AppStore } from 'src/app/stores/app.store';
import { StepperComponent } from '../../stepper.component';

@Component({
  selector: 'app-hotel-details-popup',
  templateUrl: './hotel-details-popup.component.html',
  styleUrls: ['./hotel-details-popup.component.scss']
})

export class HotelDetailsPopupComponent implements OnInit,OnChanges {
  viewImagePopup:boolean=false;
  loader:boolean=true;
  private stepperAdapter: StepperAdapter = new StepperAdapter(null,null);
  showHotelDetails:string = 'true';
  @Output() showHotelDetailsEmitter = new EventEmitter();
  selectedHotel: any;
  selectedRoomGroups: any[];
  hotelPics: any[];
  hotelPics1: any[];
  hotelPics2: any[];
  moreimages: boolean;
  imageshow: number;

  @Input() popupData :any;
  selectedRoomInfo: any;
  selectedRoomDetails: boolean = false;
  roomVariation: any[] = [];
  medinahRoomVariation: any;
  hotelRoomCount: number = 0;
  totalTravellers:number;
  selectedRoomCount:number = 1;
  noOfDays : number;
  noOfImages:number = 1;

  constructor(private stepper: StepperComponent,
    private superAgentApiService:SuperAgentApiService, private appStore : AppStore,
    private helperService : HelperService) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.setPopUp();
  }

  setPopUp(){
    if(typeof(this.popupData) != 'undefined'){
    this.selectedHotel = [];
    this.selectedRoomGroups = [];
    this.selectedHotel = this.popupData;
    this.totalTravellers = this.appStore.totalTravellers;
    this.noOfDays = this.helperService.noOfDaysBetweenTwoDates(this.selectedHotel.check_in_time,this.selectedHotel.check_out_time)
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

    this.selectedRoomGroups.forEach((element,i)=>{
      if(element.pax_info[i] && element.pax_info[i].type && element.pax_info[i].type == 'ADT'){
          element.adult_number = element.pax_info[i].quantity
      }
      if( element.pax_info[i] && element.pax_info[i].type && element.pax_info[i].type == 'CHD'){
          element.child_number = element.pax_info[i].quantity
    }
})
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
   this.loader=false
  }
  else{
    this.loader=false
  }
  }

  saveSelectedHotel(city){
    if(city == 'MAKKA'){
      this.stepper.stepContent('hotel','hotelMedinah');
      this.superAgentApiService.updatePackageAPI(this.stepperAdapter.saveHotelRequest(this.selectedHotel,this.roomVariation,city),'SAR','en-US',this.appStore.packageId).subscribe((res) => {
    });
    }
    if(city == 'MADEENA'){
      this.stepper.stepContent('transport',null);
      this.superAgentApiService.updatePackageAPI(this.stepperAdapter.saveHotelRequest(this.selectedHotel,this.roomVariation,city),'SAR','en-US',this.appStore.packageId).subscribe((res) => {
    });
    }
  }

  showRoomDetailsPopUp(room){
    this.selectedRoomInfo = room;
    this.selectedRoomDetails = !this.selectedRoomDetails;
  }

  selectHotelRoom(e, room, i){
    let q =  {
      "currency": "INR",
      "available_rooms": room.available_count,
      "total_rooms": room.max_rooms,
      "title": room.name,
      "adult_price": (<HTMLInputElement>document.getElementById("adultPrice"+ room.room_id+""+ i)).value,
      "child_price": (<HTMLInputElement>document.getElementById("childPrice"+ room.room_id+""+ i)).value,
      "per_room_price": room.amount,
      "custom_pax_info": room.pax_info_str,
      "description": room.description,
      "room_id": room.room_id,
      "room_group_obj": room.room_group_obj
    }
    if(e.target.checked){
      this.roomVariation.push(q)
      this.hotelRoomCount ++;
    }else{
       this.hotelRoomCount --;
      var removeIndex = this.roomVariation.map(function(item) { return item.room_id; }).indexOf(room.room_id);
      this.roomVariation.splice(removeIndex, 1);
    }
  }

  hideHotelDetailsPopup(){
    this.showHotelDetails = 'false';
    this.showHotelDetailsEmitter.emit(this.showHotelDetails);
  }

  disableHotelSaveBtn(){
    var p:any[] = [] ;
    if(this.roomVariation.length > 0){
      for(let i = 0;i < this.roomVariation.length;i++){
        if(this.roomVariation[i].adult_price == ""
          && this.roomVariation[i].child_price == ""){
            p.push("0")
          }
        }
      }
    //if(this.hotelRoomCount > 0 && p.length < 1){return true;}
    if(this.hotelRoomCount > 0 ){return true;}
    return false;
    }

    openImgPopup(){
      this.viewImagePopup=true
    }

    getImgPopupFlag(event){
      if(event == 'hide')
      this.viewImagePopup=false
    }
  }