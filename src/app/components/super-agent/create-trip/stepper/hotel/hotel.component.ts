import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material';
import { StepperAdapter } from 'src/app/adapters/super-agent/stepper-adapter';
import { NotificationService } from 'src/app/common/services/notification.service';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})

export class HotelComponent implements OnInit {
  showHtlModifyBtn:boolean = true;
  hotelSearchForm:FormGroup;
  @Input() hotelsList : any;
  formBuilder:FormBuilder;
  superAgentApiService : SuperAgentApiService;
  showHotelDetails:boolean = false;
  

  @ViewChild('pickerEnd' , {read: undefined, static: false}) pickerEnd: MatDatepicker<Date>;
  private stepperAdapter: StepperAdapter = new StepperAdapter(null,null);
  selectedHotel: any;
  selectedRoomGroups: any[];
  makkaInDate: any;
  makkaHName: any;
  hotelPics: any[];
  hotelPics1: any[];
  hotelPics2: any[];
  moreimages: boolean;
  imageshow: number;
  popupData: any;

  constructor(private fb:FormBuilder,private _superAgentApiService:SuperAgentApiService,
    private notifyService:NotificationService) {
    this.formBuilder = fb;
    this.superAgentApiService = _superAgentApiService;
   }

  ngOnInit() {
    this.setHotelSearchForm();
  }

  setHotelSearchForm(){
    this.hotelSearchForm = this.formBuilder.group({
      hotelCheckInDate :["",Validators.required],
      hotelCheckOutDate : ["",Validators.required]
    });
  }

  get form() { return this.hotelSearchForm.controls; }

  get modifyHotelSearchActive():boolean { return this.hotelSearchForm.invalid ? false : true;}

  modifyHotelSearch(city){
    if(!this.hotelSearchForm.invalid){
      this.showHtlModifyBtn = !this.showHtlModifyBtn;
      this.searchHotels(city)
    }
  }

  searchHotels(city){
    this.superAgentApiService.agencyHotelSearch(this.stepperAdapter.hotelSearchRequest(city,null,this.hotelSearchForm),'en-US')
    .subscribe(response =>{
      if(response){
        this.hotelsList.response = response;
        this.hotelsList.city = city;
      }
    });
  }

  setHotelCheckOutDateRange(){
    this.pickerEnd.open();
  }

  showHotelDetailsPopUp(item,city){
    this.showHotelDetails = true;
    this.fetchSelectedHotelInfo(item,city)
  }

  fetchSelectedHotelInfo(item,city) {
    var currency :any = "";
    var body = {
      checkin_date : '03/26/2021',
      checkout_date :'03/30/2021' ,
      location : city,
      providers:item.providers,
      hotel_name: item.name,
      umrah_hotel_code:item.umrah_hotel_code,
    }
    this.superAgentApiService
      .getPackageHotelInfo(body,'SAR','en-US')
      .subscribe((data) => {
        this.popupData = data;
        this.popupData.city = city
      },(error)=>{
      this.notifyService.showWarning("No details availabe");
      });
    }
    
  dateFormater(makkahCheckInDate: any) {
    throw new Error('Method not implemented.');
  }
  makkahCheckInDate(makkahCheckInDate: any) {
    throw new Error('Method not implemented.');
  }
  makkahCheckOutDate(makkahCheckOutDate: any) {
    throw new Error('Method not implemented.');
  }

}