import {Component,EventEmitter,Input,OnChanges,OnInit,Output,} from "@angular/core";
import { CreateTripAdapter } from "src/app/adapters/sub-agent/create-trip-adapter";
import { HelperService } from "src/app/common/services/helper-service";
import { CreateTripHelper } from "src/app/helpers/sub-agent/create-trip-helpers";
import { SelectedHotel } from "src/app/models/selected_hotel";
import { NotificationService } from "src/app/common/services/notification.service";
import { AppStore } from "src/app/stores/app.store";
import { SubAgentApiService } from "src/app/Services/sub-agent-api-services";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-hotel-details-popup",
  templateUrl: "./hotel-details-popup.component.html",
  styleUrls: ["./hotel-details-popup.component.scss"]
})

export class HotelDetailsPopupComponent implements OnInit ,OnChanges{
  static roomMoreDetails : boolean;
  selectedCurrency: any;
  selectedLanguage: any;
  readonly = true;
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
  isGrouped: boolean;
  rooms: any[];
  showHotelDetails: boolean = false;
  makkaSelectActivate: boolean;
  totalRoomPrice: number = 0;
  selectedRoomCount: number = 0;
  selectedHotelInfo: SelectedHotel;
  showhotelDetails: boolean;
  makkahticked: boolean;
  stage: any;
  madeendetailshow: boolean;
  steps: any;
  loader: boolean=true;
  isGroupedMakka: any;
  ddate: any;
  countadult: any;
  countchild: any;
  numberOfDays: number;
  search: string = "";
  setViewData: {};
  selectedRoomDetails: boolean = false;
  selectedRoomInfo: any;
  private createTripAdapter: CreateTripAdapter = new CreateTripAdapter(this.helperService,this.appStore);
  private createTripHelper: CreateTripHelper = new CreateTripHelper(this.helperService,this.translate);
  showHotelDetailsShimmer: boolean;
  roomImageGallery: boolean;
  totalTravellers : number;
  noOfImages: number;
  hotelData:any;
  hotelInfo:any;
  isRoomLimitEceeded : boolean = false;
  activeBttn:boolean = false;
  @Output() detailsFlag = new EventEmitter();
  activateSearchBtn: boolean = true;
   
  constructor(
    private commonService: SubAgentApiService,
    private helperService: HelperService,
    private appStore: AppStore,
    private notifyService: NotificationService,
    private translate: TranslateService
  ) {}

  @Output() handleNotif = new EventEmitter();
  @Output() changeItinerary = new EventEmitter();
  @Input() hotelDetailsData : any;

  ngAfterViewChecked() {
    this.translate.use((sessionStorage.getItem('userLanguage') === 'ar-AE') ? "ar-AE" : "en-US");
    if (sessionStorage.getItem('userLanguage') == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
  }

  /*
   * this method for notify parent component
   */
  onNotify() {
    this.handleNotif.emit("notify parent");
  }

  /*
   * this method for notify parent component
   */
  onNotifyCreteTripForItineraryChange() {
    this.changeItinerary.emit("notify parent");
  }

   ngOnInit() {
    this.setDefaultLangAndCurrency()
    var obj = JSON.parse(sessionStorage.getItem('userObject'))
    this.totalTravellers = obj.adults + obj.children;
    this.rooms = JSON.parse(sessionStorage.getItem('roomData'));
    this.selectedRoomCount = this.rooms.length
     /*
     * this method for fetching selected hotel details
     */
    if(this.hotelDetailsData != null){
      this.selectedHotel = this.hotelDetailsData;
      this.setData()
    }else{
      this.fetchSelectedHotelInfoAfterRefresh()
      }
    } 

  ngOnChanges() {
  }

  fetchSelectedHotelInfoAfterRefresh(){
    this.commonService.getSelectedHotelInfo(this.createTripAdapter.selectedHotelInfoRequest(this.selectedLanguage,JSON.parse(sessionStorage.getItem('selectedHotelInfo')),this.search), this.selectedCurrency,this.selectedLanguage).subscribe(
      (data) => {
        this.selectedHotel = data;
        this.setData()
      });
  }

  setDefaultLangAndCurrency(){
    if (typeof this.selectedCurrency == "undefined") {
      this.selectedCurrency = this.appStore.currencyCode;
    } 
    if (typeof this.selectedLanguage == "undefined") {
      var lang: any = this.selectedLanguage =  "en-US" ;
    }
  }

  /*
     * this method for setting dom data
     */
  setData(){
    this.hotelInfo = JSON.parse(sessionStorage.getItem('hotelInfo'))
    const x = this.createTripHelper.setDataForHotelDeatils(this.selectedHotel,this.hotelInfo,this.rooms);
    if(x && x.roomGroups.length > 0){
      this.appStore.showHotelDetailsShimmer = false;
      this.showHotelDetailsShimmer = false;
      this.showHotelDetails = true; 
      this.selectedRoomGroups = x.roomGroups;
      this.makkaSelectActivate = x.isSelectBtnActive;
      this.hotelPics = x.hotelPics;
      this.isGrouped = x.isGrouped;
      this.noOfImages = this.hotelPics.length;
      if(x.roomPrice > 0){ this.totalRoomPrice = x.roomPrice }
      this.numberOfDays = JSON.parse(sessionStorage.getItem('noOfDays'))
      if(this.isGrouped){this.selectedRoomCount = 0}
    }
    
  }

  
  /*
   * this method for hide hotel popup
   */
  hideHotelDetailsPupup() {
    this.showHotelDetails = false;
    this.appStore.showHotelDetails = false;
    sessionStorage.setItem('hotelDetailsFlag','close')
    this.detailsFlag.emit('hide')
  }

  bookHotel() {
    this.activeBttn = true;
    this.makkahticked = true;
    this.makkahticked = true;
    this.madeendetailshow = true;
    this.showHotelDetailsShimmer = false;
    if(!this.appStore.isAvailabilityFails){
      this.appStore.stepperIndex += 1;
    }
    if(!sessionStorage.getItem('custom_trip_id')){
      this.commonService.saveSelectedHotel(this.createTripAdapter.bookHotelRequest(this.isGrouped,this.selectedRoomGroups,this.selectedHotel,this.hotelInfo,this.numberOfDays),sessionStorage.getItem('userLanguage')).subscribe((data) => {
        this.activeBttn = true;
        sessionStorage.setItem('custom_trip_id',data.id);
        sessionStorage.setItem('stage','1')
        this.onNotify();
        window.scroll(0,0);
      });
    }
    if(sessionStorage.getItem('custom_trip_id')){
      this.commonService.updateCustomTrip(sessionStorage.getItem('custom_trip_id'),this.createTripAdapter.bookHotelRequest(this.isGrouped,this.selectedRoomGroups,this.selectedHotel,this.hotelInfo,this.numberOfDays),sessionStorage.getItem('userLanguage')).subscribe((data) => {
        this.activeBttn = true;
          if(JSON.parse(sessionStorage.getItem('steps')).length == 1){
            sessionStorage.setItem('stage','1')
          }else {
            sessionStorage.setItem('stage','2')
          }
          this.onNotify();
          window.scroll(0,0);
      });
    }
    sessionStorage.setItem('hotelDetailsFlag','close')
    this.appStore.showShimmer = !this.appStore.showShimmer
  }
  
  /*
   * this method for show room details popup
   */
  showRoomDetailsPopUp(room) {
    this.selectedRoomInfo = room;
    HotelDetailsPopupComponent.roomMoreDetails = true;
  }

  isGroupedFalseRadioClicked(i, j) {
    if (this.selectedRoomGroups[i].rooms.length > 0) {
      for (let k = 0; k < this.selectedRoomGroups[i].rooms.length; k++) {
        if (this.selectedRoomGroups[i].rooms[k].isRoomSelectionChecked) {
          this.selectedRoomGroups[i].rooms[k].isRoomSelectionChecked = !this
            .selectedRoomGroups[i].rooms[k].isRoomSelectionChecked;
          this.totalRoomPrice = this.totalRoomPrice - (this.selectedRoomGroups[i].rooms[k].amount * this.selectedRoomGroups[i].rooms[k].quantity);
        }
      }
    }

    if (!this.selectedRoomGroups[i].rooms[j].isRoomSelectionChecked) {
      this.selectedRoomGroups[i].rooms[j].isRoomSelectionChecked = !this
        .selectedRoomGroups[i].rooms[j].isRoomSelectionChecked;
      this.totalRoomPrice = this.totalRoomPrice + (this.selectedRoomGroups[i].rooms[j].amount * this.selectedRoomGroups[i].rooms[j].quantity);
    }
  }

  /*
   * this method for selecting room if it is grouped
   */
  isGroupedRadioClicked(i,j){
    this.selectedRoomCount = 0;
    this.totalRoomPrice = 0 ;
    for(let k=0;k<this.selectedRoomGroups.length;k++){
      this.selectedRoomGroups[k].isRoomSelectionChecked = false;
    } 
    this.totalRoomPrice = this.selectedRoomGroups[i].amount;
    this.selectedRoomGroups[i].isRoomSelectionChecked = true;
    this.selectedRoomCount = this.rooms.length;
    this.makkaSelectActivate = false;
  }

  /*
   * this method to show all images at room details popup
   */
  viewAllImagePopup(){
    this.roomImageGallery = !this.roomImageGallery;
  }

  ngDoCheck(){
    this.selectedRoomDetails = HotelDetailsPopupComponent.roomMoreDetails;
  }
}