import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../../common/services/notification.service';
import Swal from 'sweetalert2';
import { AppStore } from 'src/app/stores/app.store';
import { TranslateService } from '@ngx-translate/core';
import { Country } from 'src/app/models/airportList';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../environments/environment'
import { GeneralHelper } from '../../../helpers/General/general-helpers'
import { loginAdapter } from 'src/app/adapters/Landing/loginAdapter';
import { loginHelper } from 'src/app/helpers/landing/login-helper'
import { empty } from 'rxjs';
import { LandingApiService } from 'src/app/Services/landing-api-services';
import { CommonApiService } from 'src/app/Services/common-api-services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
  gHelper: GeneralHelper;
  loginAdapter: loginAdapter;
  loginHelperClass: loginHelper;
  commonApiService:CommonApiService;
  constructor(private http: HttpClient,
    private router: Router,
    private translate: TranslateService,
    private appStore: AppStore,
    private fb: FormBuilder,
    private notifyService: NotificationService,
    private common: LandingApiService,
    private cookie: CookieService,
    private _commonApiService:CommonApiService,
    private _gHelper: GeneralHelper) {
    this.gHelper = _gHelper;
    this.commonApiService = this._commonApiService;
    this.loginHelperClass = new loginHelper(this.cookie, this.notifyService, this.translate, this.appStore, this.router);
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
    this.commonApiService.getCountries().subscribe(res => {
      this.countries = res;
    })
  }

  /**
   * this method used for fetch username and password from cookie
   */
  checkTokenExists() {
    if (sessionStorage.getItem("accesstoken") != null) {
      if (sessionStorage.getItem("isTouched") == 'true') {
        this.username = this.cookie.get("userName");
        this.password = this.cookie.get("password");
        this.rememberme = true;
      }
    }
  }

  /**
   * this methode is used for setting remember me boolean
   */
  setBoolean() {
    this.rememberme = !this.rememberme;
  }

  /**
   * this function used for user login 
   */
  submit = function () {
    if (this.username == '' || this.password == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fields can not be empty',
      })
      return;
    } else {
      if (this.rememberme) {
        this.loginHelperClass.setDataForCookies(this.username, this.password);
      }
      const body = { 'username': this.username, 'password': this.password }
      this.common.login(body).subscribe(data => {
        this.loginHelperClass.loginResponse(data, this.rememverme);
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.translate.instant('Invalid Username or Password'),
        })
      });

    }
  }

  /**
   * this method is used convert to arabic language
   */
  ngAfterViewChecked() {
    this.translate.use(this.appStore.langCode);
    if (this.appStore.langCode == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
  }

  /**
   * this method is used for navigate signup page
   */
  navigatesignup() {
    this.router.navigate(["/signup"]);
  }

  /**
   * this method used for sent otp to user enter phone number
   */
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

  /**
   * this method for add new password
   */
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

  /**
   * this method for disable or active sentotp button
   */
  hidebutton() {
    if (this.phoneNumber == null || this.phoneNumber == "") {
      return false;
    }
    return true;
  }

  /**
   * this method for hide forgot button
   */
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

  /**
   * this method is used set timer for enter otp
   */
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