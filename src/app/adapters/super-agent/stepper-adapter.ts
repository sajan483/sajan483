import { CompileStylesheetMetadata } from "@angular/compiler";
import { FormGroup } from "@angular/forms";
import { HelperService } from "src/app/common/services/helper-service";
import { AppStore } from "src/app/stores/app.store";

export class StepperAdapter {
  constructor(
    private helperService: HelperService,
    private appStore: AppStore
  ) {}

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
}