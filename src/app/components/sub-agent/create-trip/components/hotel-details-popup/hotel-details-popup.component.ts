import {Component,EventEmitter,Input,OnChanges,OnInit,Output,} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CreateTripAdapter } from "src/app/adapters/sub-agent/create-trip-adapter";
import { HelperService } from "src/app/common/services/helper-service";
import { CreateTripHelper } from "src/app/helpers/sub-agent/create-trip-helpers";
import { SelectedHotel } from "src/app/models/selected_hotel";
import { Room } from "src/app/models/visaTypes";
import { NotificationService } from "src/app/common/services/notification.service";
import { AppStore } from "src/app/stores/app.store";
import { ApiService } from "../../create-trip-api-service";

@Component({
  selector: "app-hotel-details-popup",
  templateUrl: "./hotel-details-popup.component.html",
  styleUrls: ["./hotel-details-popup.component.scss"],
  providers: [HelperService],
})

export class HotelDetailsPopupComponent implements OnInit ,OnChanges{
  selectedCurrency: any;
  selectedLanguage: any;
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
  rooms: Room[];
  showHotelDetails: boolean = false;
  makkaSelectActivate: boolean;
  totalRoomPrice: number = 0;
  selectedRoomCount: number;
  selectedHotelInfo: SelectedHotel;
  showhotelDetails: boolean;
  makkahticked: boolean;
  stageArray: any;
  makkahloader: boolean;
  madeendetailshow: boolean;
  steps: any;
  madeenaloader: boolean;
  isGroupedMakka: any;
  ddate: any;
  countadult: any;
  countchild: any;
  noOfDays: number;
  search: string = "";
  setViewData: {};
  selectedRoomDetails: boolean = false;
  selectedRoomInfo: any;
  private createTripAdapter: CreateTripAdapter = new CreateTripAdapter(this.helperService,this.appStore);
  private createTripSupport: CreateTripHelper = new CreateTripHelper(this.helperService);
  showHotelDetailsShimmer: boolean;
  roomImageGallery: boolean;
  totalTravellers : number;
  noOfImages: number;
  a: boolean;
   
  constructor(
    private commonService: ApiService,
    private helperService: HelperService,
    private appStore: AppStore,
    private notifyService: NotificationService,
    private translate :TranslateService
  ) {}
  @Input() hotelInfo : any;
  @Input() hotelData : any;
  @Output() handleNotif = new EventEmitter();

  /*
   * this method for notify parent component
   */
  onNotify() {
    this.handleNotif.emit("notify parent");
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.a = true;
    this.totalTravellers = this.appStore.adultCount + this.appStore.childCount;
    this.selectedHotel = this.hotelData;
    this.rooms = this.appStore.roomArray;
    /*
     * this method for fetching selected hotel details
     */
    this.setData()
  }

  /*
     * this method for setting dom data
     */
  setData(){
    const x = this.createTripSupport.setDataForHotelDeatils(this.hotelData,this.hotelInfo,this.rooms);
    if(x && x.roomGroups.length > 0){
      this.a = false; 
      this.appStore.showHotelDetailsShimmer = false;
      this.showHotelDetailsShimmer = false;
      this.showHotelDetails = true; 
      this.selectedRoomGroups = x.roomGroups;
      this.makkaSelectActivate = x.isSelectBtnActive;
      this.noOfDays = x.diffDays;
      this.hotelPics = x.hotelPics;
      this.isGrouped = x.isGrouped;
      this.noOfImages = this.hotelPics.length;
      if(x.roomPrice > 0){ this.totalRoomPrice = x.roomPrice }
    }
  }

  
  /*
   * this method for hide hotel popup
   */
  hideHotelDetailsPupup() {
    this.showHotelDetails = false;
    this.appStore.showHotelDetails = false;
  }

  /*
   * this method for booking hotel
   */
  bookHotel() {
    this.showHotelDetails = false;
    this.appStore.stepperIndex += 1;
    this.makkahticked = true;
    this.makkahloader = false;
    this.makkahticked = true;
    this.madeendetailshow = true;
    this.showHotelDetailsShimmer = false
    if(!this.appStore.customeTripId){
      this.commonService.saveSelectedHotel(this.createTripAdapter.bookHotelRequest(this.isGrouped,this.selectedRoomGroups,this.hotelData,this.hotelInfo)).subscribe((data) => {
        this.appStore.customeTripId = data.id;
        this.onNotify();
      });
    }
    if(this.appStore.customeTripId){
      this.commonService.updateCustomTrip(this.appStore.customeTripId,this.createTripAdapter.bookHotelRequest(this.isGrouped,this.selectedRoomGroups,this.hotelData,this.hotelInfo)).subscribe((data) => {
        this.appStore.customeTripId = data.id;
        this.onNotify();
      });
    }
  }

  /*
   * this method for selecting room
   */
  roomSelectionCheckboxChecked(i, j) {
    if (this.selectedRoomGroups[i].rooms.length > 0) {
      for (let k = 0; k < this.selectedRoomGroups[i].rooms.length; k++) {
        if (this.selectedRoomGroups[i].rooms[k].isRoomSelectionChecked) {
          this.selectedRoomGroups[i].rooms[k].isRoomSelectionChecked = !this
            .selectedRoomGroups[i].rooms[k].isRoomSelectionChecked;
          this.totalRoomPrice =
            this.totalRoomPrice - this.selectedRoomGroups[i].rooms[k].amount;
        }
      }
    }

    if (!this.selectedRoomGroups[i].rooms[j].isRoomSelectionChecked) {
      this.selectedRoomGroups[i].rooms[j].isRoomSelectionChecked = !this
        .selectedRoomGroups[i].rooms[j].isRoomSelectionChecked;
      this.totalRoomPrice =
        this.totalRoomPrice + this.selectedRoomGroups[i].rooms[j].amount;
        this.makkaSelectActivate = true;
    }
  }

  /*
   * this method for selecting room if it is grouped
   */
  isGroupedRadioClicked(i,j){
    this.selectedRoomCount = 0;
    this.totalRoomPrice = 0;
    for (let k = 0; k < this.selectedRoomGroups.length; k++) {
      this.selectedRoomGroups[k].isRoomSelectionChecked = false;
    }
    this.totalRoomPrice = this.selectedRoomGroups[i].rooms[j].insertedAmount;
    this.selectedRoomGroups[i].isRoomSelectionChecked = true;
    this.selectedRoomCount = this.rooms.length;
    this.makkaSelectActivate = true;
  }
  /*
   * this method for show room details popup
   */
  showRoomDetailsPopUp(room) {
    this.selectedRoomInfo = room;
    this.selectedRoomDetails = !this.selectedRoomDetails;
  }

  viewAllImagePopup(){
    this.roomImageGallery = !this.roomImageGallery;
  }
  
}