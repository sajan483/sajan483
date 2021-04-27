import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material';
import { StepperAdapter } from 'src/app/adapters/super-agent/stepper-adapter';
import { NotificationService } from 'src/app/common/services/notification.service';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { AppStore } from 'src/app/stores/app.store';
import { StepperComponent } from '../stepper.component';
import { HotelsList } from "src/app/models/custome_trip";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})

export class HotelComponent implements OnInit {
  showHtlModifyBtn:boolean = true;
  hotelSearchForm:FormGroup;
  @Input() hotelCity : any;
  hotelsList: HotelsList = {response:[],city:undefined} ;
  formBuilder:FormBuilder;
  superAgentApiService : SuperAgentApiService;
  showHotelDetails;
  loader:boolean=true;
  detailsLoader:boolean=false;
  

  @ViewChild('pickerEnd' , {read: undefined, static: false}) pickerEnd: MatDatepicker<Date>;
  private stepperAdapter: StepperAdapter = new StepperAdapter(null);
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
    private notifyService:NotificationService,private appStore:AppStore, private stepper:StepperComponent,private router: Router) {
    this.formBuilder = fb;
    this.superAgentApiService = _superAgentApiService; 
   }

  ngOnInit() {
    if(sessionStorage.getItem('hotelDetails')=='open'){
      this.loader=false
      this.showHotelDetails = 'true'
      this.hotelSearch()
      this.setHotelSearchForm();
    } else {
      this.showHotelDetails = 'false'
      this.setHotelSearchForm();
      this.hotelSearch()
    }
  }

  hotelSearch() {
    var data = JSON.parse(sessionStorage.getItem('searchData'))
    this.superAgentApiService
    .agencyHotelSearch(this.stepperAdapter.hotelSearchRequest(this.hotelCity, data, null),'en-US')
    .subscribe((data) => {
      this.hotelsList.response = data;
      this.hotelsList.city = this.hotelCity;
      this.loader=false
    }, error => {
      Swal.fire({
        icon: 'error',
        text: 'Something Went Wrong',
        confirmButtonText: 'Search Again'
      }).then((result) => {
        this.router.navigate(['superagent/createTrip']);
        sessionStorage.removeItem('selector')
      })
    });
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
    this.superAgentApiService.agencyHotelSearch(this.stepperAdapter.hotelSearchRequest(city,null,this.hotelSearchForm),this.appStore.langCode)
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
    this.detailsLoader = true
    this.fetchSelectedHotelInfo(item,city)
  }

  fetchSelectedHotelInfo(item,city) {
    this.superAgentApiService.getPackageHotelInfo(this.stepperAdapter.selectedHotelRequest(item,city),'SAR','en-US').subscribe((data) => {
        this.popupData = data;
        this.popupData.city = city
        sessionStorage.setItem('hotelDetailsData',JSON.stringify(this.popupData))
        sessionStorage.setItem('hotelDetails','open')
        this.detailsLoader = false
        this.showHotelDetails = 'true';
      },(error)=>{
        this.showHotelDetails = 'false';
      }
    );
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

  getPopupFlag(event){
    this.showHotelDetails = event
  }

  back(){
    if(this.hotelsList.city == 'MAKKA'){
    console.log(this.hotelsList.city);
    this.stepper.stepContent('flight','')
    sessionStorage.setItem('selector','flight')
    }
    else{
      this.stepper.stepContent('hotel','MAKKA')
      sessionStorage.setItem('selector','hotelMakkah')   
    }
  }

  readMore( event,i ){
    (<HTMLElement>document.getElementById("readLessBttn"+i)).style.display = "inline-block";
    (<HTMLElement>document.getElementById("readMoreBttn"+i)).style.display = "none";
    event.target.previousElementSibling.style.maxHeight = event.target.previousElementSibling.scrollHeight + "px";
  }

  readLess(event,i){
    (<HTMLElement>document.getElementById("readLessBttn"+i)).style.display = "none";
    (<HTMLElement>document.getElementById("readMoreBttn"+i)).style.display = "inline-block";
    event.target.previousElementSibling.previousElementSibling.style.maxHeight = null;
  }

}