import { HelperService } from "src/app/common/services/helper-service";
import { AppStore } from "src/app/stores/app.store";

export class StepperAdapter {
  constructor(private helperService: HelperService,
    private appStore:AppStore) {}
  

  /**
   * method for creating hotel search request
   */
  hotelSearchRequest(city: any, userDetails: any) {
    var body
    return body;
  }
  
}
