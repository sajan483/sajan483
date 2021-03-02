import { DatePipe } from "@angular/common";
import { DoCheck, EventEmitter, Input,Output } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { CreateTripAdapter } from "src/app/adapters/create-trip-adapter";
import { HelperService } from "src/app/common/services/helper-service";
import { CreateTripHelper } from "src/app/helpers/create-trip-helpers";
import { NotificationService } from "src/app/notification.service";
import { AppStore } from "src/app/stores/app.store";
import { ApiService } from "../../create-trip-api-service";

@Component({
  selector: "app-makka-hotel",
  templateUrl: "./makka-hotel.component.html",
  styleUrls: ["./makka-hotel.component.scss"],
})

export class MakkaHotelComponent implements OnInit,DoCheck{
  rooms: any;
  userDetails: any;
  selectedCurrency: any = "SAR";
  selectedLanguage: any;
  isHotelsSortedByPrice: boolean = false;
  isHotelListSortedByHaramDistance: boolean;
  selectedRoomCount: number;
  selectedTravellersCount: number;
  totalRoomPrice: number;
  userFilter: any;
  selectedHotel: any;
  selectedRoomGroups: any[];
  makkaHotelName: any;
  makkaCheckInTime: any;
  makkaCheckOutTime: any;
  hotelPics: any[];
  hotelPics1: any[];
  hotelPics2: any[];
  moreimages: boolean;
  imageshow: number;
  isGroupedMakka: boolean;
  showHotelDetails: boolean;
  makkaSelectActivate: boolean;
  hotelInfo: any;
  showShimmer: boolean;
  showHotelDetailsShimmer: boolean;
  private createTripAdapter: CreateTripAdapter = new CreateTripAdapter(this.helperService,this.appStore);
  private createTripSupport: CreateTripHelper = new CreateTripHelper(this.helperService);
  search: string = "";
  hotelData: any;
  showDetailsShimmer: boolean;
  
  constructor(
    private commonService: ApiService,
    private notifyService: NotificationService,
    private translateService: TranslateService,
    private appStore: AppStore,
    private datepipe: DatePipe,
    private router: Router,
    private helperService: HelperService,
  ) {}

  @Input() hotelsList: any[];
  @Output() notifyGrandparent= new EventEmitter();

  childEvent(event) {
    this.notifyGrandparent.emit('event')
  }

  ngOnInit() {
  }

  /*
 * this method for sorting hotel list according to price,haram distance
 */

  sortHotelList(asnd, dsnd, base) {
    if (asnd && base == "price") {
      this.hotelsList.sort((a, b) => a.amount - b.amount);
      this.isHotelsSortedByPrice = true;
    }
    if (dsnd && base == "price") {
      this.hotelsList.reverse();
      this.isHotelsSortedByPrice = false;
    }
    if (asnd && base == "hararamDistance") {
      this.hotelsList.sort((a, b) => a.haram_distance - b.haram_distance);
      this.isHotelListSortedByHaramDistance = true;
    }
    if (dsnd && "hararamDistance") {
      this.hotelsList.reverse();
      this.isHotelListSortedByHaramDistance = false;
    }
  }

   /*
 * this method for showing hotelDetails PopUp
 */
  showHotelDetailsPopUp(item) {
    this.showDetailsShimmer=true;
    this.hotelInfo = item;
    this.appStore.showHotelDetails = true;
    
    this.appStore.showHotelDetailsShimmer = true;
    this.showHotelDetailsShimmer = true;
    this.selectedRoomCount = 0;
    this.selectedTravellersCount = 0;
    this.totalRoomPrice = 0;
    this.fetchSelectedHotelInfo(item);
  }

  /*
   * this method for setting lang and currency
   */
  setDefaultLangAndCurrency(){
    if (typeof this.selectedCurrency == "undefined") {
      this.selectedCurrency = "SAR";
    } 
    if (typeof this.selectedLanguage == "undefined") {
      var lang: any = this.selectedLanguage =  "en-US" ;
    }
  }

  /*
   * this method for fetching selected hotel details
   */

  fetchSelectedHotelInfo(item) {
    this.setDefaultLangAndCurrency();
    this.commonService.getSelectedHotelInfo(this.createTripAdapter.selectedHotelInfoRequest(this.selectedLanguage,item,this.search), this.selectedCurrency,this.selectedLanguage).subscribe(
      (data) => {
        this.hotelData = data;
        this.showHotelDetails = true;
        this.showDetailsShimmer = false;
      },
      (error) => {
        this.showDetailsShimmer = false;
        this.notifyService.showWarning(this.translateService.instant("No details availabe"));
      }
    );
  }

 /*
 * this method for navigate to first page
 */
  backToHomePage() {
    this.router.navigate(["/firstpage"]);
  }

   /**
   * this method for checking model status
   */
  ngDoCheck(){
    if(this.appStore.showHotelDetails) {
      this.showHotelDetails = true;
    } else if(!this.appStore.showHotelDetails) {
      this.showHotelDetails = false;
    }
    if(this.appStore.showHotelDetailsShimmer){
      this.showHotelDetailsShimmer = true;
    }
    if(!this.appStore.showHotelDetailsShimmer){
      this.showHotelDetailsShimmer = false;
    }
    //alert(this.showHotelDetailsShimmer)

    if(this.hotelsList.length > 0){
      this.appStore.showShimmer = false;
    }
  }
  
  readMore( event,i ){
    (<HTMLElement>document.getElementById("readLessBttn"+i)).style.display = "inline-block";
    (<HTMLElement>document.getElementById("readMoreBttn"+i)).style.display = "none";
    event.target.previousElementSibling.style.maxHeight = event.target.previousElementSibling.scrollHeight + "px";
  }

  readLess(event,i){
    (<HTMLElement>document.getElementById("readLessBttn"+i)).style.display = "none";
    (<HTMLElement>document.getElementById("readMoreBttn"+i)).style.display = "inline-block";
    event.target.previousElementSibling.previousElementSibling.style.maxHeight = null;
  }
  
}