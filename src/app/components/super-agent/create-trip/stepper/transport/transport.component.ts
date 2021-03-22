import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonApiService } from 'src/app/Services/common-api-services';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { DatePipe } from '@angular/common';
import { StepperAdapter } from 'src/app/adapters/super-agent/stepper-adapter'
import { Body } from '@angular/http/src/body';

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
  packageId:number=7023;
  currency='SAR';
  languge = 'en_US';
  StepperAdapter : StepperAdapter;

  constructor(private formBuilder: FormBuilder,private _commonApiService:CommonApiService,public datepipe: DatePipe,
    private _SuperAgentService:SuperAgentApiService) {
    this.commonApiService = this._commonApiService;
    this.SuperAgentApiService=this._SuperAgentService;
    this.StepperAdapter = new StepperAdapter(null,null);
   }

  ngOnInit() {
    this.transportSelection = this.StepperAdapter.transportBookingForm();
    this.callListApi();
  }

  /**
   * calling company api,vehicle types api and route api
   */
  callListApi(){
    this.commonApiService.getCompanies(this.languge).subscribe((data) => {
      this.companyList = data.companies.map(x => ( {item_text: x.name, item_id: x.code } ));
    });
    this.commonApiService.getVehicles(this.languge).subscribe((data)=>{
      this.vehicleTypeList = data.vehicle_types.map(x => ( {item_text: x.name, item_id: x.code} ));
    })
    this.commonApiService.getRoutes(this.languge).subscribe((data)=>{
      this.routeList = data.routes.map(x => ( {item_text: x.name, item_id: x.code } ));
    })
  }

  get f(){return this.transportSelection.controls}

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
    var ddate = this.datepipe.transform(this.transportSelection.value.depdate, "yyyy-MM-dd");
    let Body = this.StepperAdapter.transportBookingBody(this.transportSelection.value,this.currency,ddate);
    this.SuperAgentApiService.updatePackageAPI(Body,this.currency,this.languge,this.packageId).subscribe((data)=>{
    })
  }
}
