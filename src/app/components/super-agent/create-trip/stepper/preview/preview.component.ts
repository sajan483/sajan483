import { Component, OnInit } from '@angular/core';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { CommonApiService } from 'src/app/Services/common-api-services';
import { AppStore } from 'src/app/stores/app.store';
import { StepperComponent } from '../stepper.component';
import { NotificationService } from 'src/app/common/services/notification.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  superAgentApiService:SuperAgentApiService;
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

  constructor(private _SuperAgentService:SuperAgentApiService,private _commonService:CommonApiService,private _appStore:AppStore, private stepper :StepperComponent) { 
    this.superAgentApiService=this._SuperAgentService;
    this.commonApiService = this._commonService;
    this.appStore = _appStore;
  }

  ngOnInit() {
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
    this.superAgentApiService.getPackageDetails(7052).subscribe((data)=>{
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
    if(this.appStore.packageId){
      var body ={"published" : "true",
      "start_date":this.appStore.departureDate,
      "end_date":this.appStore.arrivalDate}
      console.log("pid",this.appStore.packageId)
      this.superAgentApiService.publishPackage(body,this.appStore.packageId).subscribe(response => {
        this.notification.showSuccess("Successfully Published")
      });
    }
  }

  back(){
    this.stepper.stepContent('otherInfo','')
  }
}
