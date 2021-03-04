import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../../common/services/notification.service';
import Swal from 'sweetalert2';
import { AppStore } from 'src/app/stores/app.store';
import { TranslateService } from '@ngx-translate/core';
import { Country } from '../signup/country';
import { CookieService } from 'ngx-cookie-service';
import { CommonApiService } from '../../../common/services/common-api-services';
import { environment } from '../../../../environments/environment'
import { generalHelper } from '../../../helpers/General/general-helpers'
import { loginAdapter } from 'src/app/adapters/Landing/loginAdapter';
import { loginHelper } from 'src/app/helpers/landing/login-helper'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [CommonApiService]
})

export class LoginComponent implements OnInit {
  public frmSignup: FormGroup;
  etype: any;
  countries: Country;
  countrycode1: any = environment.countryCodeCommen;
  rePhoneNumber: string;
  countrycode2: any = environment.countryCodeCommen;
  otp: string;
  ePassword: string;
  cPassword: string;
  phoneNumber: string;
  interval: any;
  timeLeft: number = environment.timeLeft;
  rememberme: boolean = false;
  username: string;
  password: string;
  access: any;
  token: any;
  gHelper: generalHelper;
  loginAdapter: loginAdapter;
  loginHelperClass: loginHelper;
  constructor(private http: HttpClient,
    private router: Router,
    private translate: TranslateService,
    private appStore: AppStore,
    private fb: FormBuilder,
    private notifyService: NotificationService,
    private common: CommonApiService,
    private cookie: CookieService,
    private _gHelper: generalHelper) {
    this.gHelper = _gHelper;
    this.loginHelperClass = new loginHelper(this.cookie,this.notifyService,this.translate,this.appStore,this.router);
    this.loginAdapter = new loginAdapter();
    this.token = this.gHelper.getAccessTocken();
    this.frmSignup = this.loginAdapter.createLoginGroup();
  }

  ngOnInit(): void {
    this.getCountryList();
    this.checkTokenExists();
  }

  /**
   * this method is used for get countries list
   */
  getCountryList() {
    this.common.getCountries().subscribe(res => {
      this.countries = res;
    })
  }

  /**
   * this method used for fetch username and password from cookie
   */
  checkTokenExists() {
    if (localStorage.getItem("accesstoken") != null) {
      if (localStorage.getItem("isTouched") == 'true') {
        this.username = this.cookie.get("userName");
        this.password = this.cookie.get("password");
        this.rememberme = true;
      }
    }
  }

  setBoolean() {
    this.rememberme = !this.rememberme;
  }

  submit = function () {
    if ((this.username == null) || (this.password == null)) {
      alert("Fields can not be empty");
      return;
    } else {
      if (this.rememberme) {
        this.loginHelperClass.setDataForCookies(this.username, this.password);
      }
      const body = { 'username': this.username, 'password': this.password }
      this.common.login(body).subscribe(data =>{
        this.loginHelperClass.loginResponse(data,this.rememverme);
      }, error => {
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
    if (this.appStore.langCode == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
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

  navigatesignup() {
    this.router.navigate(["/signup"]);
  }

  onSendOtpButtonClicked() {
    let data = { "phone_number": this.countrycode1 + this.phoneNumber, "phn_country_code": this.countrycode1 }
    this.common.getOtp(data).subscribe(res => {
      if (res.status == 'success') {
        this.timeLeft = res.validity_in_minutes * 60;
        document.getElementById("openModalButton").click();
        this.startTimer()
      }
      if (res.status == 'failure') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.translate.instant(res.errors),
        })
      }
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: this.translate.instant('Something went wrong'),
      })
    })
  }

  onChangePasswordBtnClicked() {
    let data = {
      "phone_number": this.countrycode2 + this.rePhoneNumber,
      "otp": this.otp,
      "password": this.ePassword,
      "confirmation_password": this.cPassword
    }
    this.common.changePassword(data).subscribe(res => {
      if (res.status == 'success') {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: this.translate.instant(res.message),
        })
      }
      if (res.status == 'failure') {
        Swal.fire({
          icon: 'error',
          title: 'Ooops',
          text: this.translate.instant(res.errors[0]),
        })
      }
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: this.translate.instant('Something went wrong'),
      })
    })
  }

  hidebutton() {
    if (this.phoneNumber == null || this.phoneNumber == "") {
      return false;
    }
    return true;
  }

  hideForgotPssBtn() {
    if (this.rePhoneNumber == null || this.rePhoneNumber == "") {
      return false;
    }
    if (this.otp == null || this.otp == "") {
      return false;
    }
    if (this.ePassword == null || this.ePassword == "") {
      return false;
    }
    if (this.cPassword == null || this.cPassword == "") {
      return false;
    }
    if (this.ePassword != this.cPassword) {
      return false;
    }
    return true;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
      else if (this.timeLeft == 0) {
        (<HTMLInputElement>document.getElementById("forgotClose")).click();
        clearInterval(this.interval);
      }
    }, 1000)
  }

}