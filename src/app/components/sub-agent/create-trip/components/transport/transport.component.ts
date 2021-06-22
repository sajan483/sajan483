import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from "src/app/common/services/helper-service";
import { NotificationService } from "src/app/common/services/notification.service";
import { SubAgentApiService } from "src/app/Services/sub-agent-api-services";
import { AppStore } from "src/app/stores/app.store";

@Component({
  selector: "app-transport",
  templateUrl: "./transport.component.html",
  styleUrls: ["./transport.component.scss"]
})

export class TransportComponent implements OnInit {
  @Input() transportList: any[];
  @Output() notifyGrandparent = new EventEmitter();
  vehicleName: string;
  paxCount: number;
  healperService: HelperService;
  notifyService: NotificationService;
  commonService: SubAgentApiService;
  noOfVehicle: any;
  aditionalService:any[] = [];

  constructor(
    private _healperService: HelperService,
    private _notifyService: NotificationService,
    private _commonService: SubAgentApiService,
    private appStore: AppStore,
    private translate: TranslateService,) {
    this.healperService = _healperService;
    this.notifyService = _notifyService;
    this.commonService = _commonService;
  }

  onNotify() {
    this.notifyGrandparent.emit("notify parent");
  }

  ngOnInit() {
    var obj = JSON.parse(sessionStorage.getItem('userObject'));
    this.paxCount = obj.adults + obj.children;
    this.noOfVehicle = obj.vehicleCounts;
  }

  ngAfterViewChecked() {
    this.translate.use((sessionStorage.getItem('userLanguage') === 'ar-AE') ? "ar-AE" : "en-US");
    if (sessionStorage.getItem('userLanguage') == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
  }

  getCheckboxValues(ev, data:number){
    if(ev.checked){
      this.aditionalService.push(data);
    }else{
      let removeIndex = this.aditionalService.findIndex(itm => itm===data);
      if(removeIndex !== -1){
        this.aditionalService.splice(removeIndex,1);
      }
    }
  }


  /**
   * This method is for booking vehicles
   */
  bookTransport(company_code, vehicle) {
    var userDetails = JSON.parse(sessionStorage.getItem('userObject'))
    let start_date_formatted = this.healperService.dateFormaterMdy(userDetails.makkahCheckinDate)
      ? this.healperService.dateFormaterYMd(userDetails.makkahCheckinDate)
      : this.healperService.dateFormaterYMd(userDetails.transportStartDate);
    let end_date_formatted = (sessionStorage.getItem('stage') === '2')
      ? this.healperService.dateFormaterYMd(userDetails.madeenaCheckoutDate)
      : this.healperService.dateFormaterYMd(userDetails.makkahCheckoutDate);
    let arrayList = [];
    let travellerCount = this.paxCount
    let firstcategory = [];
    let code = vehicle.vehicle_type_code[0];
    let x = [vehicle];
    x.forEach((x, index) => {
      let category = {
        code: x.categories[0].category_code,
        additional_services: this.aditionalService,
        quantity: userDetails.vehicleCounts,
        pax_per_vehicle: Math.ceil(
          travellerCount / Math.ceil(travellerCount / x.categories[0].capacity)
        ),
      };

      firstcategory.push(category);
      this.vehicleName = x.vehicle_type_name[0] 
    });
    const q = {
      code: code,
      categories: firstcategory,
    };
    arrayList.push(q);


    if (sessionStorage.getItem('custom_trip_id')) {
      let x = {
        start_date: start_date_formatted,
        end_date: end_date_formatted
          ? end_date_formatted
          : start_date_formatted,
        trip_transportation: {
          search: sessionStorage.getItem('transportSearchId'),
          lang: "en-US",
          company_code: company_code,
          vehicle_types: arrayList,
        },
      };
      this.commonService.updateCustomTrip(sessionStorage.getItem('custom_trip_id'), x,sessionStorage.getItem('userLanguage')).subscribe(
        (data) => {
          if (sessionStorage.getItem('custome_trip_booking_id')) {
            this.setStepperIndex();
            this.onNotify();
            (<HTMLElement>(
              document.getElementById("changeTransport")
            )).style.display = "none";
          } else {
            this.setStepperIndex();
            this.onNotify();
          }
        },
        (error) => { }
      );
    } else {
      let x = {
        max_passengers: JSON.parse(sessionStorage.getItem('userObject')).vehicleCapacity,
        booked_count: this.paxCount,
        start_date: start_date_formatted,
        end_date: end_date_formatted
          ? end_date_formatted
          : start_date_formatted,
        trip_transportation: {
          search: sessionStorage.getItem('transportSearchId'),
          lang: "en-US",
          company_code: company_code,
          vehicle_types: arrayList,
        },
      };

      this.commonService.bookCustomTrip(x).subscribe(
        (data) => {
          sessionStorage.setItem('custom_trip_id', data.id)
          this.setStepperIndex();
          this.onNotify();
          if (sessionStorage.getItem('custome_trip_booking_id')) {
            this.onNotify();
            (<HTMLElement>(
              document.getElementById("changeTransport")
            )).style.display = "none";
          } else {
            this.setStepperIndex();
            this.onNotify();
          }
        },
        (error) => { }
      );
    }
    sessionStorage.setItem('stage', '3')
  }

  setStepperIndex() {
    if (!this.appStore.isAvailabilityFails) {
      this.appStore.stepperIndex += 1;
    }
  }

}