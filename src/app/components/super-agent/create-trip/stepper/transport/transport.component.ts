import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonApiService } from 'src/app/Services/common-api-services';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { DatePipe } from '@angular/common';

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

  constructor(private formBuilder: FormBuilder,private _commonApiService:CommonApiService,public datepipe: DatePipe,
    private _SuperAgentService:SuperAgentApiService) {
    this.commonApiService = this._commonApiService;
    this.SuperAgentApiService=this._SuperAgentService;
   }

  ngOnInit() {
    this.validation();
    this.callListApi();
  }
  validation(){
    this.transportSelection = this.formBuilder.group({
      depdate: ['', Validators.required],
      cabservice: ['', Validators.required],
      cabtype: ['', Validators.required],
      route: ['', Validators.required],
      numberofDays: ['', Validators.required],
      personpervehicle: ['', Validators.required],
      amoundperperson: ['', Validators.required],
    })
  }

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

  saveTransport(){
    let data ={
      "trip_transportation": {
        "trip_vehicles": [
        {
          "currency": this.currency,
          "vehicle_type": this.transportSelection.value.cabtype,
          "category_code": this.transportSelection.value.cabservice,
          "pax_per_vehicle": this.transportSelection.value.personpervehicle,
          "price_per_pax": this.transportSelection.value.amoundperperson,
        }
        ],
        "route":this.transportSelection.value.route,
        "travel_date":this.datepipe.transform(this.transportSelection.value.depdate, "yyyy-MM-dd"),
        "company_code": this.transportSelection.value.cabservice,
        "num_of_days": this.transportSelection.value.numberofDays,
        },
    }
    this.SuperAgentApiService.updatePackageAPI(data,this.currency,this.languge,this.packageId).subscribe((data)=>{
      
    })
  }
}
