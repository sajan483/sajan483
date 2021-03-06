import { Component, OnInit } from '@angular/core';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { CommonApiService } from 'src/app/Services/common-api-services';
import { AppStore } from 'src/app/stores/app.store';
import { StepperComponent } from '../stepper.component';
import { NotificationService } from 'src/app/common/services/notification.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})

export class PreviewComponent implements OnInit {
  commonApiService:CommonApiService;
  onwardFlight: any;
  returnFlight: any;
  visa: any;
  transport: any;
  otherService: any;
  response: any;
  itinerary: any[];
  companyList: any[];
  routeList: any;
  campanyCode: number;
  routeCode: number;
  companyName: any;
  routeName: any;
  makkahHotel: any;
  madeenaHotel: any;
  readonly = true;
  appStore:AppStore;
  notification:NotificationService;
  shimmer:boolean = true;
  bttnactive:boolean = false;

  constructor(private SuperAgentService:SuperAgentApiService,private _commonService:CommonApiService,private _appStore:AppStore, private stepper :StepperComponent
    ,private router: Router) {
    this.commonApiService = this._commonService;
    this.appStore = _appStore;
  }

  ngOnInit() {
    window.scroll(0,0);
    this.packageDetails();
  }

  callApis(){
    this.commonApiService.getCompanies(this.appStore.langCode).subscribe((data) => {
      this.companyList = data.companies.map(x => ( {item_text: x.name, item_id: x.code } ));
      this.companyList.forEach(element => {
        if(element.item_id == this.campanyCode){
          this.companyName = element.item_text;
        }
      });
    });
    this.commonApiService.getRoutes(this.appStore.langCode).subscribe((data)=>{
      this.routeList = data.routes.map(x => ( {item_text: x.name, item_id: x.code } ));
      this.routeList.forEach(element =>{
        if(element.item_id == this.routeCode){
          this.routeName = element.item_text;
        }
      })
    });
  }

  packageDetails(){
    this.SuperAgentService.getPackageDetails(sessionStorage.getItem('packageId')).subscribe((data)=>{
      this.shimmer = false;
      this.response = data;
      this.onwardFlight = this.response.trip_flights[0].onward_flight;
      this.returnFlight = this.response.trip_flights[0].return_flight;
      this.makkahHotel = this.response.makkah_trip_hotel;
      this.visa = this.response.trip_visa;
      this.transport = this.response.trip_transportation;
      this.otherService = this.response.other_services;
      this.itinerary = this.response.itinerary_set;
      this.campanyCode = this.transport.company_code;
      this.routeCode = this.transport.route;
      this.madeenaHotel = this.response.medinah_trip_hotel;
      this.callApis();
    })
  }

  expandItenary(event){
    var panel = event.target.previousElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  publishTrip(){
    this.bttnactive =true;
    if(sessionStorage.getItem('packageId') != null){
      var body ={
      "status":"ACTIVE",
      "start_date":this.appStore.departureDate,
      "end_date":this.appStore.arrivalDate}
      this.SuperAgentService.publishPackage(body,parseInt(sessionStorage.getItem('packageId'))).subscribe(response => {
        this.bttnactive =false;
        Swal.fire({
          icon: 'success',
          text: 'Package created successfully',
          confirmButtonText: 'Create New'
        }).then((result) => {
          this.router.navigate(['superagent/createTrip']);
          sessionStorage.removeItem('selector')
        })
      });
    }
  }

  back(){
    this.stepper.stepContent('otherInfo','')
    sessionStorage.setItem('selector','otherInfo')
  }

  toggleDetails(event,type){
    var panel = event.target;
    if (panel.style.transform) {
      panel.style.transform = null;
      (document.getElementById('toggleDiv'+type)).style.maxHeight = null;
    } else {
      panel.style.transform = 'rotate(-90deg)';
      (document.getElementById('toggleDiv'+type)).style.maxHeight = '0px'
    }
  }
}
