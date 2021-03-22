import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { CommonApiService } from 'src/app/Services/common-api-services';
import { Body } from '@angular/http/src/body';

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

  constructor(private fb: FormBuilder,private _SuperAgentService:SuperAgentApiService,private _commonApiService:CommonApiService) { 
    this.SuperAgentApiService=this._SuperAgentService;
    this.commonApiService = this._commonApiService;
  }

  ngOnInit() {
    this.serviceForm();
    this.apiCalles();
  }
  serviceForm(){
    this.myForm = this.fb.group({
      arr: this.fb.array([this.createItem()]),
      visaservice: ['',Validators.required],
      adultpricevisa: ['',Validators.required],
      childpricevisa: ['',Validators.required],
      country: ['',Validators.required],
    })
  }
  createItem() {
    return this.fb.group({
      category: ['',Validators.required],
      name: ['',Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.required]
    })
  }
  removeItem(i){
    this.arr.removeAt(i);
  }

  addItem() {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid && this.arr.invalid) {
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
      this.visaService = data.results.map(x => ( {item_text:x.title}))
    })
  }

  addOtherService(){
    let Body ={
      "other_services":this.arr.value,
      "trip_visa": {
        'title': this.myForm.value.visaservice, 
        'price': this.myForm.value.adultpricevisa, 
        'country': this.myForm.value.country, 
        'currency': this.currency,
      }
    }
    this.SuperAgentApiService.updatePackageAPI(Body,this.currency,this.languge,this.packageId).subscribe((data)=>{
      
    })
  }
}
