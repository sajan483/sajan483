import { Component, OnInit, ViewChild, ElementRef, Renderer2, DoCheck, AfterViewInit, } from "@angular/core";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from "../../../common/services/notification.service";
import { CreateTripComponent } from "../create-trip/create-trip.component";
import { AppStore } from "../../../stores/app.store";
import { LooseObject, Room, Travellers } from "src/app/models/visaTypes";
import { listHistory } from "../../../models/listHistory";
import { HelperService } from "src/app/common/services/helper-service";
import { GeneralHelper } from "../../../helpers/General/general-helpers";
import { CreateTripHelper } from '../../../helpers/sub-agent/create-trip-helpers'
import { SubAgentApiService } from "src/app/Services/sub-agent-api-services";
import { CommonApiService } from "src/app/Services/common-api-services";


@Component({
  selector: "app-create-trip-front-page",
  templateUrl: "./create-trip-front-page.component.html",
  styleUrls: ["./create-trip-front-page.component.scss"]
})

export class CreateTripFrontPageComponent implements OnInit, DoCheck, AfterViewInit {
  crTripHelper: CreateTripHelper;
  historyList: listHistory;
  userRooms: Room[] = [];
  routeList = [];
  steps = [];
  today = new Date();
  goButtonEnable: boolean = true;
  activateMakkaSearch: boolean;
  activateMadeenaSearch: boolean;
  activateTransportSearch: boolean;
  activateMakkaPromotion: boolean;
  activateMadeenaPromotion: boolean;
  enableSearchButton: boolean = false;
  transportStartDate: any;
  makkaCheckInDate: any;
  makkaCheckOutDate: any;
  selectedItems = [];
  dropdownSettings: IDropdownSettings;
  routeSettings: IDropdownSettings = {};
  countAdult: number = 1;
  countChild: number = 0;
  countInfant: number = 0;
  displayTabtravel: boolean;
  @ViewChild("menuIconClass", { read: ElementRef, static: false })
  menuIconClass: ElementRef;
  @ViewChild("menuPopupClass", { read: ElementRef, static: false })
  menuPopupClass: ElementRef;
  @ViewChild("selectionPopUp", { read: ElementRef, static: false })
  selectionPopUp: ElementRef;
  @ViewChild("serviceDropDown", { read: ElementRef, static: false })
  serviceDropDown: ElementRef;
  @ViewChild('makkaOutDatePicker', { read: ElementRef, static: false })
  makkaOutDatePicker: ElementRef;
  @ViewChild('madeenaInPicker', { read: ElementRef, static: false })
  madeenaInPicker: ElementRef;
  @ViewChild('madeenaOutPicker', { read: ElementRef, static: false })
  madeenaOutPicker: ElementRef;
  enableMakka: boolean;
  enableMadina: boolean;
  enableTransport: boolean;
  activaleAllSearch: boolean;
  madeenmin: any;
  transportmin = new Date(this.today.getTime() - 1000 * 60 * 60 * 24);
  madeenaCheckOutDate: Date;
  madeenaCheckInDate: any;
  madeenamax: Date;
  viewsearchbutton: boolean;
  hidebttn: boolean;
  showhidebttn: boolean = true;
  transportmax: Date;
  makkahmin: Date;
  routeready: boolean;
  roomaloctionpopup: any;
  userObject: {};
  countTravalers: number;
  Special_Code_makkah: any;
  Special_Code_medinah: any;
  showSelectionPopUp: boolean;
  service: any;
  subPcc_makkah: any;
  subPcc_medinah: any;
  special_Code_makkah: any;
  special_Code_medinah: any;
  mint: Date;
  madeenaMin: Date;
  special_code_medinah: any;
  special_code_makkah: any;
  travellers: Travellers;
  showRoomAllocationPopup: boolean = false;
  dataForPopUp: LooseObject = {};
  noOfDaysInMakkah: number;
  noOfDaysInMadeenah: number;
  genHelper: GeneralHelper;
  vehicleTypeList: any;
  routetransport: any;
  vehicleCode: any;
  vehicleMaxCapacity: number;
  madeenaMaxdate: Date;
  madeenaMindate: any;
  vehicleCount: number = 1;
  countArray:number[] = [1];
  setBoolean:boolean = false;
  constructor(
    private commonApiService: SubAgentApiService,
    private subAgentApiService: SubAgentApiService,
    private appStore: AppStore,
    private renderer2: Renderer2,
    private router: Router,
    private notifyService: NotificationService,
    private helperService: HelperService,
    private _genHelper: GeneralHelper,
    private translate: TranslateService,
  ) {
    this.genHelper = _genHelper;
    this.renderer2.listen("window", "click", (e: Event) => {
      if (
        (this.menuPopupClass &&
          this.menuPopupClass.nativeElement.contains(e.target)) ||
        (this.menuIconClass &&
          this.menuIconClass.nativeElement.contains(e.target))
      ) {
        // Clicked inside plus preventing click on icon
      } else {
        // Clicked outside
        this.displayTabtravel = false;
      }
    });
    this.renderer2.listen("window", "click", (e: Event) => {
      if (
        (this.selectionPopUp &&
          this.selectionPopUp.nativeElement.contains(e.target)) ||
        (this.serviceDropDown &&
          this.serviceDropDown.nativeElement.contains(e.target))
      ) {
        // Clicked inside plus preventing click on icon
      } else {
        // Clicked outside
        this.showSelectionPopUp = false;
      }
    });
  }

  ngOnInit() {
    this.enableSearchButton = false;
    this.service = "All";
    this.activaleAllSearch = true;
    this.enableMakka = true;
    this.enableMadina = true;
    this.enableTransport = true;
    this.goButtonEnable = false;
    this.setDomDataOnRefresh()
    /**
   * This method for checking the availability of the access token
   * 
   */
    this.crTripHelper = new CreateTripHelper(this.helperService);
    this.genHelper.checkForAccessToken();
    this.appStore.adultCount = 1;
    this.appStore.childCount = 0;
    this.appStore.infantCount = 0;
    this.appStore.showHotelDetailsShimmer = false;

  }



  setDomDataOnRefresh() {
    var obj = JSON.parse(sessionStorage.getItem('userObject'))
    if (obj != null) {
      this.enableGoButton()
      this.onServiceItemChange(sessionStorage.getItem('service'))
      this.goButtonClicked()
      this.countTravalers = obj.travallersCount
      this.countAdult = obj.adults
      this.countChild = obj.children
      this.countInfant = obj.infant
      var ser = sessionStorage.getItem('service')
      if (ser == 'All') {
        this.makkaCheckInDate = obj.makkahCheckinDate,
          this.makkaCheckOutDate = obj.makkahCheckoutDate,
          this.madeenaCheckInDate = obj.madeenaCheckinDate,
          this.madeenaCheckOutDate = obj.madeenaCheckoutDate,
          this.transportStartDate = obj.transportStartDate
        this.noOfDaysInMakkah = obj.noOfDaysInMakkah
        this.noOfDaysInMadeenah = obj.noOfDaysInMadeenah
      }
      if (ser == 'Makkah Hotel') {
        this.service = 'Makkah Hotel'
        this.makkaCheckInDate = obj.makkahCheckinDate,
          this.makkaCheckOutDate = obj.makkahCheckoutDate,
          this.special_code_makkah = obj.specialCodeMakkah,
          this.subPcc_makkah = obj.subPcc_makkah,
          this.enableSearchButton = true;
      }
      if (ser == 'Medina Hotel') {
        this.service = 'Medina Hotel'
        this.madeenaCheckInDate = obj.madeenaCheckinDate,
          this.madeenaCheckOutDate = obj.madeenaCheckoutDate
        this.subPcc_medinah = obj.subPcc_medinah,
          this.special_code_medinah = obj.specialCodeMedinah,
          this.enableSearchButton = true;
      }
      if (ser == 'Transport') {
        this.service = 'Transport'
        this.transportStartDate = obj.transportStartDate
        this.vehicleCode = obj.vehicleType,
          this.vehicleMaxCapacity = obj.vehicleCapacity,
          this.routetransport = obj.transportRoute
        this.enableSearchButton = true;
      }
    }
  }

  ngAfterViewInit() {
    this.getTransportRoutes();
    this.getVehicleType();
    this.listRecentBooking();
  }

  /**
   * This method for fetching transport routes
   * 
   */
  getTransportRoutes() {
    this.commonApiService
      .getRoutes(sessionStorage.getItem("userLanguage"))
      .subscribe((data) => {
        this.routeList = data.routes;
      });
  }

  /**
    * This method for fetching vehicle type
    * 
    */
  getVehicleType() {
    this.commonApiService
      .getVehicles(sessionStorage.getItem("userLanguage"))
      .subscribe((data) => {
        this.vehicleTypeList = data.vehicle_types;
        this.processVehicleTypeListResponse();
      });
  }

  processVehicleTypeListResponse() {
    if (this.vehicleTypeList && this.vehicleTypeList.length > 0)
      this.vehicleTypeList.forEach(lst => {
        if (this.appStore.totalTravellers <= lst.max_capacity)
          lst.Status = true;
        else
          lst.Status = false;
      });
  }

  getVehicleList() {
    this.processVehicleTypeListResponse();
    if (this.vehicleTypeList && this.vehicleTypeList.length > 0)
      return this.vehicleTypeList.filter(lst => lst.Status && lst.Status == true);
  }

  /**
   * This method for showing traveller popup
   * 
   */
  showTravelersPopUp() {
    this.displayTabtravel = !this.displayTabtravel;
  }

  countTotalTravellers() {
    this.appStore.totalTravellers = this.appStore.adultCount + this.appStore.childCount + this.appStore.infantCount;
    this.countTravalers = this.countAdult+this.countChild+this.countInfant;
  }

  /**
   * This method for remove select vehicle type
   * 
   */
  removeVehicleType(){
    if(this.setBoolean){
      let elemet = <HTMLSelectElement>document.getElementById("umrahVehicle")
      elemet.selectedIndex = 0;
      this.vehicleCode = "";
      this.vehicleCount = 1;
      this.countArray = [1];
      this.setBoolean = false;
    }
    
  }

  /**
   * This method for adding adult count at the traveller popup
   * 
   */
  addAdult() {
    this.countAdult = this.countAdult + 1;
    this.appStore.adultCount = this.countAdult;
    this.countTotalTravellers();
    this.removeVehicleType();
  }

  /**
   * This method for decreasing adult count at the traveller popup
   * 
   */
  minusAdult() {
    if (this.countAdult > 1) {
      this.countAdult = this.countAdult - 1;
      this.appStore.adultCount = this.countAdult;
      this.countTotalTravellers();
      this.removeVehicleType();
    }
  }

  /**
   * This method for adding child count at the traveller popup
   * 
   */
  addChild() {
    this.countChild = this.countChild + 1;
    this.appStore.childCount = this.countChild;
    this.countTotalTravellers();
    this.removeVehicleType();
  }

  /**
   * This method for decreasing child count at the traveller popup
   * 
   */
  minusChild() {
    if (this.countChild > 0) {
      this.countChild = this.countChild - 1;
      this.appStore.childCount = this.countChild;
      this.countTotalTravellers();
      this.removeVehicleType();
    }
  }

  /**
     * This method for decreasing infant count at the traveller popup
     * 
     */
  minusInfant() {
    if (this.countInfant > 0) {
      this.countInfant = this.countInfant - 1;
      this.appStore.infantCount = this.countInfant;
      this.countTotalTravellers();
      this.removeVehicleType();
    }
  }

  /**
   * This method for adding infant count at the traveller popup
   * 
   */
  addInfant() {
    this.countInfant = this.countInfant + 1;
    this.appStore.infantCount = this.countInfant;
    this.countTotalTravellers();
    this.removeVehicleType();
  }

  /**
   * This method for enabling the go button
   * 
   */
  enableGoButton() {
    this.goButtonEnable = true;
  }

  /**
   * This method for setting traveller count and steps for the create trip page
   * 
   */
  goButtonClicked() {
    this.resetBooleans();
    (<HTMLElement>document.getElementById("dateEnterDiv")).style.maxHeight = "456px";
    this.appStore.adultCount = this.countAdult;
    this.appStore.childCount = this.countChild;
    this.appStore.infantCount = this.countInfant;
    this.countTravalers = this.countAdult + this.countChild + this.countInfant;
    this.appStore.totalTravellers = this.countTravalers;
    this.steps = [];
    this.showhidebttn = true;
    this.goButtonEnable = true;
    this.makkahmin = new Date(this.today.getTime() - 1000 * 60 * 60 * 24);
    this.madeenaMin = this.makkahmin;
    this.madeenmin = this.makkahmin;
    this.madeenamax = this.makkahmin;
    if (this.enableMakka) {
      this.activateMakkaSearch = true;
      this.steps.push("1");
      this.appStore.stepsArray = this.steps;
    }
    if (this.enableMadina) {
      this.activateMadeenaSearch = true;
      this.steps.push("2");
      this.appStore.stepsArray = this.steps;
    }
    if (this.enableTransport) {
      this.activateTransportSearch = true;
      this.steps.push("3");
      this.appStore.stepsArray = this.steps;
    }
    if (this.activaleAllSearch) {
      this.activateMadeenaSearch = true;
      this.activateMakkaSearch = true;
      this.activateTransportSearch = true;
      this.steps = ["1", "2", "3"];
      this.appStore.stepsArray = this.steps;
    }
    if (this.showhidebttn) {
      this.viewsearchbutton = true;
    }

    this.hidebttn = true;
  }

  /**
   * This method for hide all service items
   * 
   */
  hideAllItems() {
    this.activateMadeenaSearch = false;
    this.activateMakkaSearch = false;
    this.activateTransportSearch = false;
    this.makkaCheckInDate = null;
    this.makkaCheckOutDate = null;
    this.madeenaCheckInDate = null;
    this.madeenaCheckOutDate = null;
    this.transportStartDate = null;
    this.viewsearchbutton = false;
    this.activateMakkaPromotion = false;
    this.activateMadeenaPromotion = false;

    if (this.hidebttn) {
      this.selectedItems = [];
      this.enableMakka = false;
      this.enableMadina = false;
      this.enableTransport = false;
      this.activaleAllSearch = false;
      this.hidebttn = false;
      this.enableSearchButton = false;
      this.routeready = false;
    }
  }

  resetDatesForRefresh() {
    if (this.service == 'All') { this.clearPreviousDataForFreshSearch() }
    if (this.service == 'Makkah Hotel') { this.makkaCheckInDate = null; this.makkaCheckOutDate = null }
    if (this.service == 'Medina Hotel') { this.madeenaCheckInDate = null; this.madeenaCheckOutDate = null }
  }

  /**
   * This method for show serch button when makkah date input changes
   * 
   */
  dataChangedFromMakkaDates($event) {
    if (this.makkaCheckOutDate && this.makkaCheckInDate) {
      this.noOfDaysInMakkah = this.helperService.noOfDaysBetweenTwoDates(this.makkaCheckInDate, this.makkaCheckOutDate)
    }

    this.madeenaMin = this.makkaCheckOutDate;
    this.transportStartDate = this.makkaCheckInDate;
    if (!this.activaleAllSearch) {
      if (this.makkaCheckInDate != null && this.makkaCheckOutDate != null) {
        this.showSearchbttn();
      }
    }
    this.enableSearchButtonIfAllSelected();
    this.madeenmin = new Date(
      this.makkaCheckInDate.getTime() + 2 * (1000 * 60 * 60 * 24)
    );
    this.transportmin = this.makkaCheckInDate;
    this.transportmax = this.makkaCheckOutDate;
    this.activateMakkaPromotion = true;
    if (this.madeenaCheckInDate == null) {
      this.makkaOutDatePicker.nativeElement.click();
    }
  }

  /**
   * This method for show serch button when makkah date input changes
   * 
   */
  dataChangedFromMakkaOutDates($event) {
    this.setNoOfMakkaDays();
    this.madeenaMin = this.makkaCheckOutDate;
    this.madeenaCheckInDate = this.makkaCheckOutDate;
    this.madeenamax = new Date(
      this.madeenaCheckInDate.getTime() + 1000 * 60 * 60 * 24
    );
    if (!this.activaleAllSearch) {
      if (this.makkaCheckInDate != null && this.makkaCheckOutDate != null) {
        this.showSearchbttn();
      }
    }
    this.enableSearchButtonIfAllSelected();
    if (this.activateMadeenaSearch && this.madeenaCheckOutDate == null) {
      this.madeenaOutPicker.nativeElement.click();
    }
  }

  setNoOfMakkaDays() {
    if (this.makkaCheckOutDate && this.makkaCheckInDate) {
      this.noOfDaysInMakkah = this.helperService.noOfDaysBetweenTwoDates(this.makkaCheckInDate, this.makkaCheckOutDate)
      this.appStore.noOfDaysInMakkah = this.noOfDaysInMakkah;
    }
  }

  /**
   * This method for show serch button when transport input changes
   * 
   */
  dataChangedFromTransportDate($event) {
    this.enableSearchButtonIfAllSelected();
    if (!this.activaleAllSearch) {
      if (this.routeready) {
        this.showSearchbttn();
      }
    }
  }

  /**
  * This method for navigate to create trip page
  * 
  */
  searchButtonClicked() {
    this.clearSession()
    sessionStorage.setItem('service', this.service)
    this.setNoOfMadeenaDays();
    this.appStore.showRoomAlPopup = false;
    this.userObject = {
      travallersCount: this.countTravalers,
      adults: this.countAdult,
      children: this.countChild,
      infant: this.countInfant,
      transportStartDate: this.transportStartDate,
      transportRoute: this.routetransport,
      madeenaCheckinDate: this.madeenaCheckInDate,
      madeenaCheckoutDate: this.madeenaCheckOutDate,
      makkahCheckinDate: this.makkaCheckInDate,
      makkahCheckoutDate: this.makkaCheckOutDate,
      specialCodeMakkah: this.special_code_makkah,
      subPcc_makkah: this.subPcc_makkah,
      subPcc_medinah: this.subPcc_medinah,
      specialCodeMedinah: this.special_code_medinah,
      vehicleType: this.vehicleCode,
      vehicleCapacity: this.vehicleMaxCapacity,
      noOfDaysInMadeenah: this.noOfDaysInMadeenah,
      noOfDaysInMakkah: this.noOfDaysInMakkah,
      vehicleCounts:this.vehicleCount
    };
    CreateTripComponent.UserObjectData = this.userObject;
    sessionStorage.setItem("userObject", JSON.stringify(this.userObject));
    if (this.enableMadina || this.enableMakka || this.activaleAllSearch) {
      if (this.countAdult == 1 && this.countChild == 0 && this.countInfant == 0) {
        var arr: any[] = [
          {
            "children": 0,
            "child_ages": [],
            "seq_no": "0",
            "adults": 1
          }
        ]
        sessionStorage.setItem("roomData", JSON.stringify(arr));
        this.router.navigate(["subagent/createTrip"], {
          queryParams: { steps: this.steps.join(",") },
        });
      }
      if (this.countAdult > 1 || this.countChild > 0 || this.countInfant > 0) {
        this.appStore.showRoomAlPopup = true;
        this.showRoomAllocationPopup = this.appStore.showRoomAlPopup;
      }
    } else {
      this.router.navigate(["subagent/createTrip"], {
        queryParams: { steps: this.steps.join(",") },
      });
    }
    this.dataForPopUp.steps = this.steps;
    this.dataForPopUp.user = this.userObject;
  }

  clearSession() {
    sessionStorage.setItem('stage', '0');
    sessionStorage.removeItem('hotelDetailsFlag');
    sessionStorage.removeItem('mdSearchId');
    sessionStorage.removeItem('mkSearchId');
    sessionStorage.removeItem('custome_trip_booking_id');
    sessionStorage.removeItem('custom_trip_id');
    sessionStorage.removeItem('roomData');
    sessionStorage.removeItem('userObject');
    sessionStorage.removeItem('hotelData');
    sessionStorage.removeItem('hotelInfo');
    sessionStorage.removeItem('steps');
    sessionStorage.removeItem('bookingData');
  }

  /**
  * This method for show serch button when route input changes
  * 
  */
  onRouteSelect(item: any) {
    this.routetransport = item;
    if (item != null) {
      this.routeready = true;
    }
    if (!this.activaleAllSearch) {
      this.showSearchbttn();
    }
    this.enableSearchButtonIfAllSelected();
  }

  /**
   * This method for show/hide search button
   * 
   */
  onVehicleSelect(id: any) {
    if (id != null && this.vehicleTypeList && this.vehicleTypeList.length > 0) {
      this.vehicleTypeList.forEach(element => {
        if (element.id == id) {
          this.vehicleCode = element.code;
          this.vehicleMaxCapacity = element.max_capacity;
        }
      });
    }
    this.setBoolean = true;
    var totalTra = this.countAdult+this.countChild;
    var count:number = totalTra / this.vehicleMaxCapacity;
    count = Math.ceil(count);
    if(count <= this.countAdult){
      this.countArray = Array(this.countAdult - count + 1).fill(count + 1).map((_, idx) => count + idx)
      this.vehicleCount = this.countArray[0];
    }else{
      this.notifyService.showWarning("passenger limit exceeded please select heigher vehicle");
      this.removeVehicleType();
    }
    
  }

  vehicleCountSelect(value){
    this.vehicleCount = value;
  }

  /**
   * This method for show/hide search button
   * 
   */
  showSearchbttn() {
    if (this.activaleAllSearch) {
      if (
        this.makkaCheckInDate &&
        this.makkaCheckOutDate &&
        this.madeenaCheckInDate &&
        this.madeenaCheckOutDate &&
        this.activaleAllSearch &&
        this.routeready
      ) {
        this.enableSearchButton = true;
        this.roomaloctionpopup = true;
        this.activateMakkaPromotion = true;
        this.activateMadeenaPromotion = true;
        return;
      }
    }
    if (this.enableMakka && this.enableMadina) {
      if (
        this.makkaCheckInDate &&
        this.makkaCheckOutDate &&
        this.madeenaCheckInDate &&
        this.madeenaCheckOutDate
      ) {
        this.enableSearchButton = true;
        this.roomaloctionpopup = true;
        this.activateMakkaPromotion = true;
        this.activateMadeenaPromotion = true;
        return;
      }
    }

    if (this.enableMakka && this.enableTransport) {
      if (
        this.makkaCheckInDate &&
        this.makkaCheckOutDate &&
        this.enableTransport &&
        this.routeready
      ) {
        this.enableSearchButton = true;
        this.roomaloctionpopup = true;
        this.activateMakkaPromotion = true;
        return;
      }
    }

    if (this.enableMakka) {
      if (this.makkaCheckInDate && this.makkaCheckOutDate) {
        this.enableSearchButton = true;
        this.roomaloctionpopup = true;
        this.activateMakkaPromotion = true;
        return;
      }
    }

    if (this.enableMadina) {
      if (this.madeenaCheckInDate && this.madeenaCheckOutDate) {
        this.enableSearchButton = true;
        this.roomaloctionpopup = true;
        this.activateMadeenaPromotion = true;
        return;
      }
    }

    if (this.enableTransport) {
      if (this.transportStartDate && this.routeready) {
        this.enableSearchButton = true;
        return;
      }
    }
  }

  ngAfterViewChecked() {
    this.translate.use((sessionStorage.getItem('userLanguage') === 'ar-AE') ? "ar-AE" : "en-US");
    if (sessionStorage.getItem('userLanguage') == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
  }

  showSelectionPopup() {
    this.showSelectionPopUp = !this.showSelectionPopUp;
  }

  /**
  * This method for reset selected values if madeena start date changes
  * 
  */
  dataChangedFromMadeenaDates(position: string) {
    this.madeenaMindate = this.madeenaCheckInDate;
    this.madeenaMaxdate = this.madeenaCheckOutDate;
    this.setNoOfMadeenaDays()
    this.madeenamax = new Date(
      this.madeenaCheckInDate.getTime() + 1000 * 60 * 60 * 24
    );
    this.enableSearchButtonIfAllSelected();
    if (!this.activaleAllSearch) {
      if ((this.madeenaCheckInDate && this.madeenaCheckOutDate) != null) {
        this.showSearchbttn();
      }
    }
    this.activateMadeenaPromotion = true;
    if (position == "in") {
      if (this.madeenaCheckOutDate == null) {
        this.madeenaOutPicker.nativeElement.click();
      }
    }
  }

  /**
   * This method for calculate madeena days
   * 
   */
  setNoOfMadeenaDays() {
    if (this.madeenaCheckInDate && this.madeenaCheckOutDate) {
      this.noOfDaysInMadeenah = this.helperService.noOfDaysBetweenTwoDates(this.madeenaCheckInDate, this.madeenaCheckOutDate)
      this.appStore.noOfDaysInMadeena = this.noOfDaysInMadeenah;
    }
  }

  /**
  * This method for enable the search button if all input selected
  * 
  */
  enableSearchButtonIfAllSelected() {
    if (this.activaleAllSearch) {
      if (
        this.madeenaCheckInDate &&
        this.madeenaCheckOutDate &&
        this.makkaCheckInDate &&
        this.makkaCheckOutDate &&
        this.transportStartDate &&
        this.routeready
      ) {
        this.showSearchbttn();
      }
    }
  }

  /**
   * This method for resetting selected values if service input changes
   * 
   */

  onServiceItemChange(value) {
    this.service = value;
    sessionStorage.setItem('service', this.service)
    if (value == "All") {
      this.activaleAllSearch = true;
      this.enableMakka = true;
      this.enableMadina = true;
      this.enableTransport = true;
      this.enableSearchButton = false;
      this.goButtonEnable = false;
    }
    if (value == "Makkah Hotel") {
      this.enableMakka = true;
      this.enableMadina = false;
      this.enableTransport = false;
      this.enableSearchButton = false;
      this.goButtonEnable = false;
    }
    if (value == "Medina Hotel") {
      this.enableMadina = true;
      this.enableMakka = false;
      this.enableTransport = false;
      this.enableSearchButton = false;
      this.goButtonEnable = false;
    }
    if (value == "Transport") {
      this.enableTransport = true;
      this.enableMakka = false;
      this.enableMadina = false;
      this.enableSearchButton = false;
      this.goButtonEnable = false;
    }
  }

  /**
   * This method for clearing booleans
   */

  resetBooleans() {
    if (this.activateMakkaSearch) {
      this.activateMakkaSearch = false;
    }
    if (this.activaleAllSearch) {
      this.activaleAllSearch = false;
    }
    if (this.activateTransportSearch) {
      this.activateTransportSearch = false;
    }
    if (this.activateMadeenaSearch) {
      this.activateMadeenaSearch = false;
    }
  }

  /**
   * This method for clearing prvious data
   */

  clearPreviousDataForFreshSearch() {
    this.makkaCheckInDate = null
    this.makkaCheckOutDate = null;
    this.subPcc_makkah = null;
    this.special_Code_makkah = null;
    this.madeenaCheckInDate = null;
    this.madeenaCheckOutDate = null;
    this.subPcc_medinah = null;
    this.special_Code_medinah = null;
    this.transportStartDate = null;
    this.appStore.stepperIndex = 0;
    this.appStore.noOfDaysInMadeena = 0;
    this.appStore.noOfDaysInMakkah = 0;
    this.noOfDaysInMakkah = 0;
    this.noOfDaysInMadeenah = 0;
    this.appStore.isAvailabilityFails = false;
  }

  /**
   * this method for listing recent booking
   */

  listRecentBooking() {
    this.subAgentApiService.getPaginatedhistoryList(1,sessionStorage.getItem('userLanguage')).subscribe((data) => {
      this.historyList = data.results;
    })
  }

  /**
  * this method for checking model status
  */
  ngDoCheck() {
    if (this.appStore.showRoomAlPopup) {
      this.showRoomAllocationPopup = true;
    } else if (!this.appStore.showRoomAlPopup) {
      this.showRoomAllocationPopup = false;
    }
  }

  /**
  * navigate history page 
  */
  navigateHostory() {
    this.router.navigate(["subagent/history"]);
  }

  
}