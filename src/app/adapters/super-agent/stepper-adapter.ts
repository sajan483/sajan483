import { CompileStylesheetMetadata } from "@angular/compiler";
import { HelperService } from "src/app/common/services/helper-service";
import { AppStore } from "src/app/stores/app.store";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class StepperAdapter {
  fb : FormBuilder;
  helperService: HelperService;

  constructor(
    private _helperService: HelperService,
    private appStore: AppStore
  ) {
    this.helperService = _helperService;
  }

  /**
   * method for creating hotel search request
   */
  hotelSearchRequest(city: any,dataFromSearchPage: any,hotelSearchForm: FormGroup) {
    //if (dataFromSearchPage) {
      var body = {
      //   check_in_date: this.helperService.dateFormaterMdy(
      //     dataFromSearchPage.mekkahData.checkIn
      //   ),
      //   check_out_date: this.helperService.dateFormaterMdy(
      //     dataFromSearchPage.mekkahData.checkOut
      //   ),
        check_in_date:"03/23/2021",
        check_out_date:"03/25/2021",
        location: city,
      };
      return body;
    //}
    // if(hotelSearchForm) {
    //   var body = {
    //     check_in_date: this.helperService.dateFormaterMdy(
    //       hotelSearchForm.get("hotelCheckInDate").value
    //     ),
    //     check_out_date: this.helperService.dateFormaterMdy(
    //       hotelSearchForm.get("hotelCheckOutDate").value
    //     ),
    //     location: city,
    //   };
    //   return body;
    // }
  }

  /**
   * this method for validating form group
   */
  transportBookingForm() :FormGroup{
    this.fb = new FormBuilder();
    return this.fb.group({
      depdate: ['', Validators.required],
      cabservice: ['', Validators.required],
      cabtype: ['', Validators.required],
      route: ['', Validators.required],
      numberofDays: ['', Validators.required],
      personpervehicle: ['', Validators.required],
      amoundperperson: ['', Validators.required],
    })
  }

  /**
   * this methode for booking transport request
   * @param transportSelection 
   * @param currency 
   * @param ddate travel date
   */
  transportBookingBody(transportSelection,currency,ddate){
    var data ={
      trip_transportation: {
        trip_vehicles: [
        {
          currency: currency,
          vehicle_type: transportSelection.cabtype,
          category_code: transportSelection.cabservice,
          pax_per_vehicle: transportSelection.personpervehicle,
          price_per_pax: transportSelection.amoundperperson,
        }
        ],
        route:transportSelection.route,
        travel_date:ddate,
        company_code: transportSelection.cabservice,
        num_of_days: transportSelection.numberofDays,
        },
    }
    return data;
  }
}