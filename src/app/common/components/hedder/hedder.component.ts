import { Component, OnInit, DoCheck } from "@angular/core";
import { Router } from "@angular/router";
import { AppStore } from "src/app/stores/app.store";
import { CookieService } from "ngx-cookie-service";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { LandingApiService } from "src/app/Services/landing-api-services";
import { CommonApiService } from "src/app/Services/common-api-services";
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: "app-hedder",
  templateUrl: "./hedder.component.html",
  styleUrls: ["./hedder.component.scss"]
})

export class HedderComponent implements OnInit, DoCheck {
  gettype: any;
  public currentUser: any;
  superAgencyActive: boolean;
  subAgencyActive: boolean;
  branchActive: boolean;
  languageList: any;
  activeArabic: boolean = false;
  showNavBar: boolean = false;
  commonApiService: CommonApiService;
  public languageSelect: any = "en-US";
  userType: any;


  constructor(
    public router: Router,
    private appStore: AppStore,
    private common: LandingApiService,
    private cookie: CookieService,
    private _commonSpiService: CommonApiService,
    private translate: TranslateService,
    private formBuilder: FormBuilder,
  ) {
    this.commonApiService = this._commonSpiService
  }

  ngOnInit() {
    if (sessionStorage.getItem('userLanguage')) {
      this.languageSelect = sessionStorage.getItem('userLanguage');
    }
  }

  logout() {
    sessionStorage.clear();
    this.superAgencyActive = false;
    this.branchActive = false;
    this.subAgencyActive = false;
    this.appStore.currentUser = "";
    this.router.navigate(["/login"]);
  }

  clearCoockies() {
    this.cookie.set("userName", null);
    this.cookie.set("password", null);
  }

  changeLangValue(value) {
    this.appStore.langCode = value;
    this.translate.use((this.appStore.langCode === 'ar-AE') ? "ar-AE" : "en-US");
    localStorage.setItem("userLanguage", value)
    sessionStorage.setItem("userLanguage", value)
    if (this.appStore.langCode == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
  }

  ngDoCheck() {
    if (sessionStorage.getItem("currentUser") == "SUPER") {
      this.superAgencyActive = true;
      this.userType = sessionStorage.getItem('userTypeName');
    }
    if (sessionStorage.getItem("currentUser") == "BRANCH") {
      this.branchActive = true;
      this.userType = sessionStorage.getItem('userTypeName')
    }
    if (sessionStorage.getItem("currentUser") == "SUB") {
      this.subAgencyActive = true;
      this.userType = sessionStorage.getItem('userTypeName');
    }
  }

  navigatepage(link: any) {
    if (link == 'superagent/createTrip') {
      sessionStorage.removeItem('selector')
    }
    this.router.navigate([link]);
  }

  navigateagencyprofile() {
    this.router.navigate(["/superagent/profile/", sessionStorage.getItem("agency_Id")]);
  }

}
