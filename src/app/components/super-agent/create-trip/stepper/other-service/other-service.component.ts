import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { CommonApiService } from 'src/app/Services/common-api-services';
import { StepperAdapter } from 'src/app/adapters/super-agent/stepper-adapter';

@Component({
  selector: 'app-other-service',
  templateUrl: './other-service.component.html',
  styleUrls: ['./other-service.component.scss']
})
export class OtherServiceComponent implements OnInit {
  myForm: FormGroup;
  arr: FormArray;
  submitted = false;
  SuperAgentApiService:SuperAgentApiService;
  commonApiService : CommonApiService;
  languge = 'en_US';
  currency='SAR';
  packageId:number=7023;
  serviceCategoryList: any;
  countryList: any;
  visaService: any;
  StepperAdapter : StepperAdapter;

  constructor(private _SuperAgentService:SuperAgentApiService,private _commonApiService:CommonApiService) { 
    this.SuperAgentApiService=this._SuperAgentService;
    this.commonApiService = this._commonApiService;
    this.StepperAdapter = new StepperAdapter(null,null);
  }

  ngOnInit() {
    this.apiCalles();
    this.myForm = this.StepperAdapter.otherServiceBookingForm();
  }
  
  removeItem(i){
    this.arr.removeAt(i);
  }

  addItem() {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.StepperAdapter.createItem());
  }

  get f() { return this.myForm.controls; }

  getValidity(i){
    return (<FormArray>this.f.arr).controls[i].invalid;
  }

  getControls() {
    return (this.myForm.get('arr') as FormArray).controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid && this.myForm.get('arr').invalid) {
        return;
    }
    this.addOtherService();
  }

  apiCalles(){
    this.SuperAgentApiService.getPackageCategories(this.languge).subscribe((data)=>{
      this.serviceCategoryList = data.categories.map(x => ( {item_text: x.name, item_id: x.id } ));
    })
    this.commonApiService.getCountries().subscribe((data)=>{
      this.countryList = data.map(x => ( {item_text:x.name}));
    })
    this.SuperAgentApiService.getVisaType().subscribe((data)=>{
      this.visaService = data.results.map(x => ( {item_text:x.title, item_id:x.id}))
    })
  }

  addOtherService(){
    var body = this.StepperAdapter.otherServiceBookingBody(this.f.arr.value,this.myForm.value,this.currency);
    this.SuperAgentApiService.updatePackageAPI(body,this.currency,this.languge,this.packageId).subscribe((data)=>{
      
    })
  }
}

//f.arr.controls[i].controls.price.errors
