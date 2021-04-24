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
  private stepperAdapter: StepperAdapter = new StepperAdapter(null);
  showShimmer: boolean;
  selector
  static searchData: any;
  hotelFlag;
  superAgentApiService: SuperAgentApiService;
  helperService: HelperService;
  dataFromSearchPage: any;
  hotelCity

  constructor(
    private _superAgentApiService: SuperAgentApiService,
    private appStore: AppStore,
    private _healperService:HelperService
  ) {
    this.superAgentApiService = _superAgentApiService;
    this.helperService = _healperService;
  }

  ngOnInit() {

    if(sessionStorage.getItem('selector') == null){
      this.selector = 'flight'
      document.getElementById(this.selector).style.backgroundColor = "#f3ac3c";
      this.dataFromSearchPage = StepperComponent.searchData;
    }

    if(sessionStorage.getItem('selector') === 'hotelMakkah'){
      document.getElementById('flight').style.backgroundColor = "#f3ac3c";
      document.getElementById('MAKKA').style.backgroundColor = "#f3ac3c";
      this.selector = 'hotel'
      this.hotelFlag='MAKKA'
    }
    
    if(sessionStorage.getItem('selector') === 'hotelMadeena'){
      document.getElementById('flight').style.backgroundColor = "#f3ac3c";
      document.getElementById('MAKKA').style.backgroundColor = "#f3ac3c";
      document.getElementById('MADEENA').style.backgroundColor = "#f3ac3c";
      console.log('test');
      this.selector = 'hotel'
      this.hotelFlag='MADEENA'
    }
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
  }

}