import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonApiService } from 'src/app/Services/common-api-services';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { StepperAdapter } from 'src/app/adapters/super-agent/stepper-adapter';
import { HelperService } from "src/app/common/services/helper-service";
import { AppStore } from 'src/app/stores/app.store';
import { StepperComponent } from '../stepper.component';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
  transportSelection : FormGroup;
  submitted = false;
  commonApiService : CommonApiService;
  SuperAgentApiService:SuperAgentApiService;
  companyList:any;
  vehicleTypeList:any;
  routeList:any;
  StepperAdapter : StepperAdapter;

  constructor(private formBuilder: FormBuilder,private _commonApiService:CommonApiService,private stepper:StepperComponent,
    private _SuperAgentService:SuperAgentApiService,private helperService:HelperService,private appStore:AppStore) {
    this.commonApiService = this._commonApiService;
    this.SuperAgentApiService=this._SuperAgentService;
    this.StepperAdapter = new StepperAdapter(this.helperService,null);
   }

  ngOnInit() {
    this.callListApi();
    this.transportSelection = this.StepperAdapter.transportBookingForm();
  }

  /**
   * calling company api,vehicle types api and route api
   */
  callListApi(){
    this.commonApiService.getCompanies(this.appStore.langCode).subscribe((data) => {
      this.companyList = data.companies.map(x => ( {item_text: x.name, item_id: x.code } ));
    });
    this.commonApiService.getVehicles(this.appStore.langCode).subscribe((data)=>{
      this.vehicleTypeList = data.vehicle_types.map(x => ( {item_text: x.name, item_id: x.code} ));
    })
    this.commonApiService.getRoutes(this.appStore.langCode).subscribe((data)=>{
      this.routeList = data.routes.map(x => ( {item_text: x.name, item_id: x.code } ));
    })
  }

  get f(){return this.transportSelection.controls}

  /**
   * this method for submit transportSelection form group
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.transportSelection.invalid) {
        return;
    }
    this.saveTransport();
  }

  /**
   * this method for update transport to create trip
   */
  saveTransport(){
    this.stepper.stepContent('otherServices','')
    let body = this.StepperAdapter.transportBookingBody(this.transportSelection.value,this.appStore.langCode);
    this.SuperAgentApiService.updatePackageAPI(body,this.appStore.currencyCode,this.appStore.langCode,this.appStore.packageId).subscribe((data)=>{
    })
  }

  back(){
    this.stepper.stepContent('hotel','hotelMedinah')
  }

}
