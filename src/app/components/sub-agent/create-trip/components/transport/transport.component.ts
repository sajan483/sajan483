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
    this.paxCount = JSON.parse(sessionStorage.getItem('userObject')).adults
  }

  ngAfterViewChecked() {
    this.translate.use((sessionStorage.getItem('userLanguage') === 'ar-AE') ? "ar-AE" : "en-US");
    if (sessionStorage.getItem('userLanguage') == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
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
    let secondcategory = [];
    let thirdcategory = [];
    let code = vehicle.vehicle_type_code[0];
    if (code == "1") {
      let x = [vehicle];
      x.forEach((x, index) => {
        let category = {
          code: x.categories[0].category_code,
          additional_services: x.categories[0].additional_services
            .filter((a) => a.selected == true)
            .map((a) => a.additional_service_code),
          quantity: Math.ceil(travellerCount / x.categories[0].capacity),
          pax_per_vehicle: Math.ceil(
            travellerCount /
            Math.ceil(travellerCount / x.categories[0].capacity)
          ),
        };

        firstcategory.push(category);
        this.vehicleName =
          "Sedan Car - (" +
          Math.ceil(travellerCount / x.categories[0].capacity) +
          ")";
      });
      const q = {
        code: "1",
        categories: firstcategory,
      };
      arrayList.push(q);
      this.vehicleName = "Sedan Car - (" + Math.ceil((this.appStore.adultCount + this.appStore.childCount) / this.appStore.vehicleMax) + ")";
    }
    if (code == "2") {
      let x = [vehicle];
      x.forEach((x, index) => {
        let category = {
          code: x.categories[0].category_code,
          additional_services: x.categories[0].additional_services
            .filter((a) => a.selected == true)
            .map((a) => a.additional_service_code),
          quantity: Math.ceil(travellerCount / x.categories[0].capacity),
          pax_per_vehicle: Math.ceil(
            travellerCount /
            Math.ceil(travellerCount / x.categories[0].capacity)
          ),
        };
        secondcategory.push(category);
        this.vehicleName = "SUV Car - (" + Math.ceil((this.appStore.adultCount + this.appStore.childCount) / x.categories[0].capacity) + ")";
      });
      const q = {
        code: "2",
        categories: secondcategory,
      };
      arrayList.push(q);
    }
    if (code == "3") {
      let x = [vehicle];
      x.forEach((x, index) => {
        let category = {
          code: x.categories[0].category_code,
          additional_services: x.categories[0].additional_services
            .filter((a) => a.selected == true)
            .map((a) => a.additional_service_code),
          quantity: Math.ceil(travellerCount / x.categories[0].capacity),
          pax_per_vehicle: Math.ceil(
            travellerCount /
            Math.ceil(travellerCount / x.categories[0].capacity)
          ),
        };

        thirdcategory.push(category);
        this.vehicleName =
          "Bus - (" +
          Math.ceil(
            (this.appStore.adultCount + this.appStore.childCount) / x.categories[0].capacity
          ) +
          ")";
      });
      const q = {
        code: "3",
        categories: thirdcategory,
      };
      arrayList.push(q);
    }
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
      this.commonService.updateCustomTrip(sessionStorage.getItem('custom_trip_id'), x).subscribe(
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