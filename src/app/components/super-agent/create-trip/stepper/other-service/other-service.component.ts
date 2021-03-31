import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { CommonApiService } from 'src/app/Services/common-api-services';
import { StepperAdapter } from 'src/app/adapters/super-agent/stepper-adapter';
import { AppStore } from 'src/app/stores/app.store';
import { StepperComponent } from '../stepper.component';

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
  serviceCategoryList: any;
  countryList: any;
  visaService: any;
  StepperAdapter : StepperAdapter;

  constructor(private _SuperAgentService:SuperAgentApiService,private _commonApiService:CommonApiService,
    private appStore:AppStore,private stepper:StepperComponent) { 
    this.SuperAgentApiService=this._SuperAgentService;
    this.commonApiService = this._commonApiService;
    this.StepperAdapter = new StepperAdapter(null,null);
  }

  ngOnInit() {
    this.apiCalles();
    this.myForm = this.StepperAdapter.otherServiceBookingForm();
  }
  
  /**
   * service array remove
   */
  removeItem(i){
    this.arr.removeAt(i);
  }

  /**
   * add new service array
   */
  addItem() {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.StepperAdapter.createItem());
  }

  get f() { return this.myForm.controls; }

  /**
   * check field is empty
   */
  getValidity(i){
    return (<FormArray>this.f.arr).controls[i].invalid;
  }

  /**
   * get form array Controls
   */
  getControls() {
    return (this.myForm.get('arr') as FormArray).controls;
  }

  /**
   * submit myform group
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid && this.myForm.get('arr').invalid) {
        return;
    }
    this.addOtherService();
  }

  /**
   * api calls for categories list,country list & visa type list
   */
  apiCalles(){
    this.SuperAgentApiService.getPackageCategories(this.appStore.langCode).subscribe((data)=>{
      this.serviceCategoryList = data.categories.map(x => ( {item_text: x.name, item_id: x.id } ));
    })
    this.commonApiService.getCountries().subscribe((data)=>{
      this.countryList = data.map(x => ( {item_text:x.name}));
    })
    this.SuperAgentApiService.getVisaType().subscribe((data)=>{
      this.visaService = data.results.map(x => ( {item_text:x.title, item_id:x.id}))
    })
  }

  /**
   * update other service in package api
   */
  addOtherService(){
    this.stepper.stepContent('payment','');
    var body = this.StepperAdapter.otherServiceBookingBody(this.f.arr.value,this.myForm.value,this.appStore.currencyCode);
    this.SuperAgentApiService.updatePackageAPI(body,this.appStore.currencyCode,this.appStore.langCode,this.appStore.packageId).subscribe((data)=>{
      
    })
  }
}

//f.arr.controls[i].controls.price.errors
