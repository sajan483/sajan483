import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
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
  serviceCategoryList: any;
  countryList: any;
  visaService: any;
  StepperAdapter : StepperAdapter;
  addButton: boolean = true;
  serviceBox: boolean = false;
  serviceShimmer : boolean = true;
  visaShimmer: boolean = true;
  bttnactive :boolean = false;

  constructor(private SuperAgentService:SuperAgentApiService,private appStore:AppStore,private stepper:StepperComponent,private _formBuilder:FormBuilder) { 
    this.StepperAdapter = new StepperAdapter(null);
  }

  ngOnInit() {
    this.apiCalles();
    this.myForm = this.StepperAdapter.otherServiceBookingForm();
    this.packageDetails()
  }
  
  packageDetails(){
    this.SuperAgentService.getPackageDetails(sessionStorage.getItem('packageId')).subscribe((data)=>{
      (data);
      var visaDetails = data.trip_visa
      var otherServices = data.other_services
      if(visaDetails != null) {
        this.myForm.controls.visaservice.setValue(visaDetails.visa_type)
        this.myForm.controls.adultpricevisa.setValue(visaDetails.price)
        this.myForm.controls.childpricevisa.setValue(visaDetails.infant_price)
      }
       if(otherServices != null && otherServices.length > 0){
         const formArray = new FormArray([]);
         for (let i=0 ;i< otherServices.length;i++) {
          this.serviceBox = true;this.addButton = false
          formArray.push(this._formBuilder.group({
            description:otherServices[i].additional_service.description,
            price:otherServices[i].price,
            category:otherServices[i].additional_service.category.id,
            name:otherServices[i].additional_service.name
          }));
        }
        this.myForm.setControl('arr',formArray)
       }
    })
  }
 
  /**
   * service array remove
   */
  removeItem(i){
    if(i==0){
      this.addButton = true;
      this.serviceBox = false;
    }else{
      this.arr.removeAt(i);
    }
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
    if (this.myForm.invalid) {
        return;
    }
    this.bttnactive = true;
    
    this.addOtherService();
    (this.myForm.controls);
    
  }

  /**
   * api calls for categories list,country list & visa type list
   */
  apiCalles(){
    this.SuperAgentService.getPackageCategories(this.appStore.langCode).subscribe((data)=>{
      this.serviceCategoryList = data.categories.map(x => ( {item_text: x.name, item_id: x.id } ));
      this.serviceShimmer = false;
    })
    this.SuperAgentService.getVisaType().subscribe((data)=>{
      this.visaService = data.results.map(x => ( {item_text:x.title, item_id:x.id}))
      this.visaShimmer = false;
    })
  }

  /**
   * update other service in package api
   */
  addOtherService(){
    var body1 = this.StepperAdapter.visaServiceBody(this.myForm.value,this.appStore.currencyCode);
    this.SuperAgentService.updatePackageAPI(body1,this.appStore.currencyCode,this.appStore.langCode,sessionStorage.getItem('packageId')).subscribe((data)=>{
      sessionStorage.setItem('selector','payment')
      this.stepper.stepContent('payment','');
      this.bttnactive = false;
    })

    if(this.serviceBox){
      var body = this.StepperAdapter.otherServiceBookingBody(this.f.arr.value,this.myForm.value,this.appStore.currencyCode);
      this.SuperAgentService.updatePackageAPI(body,this.appStore.currencyCode,this.appStore.langCode,sessionStorage.getItem('packageId')).subscribe((data)=>{
      })
    }
  }

  back(){
    this.stepper.stepContent('transport','')
    sessionStorage.setItem('selector','transport')   
  }

  addService(){
    this.addButton = false;
    this.serviceBox = true;
  }
}