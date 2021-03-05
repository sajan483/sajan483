import { Component, OnInit, DoCheck } from "@angular/core";
import { Router } from "@angular/router";
import { AppStore } from "src/app/stores/app.store";
import { TranslateService } from "@ngx-translate/core";
import { CookieService } from "ngx-cookie-service";
import { CommonApiService } from "../../services/common-api-services";

@Component({
  selector: "app-hedder",
  templateUrl: "./hedder.component.html",
  styleUrls: ["./hedder.component.scss"],
  providers: [CommonApiService, CookieService],
})

export class HedderComponent implements OnInit, DoCheck {
  gettype: any;
  public currentUser: any;
  agencyActive: boolean;
  branchActive: boolean;
  languageList: any;
  activeArabic: boolean = false;
  showNavBar: boolean = false;
  empid: string;

  constructor(
    public router: Router,
    private appStore: AppStore,
    private translate: TranslateService,
    private common: CommonApiService,
    private cookie: CookieService
  ) {}

  ngOnInit() {
    this.common.getLanguages().subscribe((data) => {
      this.languageList = data.results;
      var first = localStorage.getItem("userLanguage")
        ? localStorage.getItem("userLanguage")
        : "en-US";
      this.languageList.sort(function (x, y) {
        return x == first ? -1 : y == first ? 1 : 0;
      });
      if (localStorage.getItem("userLanguage")) {
        this.appStore.langCode = localStorage.getItem("userLanguage");
      } else {
        this.appStore.langCode = "en-US";
      }
      this.translate.use(this.appStore.langCode);
    });
  }

  logout() {
    localStorage.clear();
    this.agencyActive = false;
    this.branchActive = false;
    this.appStore.currentUser = "";
    this.router.navigate(["/login"]);
  }

  clearCoockies() {
    this.cookie.set("userName", null);
    this.cookie.set("password", null);
  }

  changeLangValue() {
    this.appStore.langCode = (<HTMLInputElement>(
      document.getElementById("langConverter")
    )).value;
    this.translate.use(this.appStore.langCode);
    localStorage.setItem(
      "userLanguage",
      (<HTMLInputElement>document.getElementById("langConverter")).value
    );
    if (this.appStore.langCode == "ar-AE") {
      this.activeArabic = true;
      (<HTMLInputElement>document.getElementById("body")).classList.add(
        "mirror_css"
      );
    } else {
      this.activeArabic = false;
      (<HTMLInputElement>document.getElementById("body")).classList.remove(
        "mirror_css"
      );
    }
  }

  ngDoCheck() {
    if (localStorage.getItem("currentUser") == "agency") {
      this.agencyActive = true;
    }
    if (localStorage.getItem("currentUser") == "branch") {
      this.branchActive = true;
    }
  }

  navigatepage(link: any) {
    this.router.navigate([link]);
  }

  navigateagencyprofile() {
    this.router.navigate(["Agency_profile", localStorage.getItem("empId")]);
  }

}
