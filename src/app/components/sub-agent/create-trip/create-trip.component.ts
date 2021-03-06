import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewChecked, ElementRef, Renderer2 } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, } from "@angular/forms";
import { MAT_STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { Room } from "../../../models/visaTypes";
import { MatStepper } from "@angular/material/stepper";
import { Router, ActivatedRoute } from "@angular/router";
import { AppStore } from '../../../stores/app.store';
import { NgxSpinnerService } from "ngx-spinner";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { Transportation } from "../../../models/vehicle_transport"
import { DatePipe } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { NotificationService } from "../../../common/services/notification.service";
import { HttpClient } from '@angular/common/http';
import { DoCheck } from "@angular/core";
import { HelperService } from "src/app/common/services/helper-service";
import { MakkaHotelComponent } from "./components/makka-hotel/makka-hotel.component";
import { CreateTripAdapter } from "src/app/adapters/sub-agent/create-trip-adapter";
import { CreateTripHelper } from "src/app/helpers/sub-agent/create-trip-helpers";
import { GeneralHelper } from "src/app/helpers/General/general-helpers";
import { SubAgentApiService } from "src/app/Services/sub-agent-api-services";
import { CommonApiService } from "src/app/Services/common-api-services";
import { environment } from "src/environments/environment";
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { SubAgentGeneralHelper } from 'src/app/helpers/sub-agent/general-helper';

@Component({
  selector: "app-create-trip",
  templateUrl: "./create-trip.component.html",
  styleUrls: ["./create-trip.component.scss"],
  providers: [
    {
      provide: MAT_STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    }
  ],
  encapsulation: ViewEncapsulation.None,
})

export class CreateTripComponent implements OnInit, AfterViewChecked, DoCheck {
  static termsCondtion: boolean;
  policy:boolean = false;
  countryCode: any = environment.countryCodeCommen;
  showtransportsearch: boolean = true;
  static UserObjectData: any;
  static RoomData: any;
  userDetails: any;
  roomDetails: any;
  roomdetails: boolean = false;
  paymentForm: FormGroup;
  step = 0;
  imageshow: number = 0;
  time = { hour: 13, minute: 30 };
  meridian = true;
  tripData: any;
  selectedTransport: any;
  makkatransport: boolean = false;
  grountService: boolean = false;
  totalRoomPrice: number = 0;
  selectedTravellersCount: number = 0;
  selectedRoomCount: number = 0;
  tripMakkahHotel: any;
  tripMakkahHotelrating: any;
  tripService: any;
  tripVisaData: any;
  tripMadeenaHotel: any;
  tripTransport: any;
  selectedRoomGroups: any[];
  isGrouped: any;
  nationality: any = environment.selectedCountryCommen;
  country_of_residence: any = environment.selectedCountryCommen;
  noOfDaysInMadeena: number = 0;
  makkahticked: boolean = false;
  madeendetailshow: boolean = false;
  searchTransport: boolean;
  mdate: any;
  stage
  searchServiceButtonActive: boolean;
  bookingId: any;
  setDataForAddServiceCountPopUP: any = {};
  addSrvCount: number = 0;
  totalTravellers: any;
  acc_no: any;
  accNo: any;
  authCode: any;
  phoneCode: any;
  reference_no: any;
  makka: boolean = true;
  medinah: boolean = true;
  trnsprt: boolean = true;
  city: string = "";
  hotelsList: any;
  makkahCheckInDate: any;
  makkahCheckOutDate: any;
  madeenaCheckInDate: any;
  madeenaCheckOutDate: any;
  transportStartDate: any;
  companylistall: any;
  isTransportResponseEmpty: boolean = false;
  cityFirst: string = "";
  citySecond: string = "";
  transportFailed: string = "";
  bookContinue: boolean;
  minpassportExpDate: any;
  showIbanPopup: boolean = false;
  disablePayBttn: boolean = true;
  transportCount: number = 0;
  modifySearchTransportPopup: boolean;
  vehicleTypes: any;
  ibanValidation: boolean;
  ibanMessge: string;
  toggleMeridian() {
    this.meridian = !this.meridian;
  }
  showElement: boolean = true;
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + "k";
    }
    return value;
  }
  private createTripAdapter: CreateTripAdapter = new CreateTripAdapter(this.helperService, this.appStore);
  returnDate: any;
  private createTripHelper: CreateTripHelper = new CreateTripHelper(this.helperService,this.translate);
  private helper: HelperService = new HelperService(null, null);
  retDate: any;
  routeId: any;
  categoryId: any;
  hotelMakkahFare: any;
  hotelMadeenaFare: any;
  transportFare: any;
  additionlserviceId: any;
  additionl_serviceId: any;
  vehicleId: any;
  vehicleMax: any;
  nationalityCode: any;
  diffDays: any;
  searchTransportId: any;
  selectedCurrency: any;
  selectedLanguage: any;
  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};
  vehicleTypeList = [];
  vehicleTypeItems = [];
  routeList = [];
  companyList = [];
  countryList = [];
  nationalityList = [];
  categoryIds = [];
  selectedHotel: any;
  selectedCountry: any;
  selectedNationality: any;
  transportList: Transportation[] = [];
  transportListData: Transportation[] = [];
  toggle = [];
  disableBtn: boolean = false;
  count: number = 1;
  showAddButton: boolean = true;
  showMadenaTransportVehicleList: boolean = false;
  displayTab: boolean;
  changeButton: boolean;
  submitted = false;
  vehicleCount: number;
  today = new Date().toJSON().split("T")[0];
  roomCount: number = 0;
  countadult: number = 1;
  countchild: number = 0;
  countinfa: number = 0;
  displayTabtravel: boolean;
  @ViewChild("menuIconClass", { read: ElementRef, static: false })
  menuIconClass: ElementRef;
  @ViewChild("menuPopupClass", { read: ElementRef, static: false })
  menuPopupClass: ElementRef;
  rooms: any[] = [];
  phoneCodeList: any;
  @ViewChild("menuIcon", { read: ElementRef, static: false })
  menuIcon: ElementRef;
  @ViewChild("menuPopup", { read: ElementRef, static: false })
  menuPopup: ElementRef;
  @ViewChild("menuIconTo", { read: ElementRef, static: false })
  menuIconTo: ElementRef;
  @ViewChild("menuPopupTo", { read: ElementRef, static: false })
  menuPopupTo: ElementRef;
  tripId: any;
  travellersCount: number;
  infantCount: number = 0;
  adultCount: number = 1;
  childCount: number = 0;
  steps = [];
  timeLeft: number = 30;
  interval;
  showShimmer: boolean;
  noOfDaysInMakkah: number;
  generalHelper: GeneralHelper;
  commonApiService: CommonApiService;
  travellersForm: FormGroup;
  @ViewChild('phoneInput', { read: ElementRef, static: false })
  phoneInput: ElementRef;
  showTransportShimmer:boolean = true;
  freeArray = ["1","2","3","4"];
  countArray:number[] = [1];
  private subagentHelper: SubAgentGeneralHelper = new SubAgentGeneralHelper(null);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer2: Renderer2,
    private common: SubAgentApiService,
    private spinner: NgxSpinnerService,
    private datepipe: DatePipe,
    private http: HttpClient,
    private appStore: AppStore,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private notifyService: NotificationService,
    private route: ActivatedRoute,
    private helperService: HelperService,
    private genHelper: GeneralHelper,
    private _commonApiService: CommonApiService,
    private translate: TranslateService
  ) {
    this.generalHelper = genHelper;
    this.commonApiService = _commonApiService;
    this.route.queryParams.subscribe(params => {
      this.steps = ((params.steps || "1,2,3").split(","));
    });
    this.renderer2.listen("window", "click", (e: Event) => {
      if (
        (this.menuPopup && this.menuPopup.nativeElement.contains(e.target)) ||
        (this.menuIcon && this.menuIcon.nativeElement.contains(e.target))
      ) {
        // Clicked inside plus preventing click on icon
      } else {
        // Clicked  outside
      }
    });
    this.renderer2.listen("window", "click", (e: Event) => {
      if (
        (this.menuPopupTo &&
          this.menuPopupTo.nativeElement.contains(e.target)) ||
        (this.menuIconTo && this.menuIconTo.nativeElement.contains(e.target))
      ) {
        // Clicked inside plus preventing click on icon
      } else {
        // Clicked outside
      }
    });
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
    this.paymentForm = this.formBuilder.group({
      roomAdultsArray: this.formBuilder.array([]),
      roomChildrenArray: this.formBuilder.array([])
    });
  }

  @ViewChild("stepper", { static: true })
  stepper: MatStepper;
  move(index: number) { this.stepper.selectedIndex = index; }
  @ViewChild(MakkaHotelComponent, { static: false }) child: MakkaHotelComponent;

  userFilter: any = { name: '' };

  /**
   * Method to minify makka card at payment review page
   */
  toggleMakkaUp() {
    (<HTMLElement>document.getElementById("makka")).style.display = "none";
    this.makka = !this.makka;
  }

  /**
   * Method to expand makka card at payment review page
   */
  toggleMakkaDown() {
    (<HTMLElement>document.getElementById("makka")).style.display = "block";
    this.makka = !this.makka;
  }

  /**
  * Method to expand medinah card at payment review page
  */
  toggleMedinahDown() {
    (<HTMLElement>document.getElementById("medinah")).style.display = "block";
    this.medinah = !this.medinah;
  }

  /**
  * Method to minify medinah card at payment review page
  */
  toggleMedinahUp() {
    (<HTMLElement>document.getElementById("medinah")).style.display = "none";
    this.medinah = !this.medinah;
  }

  /**
  * Method to minify transport card at payment review page
  */
  toggleTransportUp() {
    (<HTMLElement>document.getElementById("transport")).style.display = "none";
    (<HTMLElement>document.getElementById("transportRate")).style.display = "none";
    (<HTMLElement>document.getElementById("transportPolicy")).style.display = "none";
    (<HTMLElement>document.getElementById("trnsptNormal")).style.display = "none";
    this.trnsprt = !this.trnsprt;
  }

  /**
  * Method to expand transport card at payment review page
  */
  toggleTransportDown() {
    (<HTMLElement>document.getElementById("transport")).style.display = "block";
    (<HTMLElement>document.getElementById("transportPolicy")).style.display = "block";
    (<HTMLElement>document.getElementById("transportRate")).style.display = "block";
    (<HTMLElement>document.getElementById("trnsptNormal")).style.display = "block";
    this.trnsprt = !this.trnsprt;
  }

  ngAfterViewChecked() {
    this.translate.use((sessionStorage.getItem('userLanguage') === 'ar-AE') ? "ar-AE" : "en-US");
    if (sessionStorage.getItem('userLanguage') == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }

    this.selectedCurrency = this.appStore.currencyCode;
    this.selectedLanguage = this.appStore.langCode;
    this.translate.use((sessionStorage.getItem('userLanguage') === 'ar-AE') ? "ar-AE" : "en-US");
    if (sessionStorage.getItem('userLanguage') == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
    if (this.selectedCountry) {
      let selectedResidenceText = (document.getElementById("cor").getElementsByClassName("mat-select-value-text")[0].getElementsByClassName("ng-star-inserted")[0]).innerHTML;
      this.phoneCode = this.phoneCodeList.filter(x => x.item_text == selectedResidenceText)[0].item_id;
    }

  }

  modfyTransportSearch(){
    this.modifySearchTransportPopup=false;
    this.transportSearch();
  }

  transportSearchPop(){
    this.modifySearchTransportPopup = true;
  }
  /**
 * Method to fetch transport list
 */
  transportSearch() {
    this.transportSearchDatas();
    var obj = JSON.parse(sessionStorage.getItem("userObject"));
    this.travellersCount = obj.adults + obj.children;
    const date = this.helperService.dateFormaterMdy(this.userDetails.transportStartDate);
    const filrerData = {
      "search_id": this.searchTransportId,
      "lang": sessionStorage.getItem('userLanguage'),
      "route": this.routeId,
      "vehicle_type": this.vehicleId,
      "category": this.categoryId,
      "no_of_travellers": this.travellersCount,
      "quantity": this.vehicleCount,
      "travel_date": date.split("/")[2] + "-" + date.split("/")[0] + "-" + date.split("/")[1]
    }
    this.common.searchTransport(filrerData).subscribe((data) => {
      this.searchTransportId = data.search_id;
      this.steps = JSON.parse(sessionStorage.getItem('steps'))
      if (this.steps && this.steps.length > 2) { this.stage = 2 }
      sessionStorage.setItem("transportSearchId", data.search_id);
      this.callTransportList()
    }
    );
  }

  callTransportList(){
    this.common.searchTransportList(this.searchTransportId, this.selectedCurrency,sessionStorage.getItem('userLanguage')).subscribe((response) => {
      if ((response && response.transportations && response.transportations.length == 0) || (response && response.transportations && response.transportations.filter(x => x.vehicle_types.length > 0) == 0 || response && response.status_code == 202)) {
        this.isTransportResponseEmpty = true;
        if(this.transportCount < 5){ 
          this.setTimerForTransportSearch()
          this.transportCount = this.transportCount + 1
        }else{
          Swal.fire({
            text: this.translate.instant('Sorry,we could not  find transport service from Maqam GDS'),
            icon: "warning",
            confirmButtonText: this.translate.instant('Modify Search'),
            showCloseButton: true,
          }).then((willDelete) => {
            if(willDelete.isConfirmed){
              this.modifySearchTransportPopup = true;
            }
        });
        }
      } else {
        this.transportList = response.transportations.sort((n1, n2) => n1.vehicle_types.map(x => x.categories[0].fare_summary[2].amount) - n2.vehicle_types.map(x => x.categories[0].fare_summary[2].amount));
        this.transportList.forEach((vt)=>{vt.vehicle_types.forEach((ct)=>{ct.categories.forEach((fs)=>{fs.fare_summary.forEach((amt)=>{if(amt.is_total) {amt.display_price = amt.amount;}})})})})
        console.log(this.transportList)
        this.transportListData = response.transportations.sort((n1, n2) => n1.vehicle_types.map(x => x.categories[0].fare_summary[2].amount) - n2.vehicle_types.map(x => x.categories[0].fare_summary[2].amount));
      }
      for (let i = 0; i < this.transportList.length; i++) {
        for (let j = 0; j < this.transportList[i].vehicle_types.length; j++) {
          this.transportList[i].vehicle_types[j].toggle = false;
          this.transportList[i].vehicle_types[j].count = 1;
          this.transportList[i].totalCount = 1;
          this.transportList[i].vehicle_types[j].transport_amount = 0;
          this.transportList[i].vehicle_types[j].vehicleCapacityCount = Math.ceil((this.countadult + this.countchild) / this.transportList[i].vehicle_types[j].categories[0].capacity)
          this.transportList[i].vehicle_types[j].vehiclePaxCount = Math.ceil((this.countadult + this.countchild) / (Math.ceil((this.countadult + this.countchild) / this.transportList[i].vehicle_types[j].categories[0].capacity)))
        }
      }
      for (let i = 0; i < this.transportList.length; i++) {
        for (let j = 0; j < this.transportList[i].vehicle_types.length; j++) {
          const totalCount = this.countadult + this.countchild + this.countinfa;
          const vehicle = this.transportList[i].vehicle_types[j].vehicle_type_code[0];
          this.transportList[i].vehicle_types[j].toggle_vehicle = false;
          this.transportList[i].totalCount = 1;
        }
      }
    },(error)=>{
      Swal.fire({
        text: this.translate.instant("Sorry,we could not  find transport service from Maqam GDS"),
        icon: "warning",
        confirmButtonText: this.translate.instant('Back To Search'),
      }).then((willDelete) => {
        if(willDelete.value){
          this.router.navigate(['subagent/home']);  
        }
    });
    });
  }

  setTimerForTransportSearch() {
    setTimeout(()=>{
     this.callTransportList()
    }, 5000);
   }


  /**
 * Method to set main traveller
 */
  mainTraveller(i) {
    this.rooms.forEach(value => {
      for (let j = 0; j < value.adults; j++) {
        this.mainTraveller[j] = false;
      }
    });
    this.mainTraveller[i] = true;
  }

  /**
 * Method to fetch saved itinerary
 */
  getTripData() {
    // this.setPaymentPageAfterItineraryModified();
    this.common.getTrip(sessionStorage.getItem('custom_trip_id'),sessionStorage.getItem('userLanguage')).subscribe((data) => {
      this.tripData = data;
      if (this.tripData) {
        if (this.tripData.makkah_trip_hotel) {
          var roomCount = 0;
          this.tripMakkahHotel = this.tripData.makkah_trip_hotel;
          this.tripMakkahHotel.room_variations.forEach((data)=>{
               roomCount = roomCount + data.total_rooms
          })
          this.tripMakkahHotel.total_room_count = roomCount
          this.hotelMakkahFare = this.tripData.makkah_trip_hotel.room_variations.map(x => x.room.amount).reduce((a, b) => a + b, 0);
          this.tripMakkahHotelrating = this.tripData.makkah_trip_hotel.hotel.user_review / 2;
        }
        if (this.tripData.medinah_trip_hotel) {
          var roomCount = 0;
          this.tripMadeenaHotel = this.tripData.medinah_trip_hotel;
          this.tripMadeenaHotel.room_variations.forEach((data)=>{
            roomCount = roomCount + data.total_rooms
       })
       this.tripMadeenaHotel.total_room_count = roomCount
          this.hotelMadeenaFare = this.tripData.medinah_trip_hotel.room_variations.map(x => x.room.amount).reduce((a, b) => a + b, 0);
        }
        if (this.tripData.trip_transportation) {
          this.tripTransport = this.tripData.trip_transportation;
          this.transportFare = this.tripData.trip_transportation.trip_vehicles[0].price_per_vehicle;
          this.selectedTransport = this.tripData.trip_transportation.selected_transportation;
        }

        if (this.tripData.trip_visa) {
          this.tripVisaData = this.tripData.trip_visa;
        }
      }
    });
  }

  setPaymentPageAfterItineraryModified() {
    this.cityFirst = "";
    this.citySecond = "";
    this.transportFailed = "";
    //(<HTMLInputElement>document.getElementById("payBtn")).style.display = "none";
    (<HTMLInputElement>document.getElementById("continueBooking")).style.display = "block";
  }

  get g() { return this.travellersForm.controls; }

  //Mobile Validation

  onCountryChange(event) {
    this.validateNumber();
    this.countryCode = event.dialCode
  }

  getNumberPlaceHolderLength(): number {
    try {
      let phoneInput: HTMLElement = document.getElementById("phoneInput");
      if (phoneInput)
        return phoneInput.attributes.getNamedItem("placeholder").value.replace(/[^0-9a-zA-Z]/g, '').length;
    } catch (exception) {
    }
  }


  inputValidation(event?) {

    let defaultCountryCode: string = "+91"
    try {
      let mobileNumber: string = '';
      if (event)
        mobileNumber = event.srcElement.value;
      else
        mobileNumber = this.travellersForm.controls['phone_number'].value;
      defaultCountryCode = defaultCountryCode.replace(/[^0-9]/g, '');
      if (this.getNumberPlaceHolderLength() && mobileNumber.length >= this.getNumberPlaceHolderLength() + defaultCountryCode.length &&
        mobileNumber.startsWith(defaultCountryCode)) {
        mobileNumber = mobileNumber.slice(defaultCountryCode.length);
      }
      else if (mobileNumber.startsWith('0'))
        mobileNumber = mobileNumber.slice(1);

      this.travellersForm.controls['phone_number'].setValue(mobileNumber);
      this.validateNumber();
    } catch (exception) {
      // this.errorLogger.Log('B2CPORTAL', 'ERROR', 'FLT', "ContactInformationComponent: inputValidation", exception.stack.toLocaleString());
    }
  }

  validateNumber() {
    try {
      if (this.travellersForm && this.travellersForm.controls['phone_number'].value) {
        let mobileNumber = this.travellersForm.controls['phone_number'].value.trim();
        if (this.getNumberPlaceHolderLength() && this.getNumberPlaceHolderLength() != mobileNumber.length) {
          this.travellersForm.controls['phone_number'].setErrors({ 'pattern': true });
          this.travellersForm.controls['phone_number'].markAsTouched();
        } else if (/\s/g.test(mobileNumber)) {
          this.travellersForm.controls['phone_number'].setErrors({ 'pattern': true });
          this.travellersForm.controls['phone_number'].markAsTouched();
        } else {
          this.travellersForm.controls['phone_number'].setErrors(null);
          this.travellersForm.controls['phone_number'].setValue(mobileNumber)
        }
      }
    } catch (exception) {
      alert('enter mobile number')
    }
  }
  //end of mobile validation //
  /**
   * Method to book trip and check availability
   */
  bookTrip() {
    this.submitted = true;
    if (this.travellersForm.invalid) { return }
    this.bookContinue = true;
    this.disablePayBttn = true;
    this.travellersForm.disable()
    let roomRef = 0 + "_" + this.rooms[0].adults + "ADT_" + this.rooms[0].children + "CHD_" + this.rooms[0].child_ages.sort().join("_") + "";
    let travellers = [];
    travellers.push(this.createTripAdapter.createTripBookingRequest(this.travellersForm, this.countryCode, roomRef, this.nationality, this.country_of_residence))
    const body = { travellers }
    sessionStorage.setItem('bookingData', JSON.stringify(body))
    this.common.bookTrip(body, sessionStorage.getItem('custom_trip_id'),sessionStorage.getItem('userLanguage')).subscribe((data) => {
      this.bookingId = data.id;
      sessionStorage.setItem("reference_no", data.reference_no)
      this.common.checkAvailability(data.id).subscribe((response) => {
        this.appStore.isAvailabilityFails = false;
        if (response.makkah_trip_hotel) {
          this.cityFirst = "";
          if (response.makkah_trip_hotel.success == false) {
            this.cityFirst = "makkah";
            this.appStore.isAvailabilityFails = true;
            this.bookContinue = false;
            this.disablePayBttn = false;
            this.travellersForm.enable()
          }
        }
        if (response.medinah_trip_hotel) {
          this.citySecond = "";
          if (response.medinah_trip_hotel.success == false) {
            this.citySecond = "madinah";
            this.appStore.isAvailabilityFails = true;
            this.bookContinue = false;
            this.disablePayBttn = false;
            this.travellersForm.enable()
          }
        }
        if (response.trip_transportation) {
          this.transportFailed = "";
          if (response.trip_transportation.success == false) {
            this.transportFailed = "transportFailed";
            this.appStore.isAvailabilityFails = true;
            this.bookContinue = false;
            this.disablePayBttn = false;
            this.travellersForm.enable()
          }
        }
        if ((response.makkah_trip_hotel && response.makkah_trip_hotel.success == false) ||
          (response.medinah_trip_hotel && response.medinah_trip_hotel.success == false) ||
          (response.trip_transportation && response.trip_transportation.success == false) ||
          response.refetch_trip == true) {
          //(<HTMLInputElement>document.getElementById("payBtn")).style.display = "none";
          (<HTMLInputElement>document.getElementById("continueBooking")).style.display = "block";
        }
        else {
          this.showIbanPopup = true;
          this.setTimerForIbanPopup();
          //(<HTMLInputElement>document.getElementById("payBtn")).style.display = "block";
          (<HTMLInputElement>document.getElementById("continueBooking")).style.display = "block";
        }
        
        if (response.refetch_trip == true) {
          if(response.makkah_trip_hotel){
            this.createTripHelper.showSweetAlert(response.makkah_trip_hotel.message, "warning", 'OK')
          }
          if(response.medinah_trip_hotel){
            this.createTripHelper.showSweetAlert(response.medinah_trip_hotel.message, "warning", 'OK')
          }
          if(response.trip_transportation){
            this.createTripHelper.showSweetAlert(response.trip_transportation.message, "warning", 'OK')
          }
          this.getTripData();
          this.bookContinue = false;
          this.disablePayBttn = false;
          this.travellersForm.enable()
        }
        this.bookContinue = false;
      });
    });
  }


  /**
   * Method to close payment popup after 30 sec
   */
  setTimerForIbanPopup() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
      else if (this.timeLeft == 0) {
        if((<HTMLInputElement>document.getElementById("ibanClose")) != null) {
          (<HTMLInputElement>document.getElementById("ibanClose")).click();
        }
        this.timeLeft = 30;
        clearInterval(this.interval);
      }
    }, 1000)
  }

  /**
  * Method to navigate payment success page
  */
  onSubmitButtonClicked() {
    this.accNo = (<HTMLInputElement>document.getElementById("acc_no")).value;
    this.authCode = (<HTMLInputElement>document.getElementById("auth_code")).value;
    var test = this.subagentHelper.ibanTextValidation(this.accNo)
    if(test != 'true'){
      this.ibanValidation = true;
      this.ibanMessge = test;
      return;
    }
    var w = {
      "booking_id": this.bookingId,
      "account_no": this.accNo,
      "auth_code": this.authCode,
    }
    this.spinner.show();
    console.log(w);
    
    if (this.accNo && this.authCode) {
      this.common.bookingPayment(w).subscribe((response) => {
        this.spinner.hide();
        if (response.status == "Success") {
          (<HTMLInputElement>document.getElementById("ibanClose")).click();
          this.router.navigate(['subagent/payment/' + this.bookingId + '/success']);
          sessionStorage.setItem("timerStatus","start");
        }
        else {
          this.createTripHelper.titleSweetAlert("error",'payment failed', "please try again","ok");
        }
      }, error => {
        this.spinner.hide();
        this.createTripHelper.showSweetAlert('Account Does Not Exist', "error", 'ok');
      });
    } else {
    }
  }

  @ViewChild("multiSelect", { static: true }) multiSelect;
  public form: FormGroup;
  public loadContent: boolean = false;
  public data = [];

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  ngOnInit() {
    window.scroll(0,0);
    this.showShimmer = true;
    this.calculatePed();
    sessionStorage.setItem('steps', JSON.stringify(this.steps))
    this.stage = sessionStorage.getItem('stage')
    this.moveStep()
    this.generalHelper.checkForAccessToken();
    if (!this.appStore.showShimmer) {
      this.appStore.showShimmer = true, this.showShimmer = true
    }
    this.setUserDetails()
    this.travellersCount = JSON.parse(sessionStorage.getItem("userObject")).travallersCount;
    this.rooms = JSON.parse(sessionStorage.getItem('roomData'))
    this.selectedCurrency = "SAR";
    this.multiSelectDropDownSettings()
    this.setForm();
    this.callCorrespongingSteppers();
    this.setdataForUserDetailsAtLastPage();
    this.fetchNessoryApisForPaymentPage();
    this.travellersForm = this.createTripAdapter.createTripBookingForm();
    if (sessionStorage.getItem('bookingData') != null) {
      let data = JSON.parse(sessionStorage.getItem('bookingData')).travellers[0];
      this.travellersForm.controls.first_name.setValue(data.first_name);
      this.travellersForm.controls.last_name.setValue(data.last_name)
      this.travellersForm.controls.gender.setValue(data.gender)
      this.travellersForm.controls.dob.setValue(data.dob)
      this.travellersForm.controls.passport_no.setValue(data.passport_no)
      this.travellersForm.controls.passport_expiry_date.setValue(data.passport_expiry_date)
      this.nationality = data.nationality;
      this.country_of_residence = data.country_of_residence;
      this.countryCode = data.contactinfo.phn_country_code;
      this.travellersForm.controls.phone_number.setValue(data.contactinfo.phone_number)
      this.travellersForm.controls.address.setValue(data.contactinfo.address)
      this.travellersForm.controls.email.setValue(data.contactinfo.email)
    }
  }

  calculatePed(){
    if(sessionStorage.getItem('service') == 'All'){
      var tripStartDate = JSON.parse(sessionStorage.getItem('userObject')).makkahCheckinDate;
      var tripendDate = JSON.parse(sessionStorage.getItem('userObject')).madeenaCheckoutDate;
      this.minpassportExpDate = this.helper.incrimentmonth(tripStartDate,6);
      var noOfDays = this.helper.daysofTwoDate(tripStartDate,tripendDate);
      sessionStorage.setItem("noOfTripDays",noOfDays.toString())
    }
    if(sessionStorage.getItem('service') == 'Makkah Hotel'){
      var tripStartDate = JSON.parse(sessionStorage.getItem('userObject')).makkahCheckinDate;
      var tripendDate = JSON.parse(sessionStorage.getItem('userObject')).makkahCheckoutDate;
      this.minpassportExpDate = this.helper.incrimentmonth(tripStartDate,6);
      var noOfDays = this.helper.daysofTwoDate(tripStartDate,tripendDate);
      sessionStorage.setItem("noOfTripDays",noOfDays.toString())
    }
    if(sessionStorage.getItem('service') == 'Medina Hotel'){
      var tripStartDate = JSON.parse(sessionStorage.getItem('userObject')).madeenaCheckinDate;
      var tripendDate = JSON.parse(sessionStorage.getItem('userObject')).madeenaCheckoutDate;
      this.minpassportExpDate = this.helper.incrimentmonth(tripStartDate,6);
      var noOfDays = this.helper.daysofTwoDate(tripStartDate,tripendDate);
      sessionStorage.setItem("noOfTripDays",noOfDays.toString())
    }
    if(sessionStorage.getItem('service') == 'Transport'){
      var tripStartDate = JSON.parse(sessionStorage.getItem('userObject')).transportStartDate;
      this.minpassportExpDate = this.helper.incrimentmonth(tripStartDate,6);
    }
  }

  moveStep() {
    this.move(this.stage)
  }

  setUserDetails() {
    this.userDetails = JSON.parse(sessionStorage.getItem('userObject'));
    if (typeof (this.userDetails) == 'undefined') { this.router.navigate(['subagent/home']) }
    if (this.userDetails) {
      this.totalTravellers = this.userDetails.travallersCount;
      this.noOfDaysInMakkah = this.userDetails.noOfDaysInMakkah;
      this.makkahCheckInDate = this.userDetails.makkahCheckinDate;
      this.makkahCheckOutDate = this.userDetails.makkahCheckoutDate;
      this.transportStartDate = this.userDetails.transportStartDate;
      this.vehicleId = this.userDetails.vehicleType;
      this.vehicleMax = this.userDetails.vehicleCapacity;
      this.routeId = this.userDetails.transportRoute;
      this.vehicleCount = this.userDetails.vehicleCounts;
    }
  }

  multiSelectDropDownSettings() {
    this.dropdownSettings = {
      singleSelection: true,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 1,
      allowSearchFilter: true,
    };
  }

  /**
   * Method to set pax info and room allocation at the payment preview page 
   */
  setdataForUserDetailsAtLastPage() {
    this.roomAdultsArray.clear();
    this.roomChildrenArray.clear();
    this.rooms = [];
    if (this.roomDetails && this.roomDetails.length > 0) {
      this.rooms = this.roomDetails;
    } else {
      var transportRoom: Room[] = [{ adults: 1, children: 0, child_ages: ["0"], seq_no: "0", id: 1, pax_info_str: "1" }]
      this.rooms = transportRoom
    }
    for (let index = 0; index < 1; index++) {
      this.roomAdultsArray.push(this.addroomAdult(0));
      this.mainTraveller[0] = true;
    }
  }

  /**
   * Method to call all the apis for Payment page 
   */
  fetchNessoryApisForPaymentPage() {
    this.commonApiService.getCountry("",sessionStorage.getItem('userLanguage')).subscribe((data) => {
      this.nationalityList = data.map(x => ({ item_text: x.name, item_id: x.short_iso_code }));
    });
    this.commonApiService.getNationality("",sessionStorage.getItem('userLanguage')).subscribe((data) => {
      this.phoneCodeList = data.map(x => ({ item_text: x.name, item_id: x.code }));
    });
  }

  /**
   * Method to call all the apis for transport search 
   */
  fetchNessoryApisForTransport() {
    this.selectedLanguage = sessionStorage.getItem('userLanguage')
    if(sessionStorage.getItem('vehicleTypeList')){
      this.vehicleTypeList = JSON.parse(sessionStorage.getItem('vehicleTypeList'))
    }else{
      this.common.getVehicles(this.selectedLanguage).subscribe((data) => {
        this.vehicleTypeList = data.vehicle_types.map(x => ({ item_text: x.name, item_id: x.code }));
        sessionStorage.setItem('vehicleTypeList', JSON.stringify(this.vehicleTypeList));
      });
    }

    if(sessionStorage.getItem('routeList')){
      this.routeList = JSON.parse(sessionStorage.getItem('routeList'))
    }else{
      this.common.getRoutes(this.selectedLanguage).subscribe((data) => {
      this.routeList = data.routes.map(x => ({ item_text: x.name, item_id: x.code }));
      sessionStorage.setItem('routeList', JSON.stringify(this.routeList));
    });
   }

   if(sessionStorage.getItem('dropdownList')){
    this.dropdownList = JSON.parse(sessionStorage.getItem('dropdownList'))
   }else{
    this.common.getCategories(this.selectedLanguage).subscribe((data) => {
      this.dropdownList = data.categories.map(x => ({ item_text: x.name, item_id: x.code }));
      sessionStorage.setItem('dropdownList', JSON.stringify(this.dropdownList));
    });
   }
    if(sessionStorage.getItem('additionalServiceData')){
      this.data = JSON.parse(sessionStorage.getItem('additionalServiceData'))
    }else{
      this.common.getAdditionalServices(this.selectedLanguage).subscribe((data) => {
        this.data = data.additional_services.map(x => ({ item_text: x.name, item_id: x.code }));
        sessionStorage.setItem('additionalServiceData', JSON.stringify(this.data));
      });
    }
   
   if(sessionStorage.getItem('companyList')){
    let data = JSON.parse(sessionStorage.getItem('companyList'))
    this.companyList = data.companies.map(x => ({ item_text: x.name, item_id: x.code }));
    this.companylistall = data.companies;
   }else{
    this.commonApiService.getCompanies(this.selectedLanguage).subscribe((data) => {
      this.companyList = data.companies.map(x => ({ item_text: x.name, item_id: x.code }));
      this.companylistall = data.companies;
      sessionStorage.setItem('companyList', JSON.stringify(data));
    });
   }
   
  }

  transportSearchDatas(){
    this.selectedLanguage = sessionStorage.getItem('userLanguage');
    this.common.getVehicles(this.selectedLanguage).subscribe((data) => {
      this.vehicleTypeList = data.vehicle_types.map(x => ({ item_text: x.name, item_id: x.code }));
      this.vehicleTypes = data.vehicle_types;
    });
    this.common.getRoutes(this.selectedLanguage).subscribe((data) => {
      this.routeList = data.routes.map(x => ({ item_text: x.name, item_id: x.code }));
    });
  }

  onVehicleSelectArray(id: any){
    var obj = JSON.parse(sessionStorage.getItem("userObject"));
    this.travellersCount = obj.adults + obj.children;
    var vehicleMaxCapacity;
    var vehicleCode;
    console.log(this.vehicleTypes);
    if (id != null && this.vehicleTypes && this.vehicleTypes.length > 0) {
      this.vehicleTypes.forEach(element => {
        if (element.code == id) {
          vehicleCode = element.code;
          vehicleMaxCapacity = element.max_capacity;
        }
      });
    }
    var totalTra = this.travellersCount;
    var count:number = totalTra / vehicleMaxCapacity;
    console.log(count,vehicleMaxCapacity);
    
    count = Math.ceil(count);
    if(count <= obj.adults){
      this.countArray = Array(obj.adults - count + 1).fill(count + 1).map((_, idx) => count + idx);
    }else{
      this.notifyService.showWarning(this.translate.instant("Passenger limit exceeded. Please select heavy vehicle."));
    }
  }

  /**
   * Method to call corresponding steppers according to user selection  
   */
  callCorrespongingSteppers() {
    let stepLength = JSON.parse(sessionStorage.getItem('steps')).length
    if (stepLength > 1) {
      var flag = sessionStorage.getItem('stage')
      var details = sessionStorage.getItem('hotelDetailsFlag')
      if (flag == '0') {
        this.hotelSearch("MAKKA");
      }
      if (flag == '1') {
        this.hotelSearch("MADEENA");
      }
      if (flag == '2') {
        this.transportSearch()
      }
      if (flag == '3') {
        this.getTripData()
      }
    } else {
      var flag = sessionStorage.getItem('stage')
      var step = JSON.parse(sessionStorage.getItem('steps'))[0]
      var details = sessionStorage.getItem('hotelDetailsFlag')
      if (step == '1') {
        this.hotelSearch("MAKKA");
      }
      if (step == '2') {
        this.hotelSearch("MADEENA");
      }
      if (step == '3') {
        this.transportSearch()
      }
      if (flag == '1') {
        this.getTripData()
      }
    }

  }

  get roomAdultsArray(): FormArray {
    return this.paymentForm.get("roomAdultsArray") as FormArray
  }

  get roomChildrenArray(): FormArray {
    return this.paymentForm.get("roomChildrenArray") as FormArray
  }

  addroomAdult(id): FormGroup {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      passportNo: ['', Validators.required],
      ped: ['', Validators.required],
      phone_number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      Nationality: ['', Validators.required],
      Residence: ['', Validators.required],
      room_id: id
    })
  }

  addroomChild(id): FormGroup {
    return this.formBuilder.group({
      firstNameChild: ['', Validators.required],
      lastNameChild: ['', Validators.required],
      childGender: ['', Validators.required],
      childDob: ['', Validators.required],
      childPassportNo: ['', Validators.required],
      childPed: ['', Validators.required],
      room_id: id
    })
  }

  public setForm() {
    this.form = new FormGroup({
      name: new FormControl(this.data, Validators.required),
    });
    this.loadContent = true;
  }

  get f() { return this.form.controls; }

  /**
   * Method to set route id from drop down
   * @param item 
   */
  onRouteSelect(item: any) {
    this.routeId = item.item_id;
    this.disableBtn = true;
  }

  /*
 * this method for setting vehicle id and vehicle pax capacity
 */
  onVehicleSelect(item: any) {
    this.vehicleId = item.item_id;
    if (this.vehicleId == 1) { this.vehicleMax = 4; }
    if (this.vehicleId == 2) { this.vehicleMax = 7; }
    if (this.vehicleId == 3) { this.vehicleMax = 60; }
    this.disableBtn = true;
  }

  /*
 * this method for call back from hotel-details-popup component
 */
  createTripHandle(event) {
    // this.move(this.appStore.stepperIndex)
    // if(this.steps.includes("3") && this.appStore.stepperIndex == 2){
    //   this.transportSearch();
    // }
    // this.getTripData()
    // if(this.steps.includes("2") && this.appStore.stepperIndex == 1){
    //   this.hotelSearch("MADEENA");
    // }
    let stepLength = JSON.parse(sessionStorage.getItem('steps')).length
    if (stepLength > 1) {
      if (sessionStorage.getItem('modify') == null) {
        this.move(JSON.parse(sessionStorage.getItem('stage')))
        let stage = JSON.parse(sessionStorage.getItem('stage'))
        if (stage == 2) {
          this.transportSearch()
        }
        if (stage == 3) {
          this.getTripData()
        }
        if (stage == 1) {
          this.hotelSearch("MADEENA");
        }
      }
      else {
        this.move(3)
        this.getTripData()
      }
    } else {
      this.move(1)
      this.getTripData()
    }
  }

  /*
 * this method to move to corresponding page after check availability fails
 */
  moveToCorrespondingPage(cityName) {
    if (cityName == 'makkah') {
      this.move(0)
    }
    if (cityName == "madinah" && this.steps.includes("2") && !this.steps.includes("1")) { this.move(0); }
    if (cityName == "madinah" && this.steps.includes("2") && this.steps.includes("1")) { this.move(1) }
  }

  moveToTransportPage() {
    let stepLength = JSON.parse(sessionStorage.getItem('steps')).length
    if (stepLength > 1) {
      { this.move(2) }
    }
    else { this.move(0) }
  }

  /*
 * this method to move to payment page after itinerary re selected
 */
  moveToPaymentPage() {
    this.getTripData();
    if (sessionStorage.getItem('custom_trip_id') && this.steps.length > 2) {
      this.move(3)
    } else {
      this.move(1)
    }
  }

  /*
 * this method for fetching hotel list
 */
  hotelSearch(city: string) {
    this.hotelsList = [];
    if (!this.appStore.showShimmer) {
      this.appStore.showShimmer = true;
      this.showShimmer = true;
    }

    this.common.pilotHotelSearch(this.createTripAdapter.hotelSearchRequest(city, this.userDetails), this.appStore.langCode).subscribe(
      (data) => {
        if (data) {
          this.hotelsList = []
          this.hotelsList = data.results;
          if(this.hotelsList.length > 0) { this.hotelsList.forEach(x=>x.fromCache = true)}
          if (city === "MAKKA") { sessionStorage.setItem('mkSearchId', data.search_id)};
          if (city === "MADEENA") {
            this.madeenaCheckInDate = JSON.parse(sessionStorage.getItem('userObject')).madeenaCheckinDate;
            this.madeenaCheckOutDate = JSON.parse(sessionStorage.getItem('userObject')).madeenaCheckoutDate
            this.noOfDaysInMadeena = this.helperService.noOfDaysBetweenTwoDates(this.madeenaCheckOutDate, this.madeenaCheckInDate)
            sessionStorage.setItem('mdSearchId', data.search_id);
          }
          this.common.getHotelList(data.search_id, this.selectedCurrency,sessionStorage.getItem('userLanguage')).subscribe(
            (data) => {
              this.hotelsList = data.sort((a,b)=>(a.amount) - (b.amount));
              if(this.hotelsList.length > 0) { this.hotelsList.forEach(x=>x.fromCache = false)}
              this.hotelsList.forEach(x=>x.providers.sort((a,b)=>(a.amount) - (b.amount)))
              //sessionStorage.setItem('htlList', JSON.stringify(this.hotelsList));
              if (this.hotelsList.length == 0) {
                Swal.fire({
                  icon: 'error',
                  text: this.translate.instant('Hotels Not Available'),
                  confirmButtonText: this.translate.instant('Search Again')
                }).then((result) => {
                  this.router.navigate(['subagent/home']);
                })
              }
            },
            (error) => {
              Swal.fire({
                icon: 'error',
                text: this.translate.instant('Hotels Not Available'),
                confirmButtonText: this.translate.instant('Search Again')
              }).then((result) => {
                this.router.navigate(['subagent/home']);
              })
            }
          );
        }
        else {
          this.showShimmer = true;
        }
      }),
      (error) => {
        Swal.fire({
          icon: 'error',
          text: this.translate.instant('Something Went Wrong'),
          confirmButtonText: this.translate.instant('Search Again')
        }).then((result) => {
          this.router.navigate(['subagent/home']);
        })
      };
  }

  /*
 * this method for polling loader status
 */
  ngDoCheck() {
    this.policy = CreateTripComponent.termsCondtion;
    this.generalHelper.checkForAccessToken();
    if (!this.appStore.showShimmer) { this.showShimmer = false; }
  }

  /**
  * Method to set country code
  */
  onCountrySelect(item: any) {
    this.countryCode = item.item_id;
    this.selectedCountry = item.item_id;
    if (this.nationalityCode && this.countryCode) {
      this.searchServiceButtonActive = true
    }
  }

  /**
   * Method for navigate to home page
   */
  backToHomePage() {
    this.router.navigate(['subagent/home']);
    this.clearAppStore();
  }

  /**
   * Method for clearing appstore
   */
  clearAppStore() {
    this.appStore.isAvailabilityFails = false;
  }

  closeIbanPopUp(){
    this.showIbanPopup = false;
    this.bookContinue = false;
    this.disablePayBttn = false;
    this.travellersForm.enable()
  }

  omit_special_char(event){   
    var k;  
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 ); 
   }

   termsandcondition(){
     if(this.selectedLanguage == "en-US"){ CreateTripComponent.termsCondtion = true;}
   }
   
   policyCheck(e){
    if (e.target.checked){
      this.disablePayBttn = false;
    }else{
      this.disablePayBttn = true;
    }
   }

   closemodifySearchTransportPopup(){
     this.modifySearchTransportPopup = false;
   }

}