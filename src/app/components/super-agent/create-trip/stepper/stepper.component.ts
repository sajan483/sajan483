import { Component, OnInit } from "@angular/core";
import { StepperAdapter } from "src/app/adapters/super-agent/stepper-adapter";
import { HelperService } from "src/app/common/services/helper-service";
import { HotelsList } from "src/app/models/custome_trip";
import { SuperAgentApiService } from "src/app/Services/super-agent-api-services";
import { AppStore } from "src/app/stores/app.store";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
  providers: [],
})
export class StepperComponent implements OnInit {
  private stepperAdapter: StepperAdapter = new StepperAdapter(null,this.appStore);
  showShimmer: boolean;
  selector: string = "flight";
  static searchData: any;
  hotelFlag;
  superAgentApiService: SuperAgentApiService;
  hotelsList: HotelsList = {response:[],city:undefined} ;
  //hotelsList:any[]=[];
  helperService: HelperService;
  dataFromSearchPage: any;

  constructor(
    private _superAgentApiService: SuperAgentApiService,
    private appStore: AppStore,
    private _healperService:HelperService
  ) {
    this.superAgentApiService = _superAgentApiService;
    this.helperService = _healperService;
  }

  ngOnInit() {
    document.getElementById(this.selector).style.backgroundColor = "#f3ac3c";
    this.dataFromSearchPage = StepperComponent.searchData;
    this.hotelSearch("MAKKA",this.dataFromSearchPage);
  }

  stepContent(component, flag) {
    if (component == "hotel") {
      this.selector = component;
      this.hotelFlag = flag;
      document.getElementById(flag).style.backgroundColor = "#f3ac3c";
    } else {
      this.selector = component;
      document.getElementById(component).style.backgroundColor = "#f3ac3c";
    }
    if(component == 'hotel' && flag == 'hotelMedinah'){
      this.hotelSearch("MADEENA",this.dataFromSearchPage);
    }
  }

  /*
   * this method for fetching hotel list
   */
  hotelSearch(city: string,dataFromSearchPage) {
     this.superAgentApiService
       .agencyHotelSearch(this.stepperAdapter.hotelSearchRequest(city,dataFromSearchPage,null),'en-US')
       .subscribe((data) => {
         this.hotelsList.response = data;
         this.hotelsList.city = city;
    });
  }

}