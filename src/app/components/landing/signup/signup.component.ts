import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { Country } from 'src/app/models/airportList';
import { signupAdapter } from 'src/app/adapters/Landing/signupAdapter';
import { environment } from '../../../../environments/environment';
import { LandingApiService } from 'src/app/Services/landing-api-services';
import { CommonApiService } from 'src/app/Services/common-api-services';
import { SubAgentGeneralHelper } from 'src/app/helpers/sub-agent/general-helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  eyes: boolean;
  show: boolean;
  signupForm:FormGroup;
  submitted = false;
  licensefield: boolean = false;
  bttnshow: boolean = false;
  countries : Country[];
  slctcntry : any = environment.selectedCountryCommen;
  countrycode1 : any = environment.countryCodeCommen;
  signupAdapter : signupAdapter;
  commonApiService : CommonApiService;
  ibanValidation: boolean;
  ibanMessge: string;
  private subagentHelper: SubAgentGeneralHelper = new SubAgentGeneralHelper(null);

  constructor(private common: LandingApiService,
    private router: Router,private formBuilder: FormBuilder
    ,private spinner: NgxSpinnerService,
    private _commonApiService:CommonApiService) { 
    this.signupAdapter = new signupAdapter();
    this.signupForm = this.signupAdapter.createSignupGroup();
    this.commonApiService = this._commonApiService
  }

  get f() { return this.signupForm.controls; }

  ngOnInit() {
    this.coutryList();
  }

  /**
   * this method for fetch coutry list
   */
  coutryList(){
    this.commonApiService.getCountries().subscribe(res =>{
      this.countries = res;
    })
  }

  /**
   * this method used for signup
   */
  onSubmit() {
    this.spinner.show();
    this.submitted = true;
    if (this.signupForm.invalid) {
      this.spinner.hide();
      return;
    }
    if(this.licensefield){
      if((<HTMLInputElement>document.getElementById("license")).value == ""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter License Number',
        })
        this.spinner.hide();
        return;
      }
      this.ibanValidation = false;
      var iban = (<HTMLInputElement>document.getElementById("iban")).value;
      var test = this.subagentHelper.ibanTextValidation(iban)
      if(test != 'true'){
        this.ibanValidation = true;
        this.ibanMessge = test;
        this.spinner.hide();
        return;
      }
    }
    if(this.signupForm.value.password != this.signupForm.value.cnfrmpasswrd){
      this.spinner.hide();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password and Confirm Password is not match',
      })
      return;
    }
    else{
      if(this.licensefield){
        const body = {
          "name": this.signupForm.value.cmpnyname, 
          "iban": (<HTMLInputElement>document.getElementById("iban")).value,
          "licence_no": (<HTMLInputElement>document.getElementById("license")).value, 
          "address": this.signupForm.value.cmpnyadress, 
          "city": this.signupForm.value.city, 
          "state": this.signupForm.value.state,
          "country": this.slctcntry,
          "phn_country_code": this.countrycode1,
          "phone_number": this.signupForm.value.phnnumber,
          "email": this.signupForm.value.email,
          "primary_contact": {
            "phn_country_code": this.countrycode1,
            "phone_number": this.signupForm.value.phnnumberp, 
            "name": this.signupForm.value.cname, 
            "password": this.signupForm.value.password, 
            "confirmation_password": this.signupForm.value.cnfrmpasswrd
          }
        }
      this.common.signup(body).subscribe(data => {
        this.spinner.hide();
        Swal.fire({
          icon: 'success',
          title: data.message,
          showConfirmButton: true,
        }).then((result) => {
          if (result.value) {
            this.router.navigate(["/login"]);
          }
        }) 
      },error=>{
        this.spinner.hide();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Contact person phone number already exist or IBAN already exist',
        })
      });
    }
    else{
      const body = {
        "name": this.signupForm.value.cmpnyname, 
        "iban": "",
        "licence_no": "",
        "address": this.signupForm.value.cmpnyadress, 
        "city": this.signupForm.value.city, 
        "state": this.signupForm.value.state,
        "country": this.slctcntry,
        "phn_country_code": this.countrycode1,
        "phone_number": this.signupForm.value.phnnumber,
        "email": this.signupForm.value.email,
        "primary_contact": {
          "phn_country_code": this.countrycode1,
          "phone_number": this.signupForm.value.phnnumberp, 
          "name": this.signupForm.value.cname, 
          "password": this.signupForm.value.password, 
          "confirmation_password": this.signupForm.value.cnfrmpasswrd
        }
      }
      this.common.signup(body).subscribe(data => {
      this.spinner.hide();
      Swal.fire({
        icon: 'success',
        title: data.message,
        showConfirmButton: true,
      }).then((result) => {
        if (result.value) {
          this.router.navigate(["/login"]);
        }
      }) 
    },error=>{
      this.spinner.hide();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Contact person phone number already exist',
      })
    });
    } 
    }
  }

  /**
   * this method for navigate login page
   */
  navigatelogin(){
    this.router.navigate(["/login"])
  }

  /**
   * this method for activate license agent
   */
  licenseyes(){
    this.bttnshow = true;
    this.licensefield = true;
  }

  /**
   * this method for deactivate license agent
   */
  licenseno(){
    this.licensefield = false;
    this.bttnshow = true;
  }

  /**
   * this method for select country name
   */
  changecntry(newObj){
    this.countries.forEach(obj => {
      if(obj.code == newObj){
        this.slctcntry = obj.name;
      }
      
    })
  }

  /**
   * this method for select country code
   */
  changecntrycode(newObj){
    this.countries.forEach(obj => {
      if(obj.name == newObj){
        this.countrycode1 = obj.code;
      }
      
    })
  }

  /**
   * this method for block spacial characters
   */
  omit_special_char(event){   
   var k;  
   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
   return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
   
  }

}
