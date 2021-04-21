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

export class HotelDetailsPopupComponent implements OnInit, OnChanges {
  viewImagePopup:boolean=false;
  loader:boolean=true;
  private stepperAdapter: StepperAdapter = new StepperAdapter(null);
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
  adultPrice: string;
  childPrice: string;

  constructor(private stepper: StepperComponent,
    private superAgentApiService:SuperAgentApiService, private appStore : AppStore,
    private helperService : HelperService) { }

  ngOnChanges() {
    this.setPopUp()
  }

  ngOnInit() {
    this.hideLoader()
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
        element.isChecked = false;
        if(element.pax_info[i] && element.pax_info[i].type && element.pax_info[i].type == 'ADT'){
          element.adult_number = element.pax_info[i].quantity
        }
        if(element.pax_info[i] && element.pax_info[i].type && element.pax_info[i].type == 'CHD'){
          element.child_number = element.pax_info[i].quantity
        }
      })

      this.hotelPics = [];
      this.hotelPics1 = [];
      this.loader=false
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
  }

  hideLoader(){
    setTimeout(function(){
      this.loader=false
      console.log(this.loader);
    }, 2000);
  }

  saveSelectedHotel(city){
    if(city == 'MAKKA'){
      this.stepper.stepContent('hotel','MADEENA');
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
    this.adultPrice = (<HTMLInputElement>document.getElementById("adultPrice"+i)).value,
    this.childPrice = (<HTMLInputElement>document.getElementById("childPrice"+i)).value
    this.selectedRoomGroups.forEach((el,j)=>{(j == i)?el.isChecked = true:el.isChecked = false})
    this.setRoomVariation(room,i)
      this.hotelRoomCount ++;
  }

  setRoomVariation(room,i){
    this.roomVariation = [];
    let q =  {
      "currency": "INR",
      "available_rooms": room.available_count,
      "total_rooms": room.max_rooms,
      "title": room.name,
      "adult_price": this.adultPrice,
      "child_price": this.childPrice,
      "per_room_price": room.amount,
      "custom_pax_info": room.pax_info_str,
      "description": room.description,
      "room_id": room.room_id,
      "room_group_obj": room.room_group_obj
    }
      this.roomVariation.push(q)
    }

  addAdultPrice(room,i){
    this.adultPrice = (<HTMLInputElement>document.getElementById("adultPrice"+i)).value;
    this.setRoomVariation(room,i)
  }

  addChildPrice(room,i){
    this.childPrice = (<HTMLInputElement>document.getElementById("childPrice"+i)).value;
    this.setRoomVariation(room,i)
  }

  hideHotelDetailsPopup(){
    this.showHotelDetails = 'false';
    this.showHotelDetailsEmitter.emit(this.showHotelDetails);
  }

  disableHotelSaveBtn(){
    if(this.hotelRoomCount > 0 && this.addAdultPrice.length > 0 && this.childPrice.length > 0){return true;}
    return false;
    }

    openImgPopup(){
      this.viewImagePopup=true
    }

    getImgPopupFlag(event){
      if(event == 'hide')
      this.viewImagePopup=false
    }

    getDetailsPopupFlag(event){
      if(event == 'hide')
      this.selectedRoomDetails=false
    }

  }