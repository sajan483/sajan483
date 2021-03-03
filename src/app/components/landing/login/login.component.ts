import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../../common/services/notification.service';
import   Swal from 'sweetalert2';
import { AppStore } from 'src/app/stores/app.store';
import { TranslateService } from '@ngx-translate/core';
import { Country } from '../signup/country';
import { CookieService } from 'ngx-cookie-service';
import { CommonApiService } from '../../../common/services/common-api-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[CommonApiService]
})

export class LoginComponent implements OnInit {
  public frmSignup: FormGroup;
  etype : any;
  countries : Country;
  slctcntry : any = 'India';
  countrycode1 : any = '91';
  rePhoneNumber : string;
  countrycode2 : any = '91'
  otp:string;
  ePassword;string;
  cPassword:string;
  phoneNumber: string;
  invalidPhn: boolean = false;
  interval;
  timeLeft: number = 0;
  rememberme: boolean = false;
  username: string;
  password: string;
  access: any;
  token: any = localStorage.getItem('accesstoken');

  constructor(private http: HttpClient,
    private router: Router,
    private translate: TranslateService,
    private appStore: AppStore, 
    private fb: FormBuilder,
    private notifyService : NotificationService,
    private commonApiService:CommonApiService,
    private cookie:CookieService) {
    this.frmSignup = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
  
  ngOnInit(): void {
    this.commonApiService.getCountries().subscribe(res =>{
      this.countries = res;
    })
    this.checkTokenExists();
  }

  rememberMe(evt){
    if(evt.checked){
      this.rememberme = true;
    }else{
      this.rememberme = false;
    }
  }

  checkTokenExists(){
    if(localStorage.getItem("accesstoken") != null){ 
     if(localStorage.getItem("isTouched") == 'true'){
      this.username = this.cookie.get("userName");
      this.password = this.cookie.get("password");
      this.rememberme = true;
     }
   }
  }

  setDataForCoockies(){
    this.cookie.set("userName",this.username);
    this.cookie.set("password",this.password);
  }

  setBoolean(){
    this.rememberme = !this.rememberme;
  }

  submit = function () {
    if ((this.username == null) || (this.password == null)) {
      alert("Fields can not be empty");
      return;
    } else {
      if(this.rememberme){
        this.setDataForCoockies();
      }
      const body = { 'username': this.username, 'password': this.password }

      this.http.post('https://b2b.betatest.akbarumrah.com/apis/staff/login/', body).subscribe(data => {
        this.access = data.access;
        this.etype = data.staff.employer_type;
        localStorage.setItem('accesstoken', data.access);
        if(this.rememberme){
          localStorage.setItem('isTouched','true');
        }
        if(!this.rememberme){
          localStorage.setItem('isTouched',null);
          this.cookie.set("userName",null);
          this.cookie.set("password",null);
        }
        
        localStorage.setItem('empId', data.staff.employer_id);
        if (localStorage.getItem('accesstoken') != null) {
          if(this.etype == 'branch'){
            this.notifyService.showSuccess(this.translate.instant('success !!'));
            this.appStore.currentUser = this.etype;
            localStorage.setItem('currentUser',this.etype);
            this.router.navigate(["firstpage/"]);
          }
          if(this.etype == 'agency'){
            if(data.staff.is_approved == 'False'){
              this.notifyService.showWarning(this.translate.instant('processing !!'));
              this.router.navigate(["upload", data.staff.employer_id]);
            }else{
              this.notifyService.showSuccess(this.translate.instant('success !!'));
              this.appStore.currentUser = this.etype;
              localStorage.setItem('currentUser',this.etype);
              this.router.navigate(["first/"]);
            }
            
          }
        }
      },error=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.translate.instant('Invalid Username or Password'),
        })
      });
    }
  }

  ngAfterViewChecked() {
    this.translate.use(this.appStore.langCode);
    if(this.appStore.langCode == "ar-AE"){
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    }else{
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  navigatesignup(){
    this.router.navigate(["/signup"]);
  }

  onSendOtpButtonClicked(){
    let data = { "phone_number":this.countrycode1 + this.phoneNumber,"phn_country_code": this.countrycode1}
    this.commonApiService.getOtp(data).subscribe(res =>{
      if(res.status == 'success'){
        this.timeLeft = res.validity_in_minutes * 60;
        document.getElementById("openModalButton").click();
        this.startTimer()
      }
      if(res.status == 'failure'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.translate.instant(res.errors),
        })
      }
    },(error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: this.translate.instant('Something went wrong'),
      })
    })
  }

  onChangePasswordBtnClicked(){
    let data = {
              "phone_number":this.countrycode2 + this.rePhoneNumber,
              "otp": this.otp,
              "password": this.ePassword,
              "confirmation_password": this.cPassword
          }
    this.commonApiService.changePassword(data).subscribe(res =>{
      if(res.status == 'success'){
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: this.translate.instant(res.message),
        })
      }
      if(res.status == 'failure'){
        Swal.fire({
          icon: 'error',
          title: 'Ooops',
          text: this.translate.instant(res.errors[0]),
        })
      }
    },(error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: this.translate.instant('Something went wrong'),
      })
    })
  }

  hidebutton(){
    if(this.phoneNumber == null || this.phoneNumber == ""){
      return false;
    }
    return true;
  }

  hideForgotPssBtn(){
    if(this.rePhoneNumber == null || this.rePhoneNumber == ""){
      return false;
    }
    if(this.otp == null || this.otp == ""){
      return false;
    }
    if(this.ePassword == null || this.ePassword == ""){
      return false;
    }
    if(this.cPassword == null || this.cPassword == ""){
      return false;
    }
    if(this.ePassword != this.cPassword){
      return false;
    }
    return true;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } 
      else if (this.timeLeft == 0){
        (<HTMLInputElement>document.getElementById("forgotClose")).click();
        clearInterval(this.interval);
      }
    },1000)
  }
  
}