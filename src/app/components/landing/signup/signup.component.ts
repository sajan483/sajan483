import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { Country } from './country';
import { CommonApiService } from '../../../common/services/common-api-services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers:[CommonApiService]
})

export class SignupComponent implements OnInit {
  eyes: boolean;
  show: boolean;
  signupForm:FormGroup;
  submitted = false;
  licensefield: boolean = false;
  bttnshow: boolean = false;
  countries : Country[];
  slctcntry : any = 'India';
  countrycode1 : any = '91';

  constructor(private common: CommonApiService,private router: Router,private formBuilder: FormBuilder
    ,private spinner: NgxSpinnerService) { 
    this.signupForm = formBuilder.group({
      cmpnyname: ['', Validators.required],
      phnnumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cmpnyadress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      cname: ['', Validators.required],
      phnnumberp: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cnfrmpasswrd: ['', Validators.required],
      
    })
  }

  get f() { return this.signupForm.controls; }

  ngOnInit() {
    this.common.getCountries().subscribe(res =>{
      console.log(res)
      this.countries = res;
    })
  }

  onSubmit() {
    console.log("1")
    this.spinner.show();
    this.submitted = true;
    if (this.signupForm.invalid) {
      console.log("2")
      this.spinner.hide();
      return;
    }
    if(this.licensefield){
      console.log("3")
      if((<HTMLInputElement>document.getElementById("license")).value == ""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter License Number',
        })
        this.spinner.hide();
        return;
      }
      if((<HTMLInputElement>document.getElementById("iban")).value == ""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter IBAN Number',
        })
        this.spinner.hide();
        return;
      }
      
    }
    if(this.signupForm.value.password != this.signupForm.value.cnfrmpasswrd){
      console.log("4")
      this.spinner.hide();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password and Confirm Password is not match',
      })
      return;
    }
    else{
      console.log("5")
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
        console.log(body)
      this.common.signup(body).subscribe(data => {
        console.log(data);
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
      console.log(body)
    this.common.signup(body).subscribe(data => {
      console.log(data);
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
  navigatelogin(){
    this.router.navigate(["/login"])
  }
  licenseyes(){
    this.bttnshow = true;
    this.licensefield = true;
  }
  licenseno(){
    this.licensefield = false;
    this.bttnshow = true;
  }
  changecntry(newObj){
    this.countries.forEach(obj => {
      if(obj.code == newObj){
        console.log(obj)
        this.slctcntry = obj.name;
      }
      
    })
  }
  changecntrycode(newObj){
    this.countries.forEach(obj => {
      if(obj.name == newObj){
        console.log(obj)
        this.countrycode1 = obj.code;
      }
      
    })
  }
  omit_special_char(event)
  {   
   var k;  
   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
   return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
   
  }
}
