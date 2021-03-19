import { Component, OnInit } from "@angular/core";
import { StepperAdapter } from "src/app/adapters/super-agent/stepper-adapter";
import { HelperService } from "src/app/common/services/helper-service";
import { SuperAgentApiService } from "src/app/Services/super-agent-api-services";
import { AppStore } from "src/app/stores/app.store";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
  providers: [],
})
export class StepperComponent implements OnInit {
  //private stepperAdapter: StepperAdapter = new StepperAdapter(null,this.appStore);
  showShimmer: boolean;
  selector: string = "flight";
  static searchData: any;
  hotelFlag;
  superAgentApiService: SuperAgentApiService;
  hotelsList: any;
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
    this.hotelSearch("MAKKAH");
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

  /*
   * this method for fetching hotel list
   */
  hotelSearch(city: string) {
    var body = {
      // check_in_date: this.helperService.dateFormaterMdy(
      //   this.dataFromSearchPage.mekkahData.checkIn
      // ),
      // check_out_date: this.helperService.dateFormaterMdy(
      //   this.dataFromSearchPage.mekkahData.checkOut
      // ),
      check_in_date:"03/23/2021",
      check_out_date:"03/25/2021",
      location: "MAKKA",
    };
    this.superAgentApiService
      .agencyHotelSearch(body, this.appStore.langCode)
      .subscribe((data) => {
        if (data) {
          this.hotelsList = data;
          console.log("gfgfgf",this.hotelsList)
        }
      });
  }
}