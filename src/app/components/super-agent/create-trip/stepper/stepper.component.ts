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
  }

  /*
   * this method for fetching hotel list
   */
  hotelSearch(city: string,dataFromSearchPage) {
    // this.superAgentApiService
    //   .agencyHotelSearch(this.stepperAdapter.hotelSearchRequest(city,dataFromSearchPage,null),'en-US')
    //   .subscribe((data) => {
    //     this.hotelsList.response = data;
         this.hotelsList.city = city;
    //     console.log(this.hotelsList)
    //   });
      //this.hotelSearch("MADEENA",this.dataFromSearchPage);
      this.hotelsList.response = [
        {
          "name": "amourihot",
          "description": null,
          "address": "مخطط الاميرعبدالله الفيصل",
          "status": "Available",
          "amount": 943,
          "amount_type": "Total",
          "currency_code": "SAR",
          "image_path": "https:None",
          "banner_image_path": "https:None",
          "rating": 1,
          "latitude": 1,
          "longitude": 1,
          "state": "Makkah",
          "country": "Saudi Arabia",
          "zip_code": null,
          "phone": null,
          "email": null,
          "fax": null,
          "city": "Makkah",
          "umrah_hotel_code": "4810883388",
          "providers": [
            {
              "provider": "hudxconnect",
              "vendor": "hudxconnect",
              "hotel_code": "15_en-US",
              "amount": 943,
              "currencyCode": "SAR"
            }
          ],
          "haram_distance": null,
          "has_special_deal": false,
          "promotion_name": null,
          "amenities": []
        },
        {
          "name": "amourihot",
          "description": null,
          "address": "مخطط الاميرعبدالله الفيصل",
          "status": "Available",
          "amount": 943,
          "amount_type": "Total",
          "currency_code": "SAR",
          "image_path": "https:None",
          "banner_image_path": "https:None",
          "rating": 1,
          "latitude": 1,
          "longitude": 1,
          "state": "Makkah",
          "country": "Saudi Arabia",
          "zip_code": null,
          "phone": null,
          "email": null,
          "fax": null,
          "city": "Makkah",
          "umrah_hotel_code": "4810883388",
          "providers": [
            {
              "provider": "hudxconnect",
              "vendor": "hudxconnect",
              "hotel_code": "15_en-US",
              "amount": 943,
              "currencyCode": "SAR"
            }
          ],
          "haram_distance": null,
          "has_special_deal": false,
          "promotion_name": null,
          "amenities": []
        },
        {
          "name": "amourihot",
          "description": null,
          "address": "مخطط الاميرعبدالله الفيصل",
          "status": "Available",
          "amount": 943,
          "amount_type": "Total",
          "currency_code": "SAR",
          "image_path": "https:None",
          "banner_image_path": "https:None",
          "rating": 1,
          "latitude": 1,
          "longitude": 1,
          "state": "Makkah",
          "country": "Saudi Arabia",
          "zip_code": null,
          "phone": null,
          "email": null,
          "fax": null,
          "city": "Makkah",
          "umrah_hotel_code": "4810883388",
          "providers": [
            {
              "provider": "hudxconnect",
              "vendor": "hudxconnect",
              "hotel_code": "15_en-US",
              "amount": 943,
              "currencyCode": "SAR"
            }
          ],
          "haram_distance": null,
          "has_special_deal": false,
          "promotion_name": null,
          "amenities": []
        },
        {
          "name": "amourihot",
          "description": null,
          "address": "مخطط الاميرعبدالله الفيصل",
          "status": "Available",
          "amount": 943,
          "amount_type": "Total",
          "currency_code": "SAR",
          "image_path": "https:None",
          "banner_image_path": "https:None",
          "rating": 1,
          "latitude": 1,
          "longitude": 1,
          "state": "Makkah",
          "country": "Saudi Arabia",
          "zip_code": null,
          "phone": null,
          "email": null,
          "fax": null,
          "city": "Makkah",
          "umrah_hotel_code": "4810883388",
          "providers": [
            {
              "provider": "hudxconnect",
              "vendor": "hudxconnect",
              "hotel_code": "15_en-US",
              "amount": 943,
              "currencyCode": "SAR"
            }
          ],
          "haram_distance": null,
          "has_special_deal": false,
          "promotion_name": null,
          "amenities": []
        }
     ]
  }

}