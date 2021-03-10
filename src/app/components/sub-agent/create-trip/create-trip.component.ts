  import {Component,OnInit,ViewChild,ViewEncapsulation,AfterViewChecked,ElementRef,Renderer2} from "@angular/core";
  import {TranslateService} from '@ngx-translate/core';
  import {FormBuilder,FormGroup,FormArray,FormControl,Validators,} from "@angular/forms";
  import { MAT_STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
  import { Room} from "../../../models/visaTypes";
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
  import { AuthService } from "src/app/common/services/auth-services";
  import { CreateTripAdapter } from "src/app/adapters/sub-agent/create-trip-adapter";
  import { CommonApiService } from "src/app/common/services/common-api-services";
  import { CreateTripHelper } from "src/app/helpers/sub-agent/create-trip-helpers";
  import { GeneralHelper } from "src/app/helpers/General/general-helpers";

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

  export class CreateTripComponent implements OnInit, AfterViewChecked,DoCheck {
    showtransportsearch : boolean = true;
    static UserObjectData : any;
    static RoomData :any ;
    userDetails :any;
    roomDetails:any;
    additionalServiceCount : boolean =false;
    roomdetails:boolean=false;
    paymentForm:FormGroup;
    step = 0;
    imageshow:number=0;
    time = {hour: 13, minute: 30};
    meridian = true;
    tripData: any;
    selectedTransport: any;
    makkatransport:boolean = false;
    grountService:boolean = false;
    totalRoomPrice:number = 0;
    selectedTravellersCount: number = 0;
    selectedRoomCount:number = 0;
    tripMakkahHotel: any;
    tripMakkahHotelrating:any;
    tripService: any;
    tripVisaData: any;
    tripMadeenaHotel: any;
    tripTransport: any;
    selectedRoomGroups: any[];
    isGrouped: any;
    nationality: any;
    noOfDaysInMadeena: number = 0;
    makkahticked:boolean = false;
    madeendetailshow:boolean=false;
    madeenaloader:boolean=false;
    searchTransport: boolean ;
    mdate: any;
    stageArray:number[]=[];
    searchServiceButtonActive: boolean;
    bookingId: any;
    setDataForAddServiceCountPopUP:any = {};
    addSrvCount:number = 0;
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
    madeenaCheckInDate:any;
    madeenaCheckOutDate:any;
    transportStartDate: any;
    companylistall: any;
    isTransportResponseEmpty: boolean = false;
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
    private createTripAdapter: CreateTripAdapter = new CreateTripAdapter(this.helperService,this.appStore);
    returnDate: any;
    private createTripHelper: CreateTripHelper = new CreateTripHelper(this.helperService);
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
    countryCode: any;
    nationalityCode: any;
    diffDays: any;
    searchTransportId: any;
    selectedCurrency: any;
    selectedLanguage: any;
    dropdownList = [];
    dropdownSettings: IDropdownSettings = {};
    vehicleTypeList = [];
    vehicleTypeItems =[];
    routeList = [];
    companyList= [];
    countryList = [];
    nationalityList = [];
    categoryIds =[];
    selectedHotel:any;
    selectedCountry: any;
    selectedNationality: any;
    transportList: Transportation []=[];
    transportListData: Transportation []=[];
    toggle = [];
    disableBtn:boolean = false;
    count: number = 1;
    showAddButton: boolean = true;
    showMadenaTransportVehicleList: boolean = false;
    displayTab: boolean;
    changeButton: boolean;
    submitted = false;
    vehicleCount: any;
    today = new Date().toJSON().split("T")[0];
    roomCount :number = 0;
    countadult: number = 1;
    countchild: number = 0;
    countinfa: number = 0;
    displayTabtravel: boolean;
    @ViewChild("menuIconClass", { read: ElementRef, static: false })
    menuIconClass: ElementRef;
    @ViewChild("menuPopupClass", { read: ElementRef, static: false })
    menuPopupClass: ElementRef;
    rooms: Room[] = [];
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
    showShimmer:boolean;
    noOfDaysInMakkah:number;
    generalHelper : GeneralHelper

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer2: Renderer2,
    private common: CommonApiService,
    private spinner: NgxSpinnerService,
    private datepipe: DatePipe,
    private http: HttpClient,
    private appStore: AppStore,
    private translateService: TranslateService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private notifyService: NotificationService,
    private route: ActivatedRoute,
    private helperService:HelperService,
    private genHelper: GeneralHelper
  ) {
    this.generalHelper = this.genHelper;
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
        // Clicked outside
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
  move(index: number) {this.stepper.selectedIndex = index;}
  @ViewChild(MakkaHotelComponent,{static:false}) child:MakkaHotelComponent;

  userFilter: any = { name: '' };

  /**
   * Method to minify makka card at payment review page
   */  
  toggleMakkaUp(){
    (<HTMLElement>document.getElementById("makka")).style.display = "none";
    this.makka = !this.makka;
  }

  /**
   * Method to expand makka card at payment review page
   */  
  toggleMakkaDown(){
    (<HTMLElement>document.getElementById("makka")).style.display = "block";
    this.makka = !this.makka;
  }

  /**
  * Method to expand medinah card at payment review page
  */
  toggleMedinahDown(){
    (<HTMLElement>document.getElementById("medinah")).style.display = "block";
    this.medinah = !this.medinah;
  }

  /**
  * Method to minify medinah card at payment review page
  */
  toggleMedinahUp(){
    (<HTMLElement>document.getElementById("medinah")).style.display = "none";
    this.medinah = !this.medinah;
  }

  /**
  * Method to minify transport card at payment review page
  */
  toggleTransportUp(){
    (<HTMLElement>document.getElementById("transport")).style.display = "none";
    (<HTMLElement>document.getElementById("transportRate")).style.display = "none";
    (<HTMLElement>document.getElementById("transportPolicy")).style.display = "none";
    (<HTMLElement>document.getElementById("trnsptNormal")).style.display = "none";
    this.trnsprt= !this.trnsprt;
  }

  /**
  * Method to expand transport card at payment review page
  */
  toggleTransportDown(){
    (<HTMLElement>document.getElementById("transport")).style.display = "block";
    (<HTMLElement>document.getElementById("transportPolicy")).style.display = "block";
    (<HTMLElement>document.getElementById("transportRate")).style.display = "block";
    (<HTMLElement>document.getElementById("trnsptNormal")).style.display = "block";
    this.trnsprt = !this.trnsprt;
  }

  ngAfterViewChecked() {
    this.selectedCurrency = this.appStore.currencyCode;
    this.selectedLanguage = this.appStore.langCode;
    this.translateService.use(this.appStore.langCode)
    if(this.appStore.langCode == "ar-AE"){
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    }else{
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
    if(this.selectedCountry){
      let selectedResidenceText= (document.getElementById("cor0").getElementsByClassName("mat-select-value-text")[0].getElementsByClassName("ng-star-inserted")[0]).innerHTML;
      this.phoneCode = this.phoneCodeList.filter(x=>x.item_text == selectedResidenceText)[0].item_id; 
    }
  }

   /**
 * Method to clear previous data
 */  
  clearPreviosDataForFreshSearch(){
    this.userFilter.name = "";
    this.noOfDaysInMadeena = 0;
    this.diffDays = 0;
    this.selectedHotel = [];
    this.selectedRoomGroups = [];
    this.makkahticked = false;
    this.madeendetailshow = false;
    this.mdate = null
    this.stageArray = [];
    this.isTransportResponseEmpty = false;
  }

   /**
 * Method to fetch transport list
 */  
  transportSearch()
  {
    this.vehicleCount = Math.ceil((this.userDetails.travallersCount)/this.vehicleMax);
    const date = this.helperService.dateFormaterMdy(this.userDetails.transportStartDate);
    const filrerData ={
      "search_id": this.searchTransportId,
      "lang": this.selectedLanguage,
      "route":this.routeId,
      "vehicle_type": this.vehicleId,
      "category": this.categoryId,
      "no_of_travellers":this.countadult + this.countchild,
      "quantity":Math.ceil((this.countadult + this.countchild)/this.vehicleMax),
      "travel_date":date.split("/")[2]+"-"+date.split("/")[0]+"-"+date.split("/")[1]
    }
    this.common.searchTransport(filrerData).subscribe((data) => {
      this.searchTransportId = data.search_id;
      this.appStore.transportSearchId = data.search_id;
      this.common.searchTransportList(this.searchTransportId,this.selectedCurrency,this.selectedLanguage).subscribe((response) => {
        if ((response && response.transportations && response.transportations.length == 0) ||  (response && response.transportations && response.transportations.filter(x=>x.vehicle_types.length > 0) == 0)) {
          this.isTransportResponseEmpty = true;
         this.createTripHelper.showSweetAlert(this.translateService.instant('Sorry, we could not find transport for this route'),"warning",this.translateService.instant('Modify search and try again'));
        }else{
          this.transportList = response.transportations.sort((n1,n2) => n1.vehicle_types.map(x=>x.categories[0].fare_summary[2].amount) - n2.vehicle_types.map(x=>x.categories[0].fare_summary[2].amount));
          this.transportListData = response.transportations.sort((n1,n2) => n1.vehicle_types.map(x=>x.categories[0].fare_summary[2].amount) - n2.vehicle_types.map(x=>x.categories[0].fare_summary[2].amount));
        }        
        for(let i=0;i<this.transportList.length;i++){
          for(let j=0;j<this.transportList[i].vehicle_types.length;j++){
            this.transportList[i].vehicle_types[j].toggle = false;
            this.transportList[i].vehicle_types[j].count = 1;
            this.transportList[i].totalCount = 1;
            this.transportList[i].vehicle_types[j].transport_amount = 0;
            this.transportList[i].vehicle_types[j].vehicleCapacityCount = Math.ceil((this.countadult + this.countchild)/this.transportList[i].vehicle_types[j].categories[0].capacity)
            this.transportList[i].vehicle_types[j].vehiclePaxCount = Math.ceil((this.countadult + this.countchild)/(Math.ceil((this.countadult + this.countchild)/this.transportList[i].vehicle_types[j].categories[0].capacity)))
          }
        }
        for(let i=0;i<this.transportList.length;i++){
          for(let j=0;j<this.transportList[i].vehicle_types.length;j++){
          const totalCount = this.countadult + this.countchild + this.countinfa;
          const vehicle = this.transportList[i].vehicle_types[j].vehicle_type_code[0];
            this.transportList[i].vehicle_types[j].toggle_vehicle = false;
            this.transportList[i].totalCount = 1;
          }
        }
      });
    }
    );
  }

  /**
 * Method to set main traveller
 */
  mainTraveller(i){
    this.rooms.forEach(value => {
      for(let j=0;j< value.adults;j++){
        this.mainTraveller[j] = false;
      }
    });
      this.mainTraveller[i] = true;
  }

  /**
 * Method to fetch saved itinerary
 */
  getTripData(){
    this.common.getTrip(this.appStore.customeTripId).subscribe((data) => {
      this.tripData = data;
      if(this.tripData){
      if(this.tripData.makkah_trip_hotel){
        this.tripMakkahHotel = this.tripData.makkah_trip_hotel;
        this.hotelMakkahFare = this.tripData.makkah_trip_hotel.room_variations.map(x=>x.room.amount).reduce((a, b) => a + b, 0);
        this.tripMakkahHotelrating = this.tripData.makkah_trip_hotel.hotel.user_review / 2 ;
      }
      if(this.tripData.medinah_trip_hotel){
        this.tripMadeenaHotel = this.tripData.medinah_trip_hotel;
        this.hotelMadeenaFare = this.tripData.medinah_trip_hotel.room_variations.map(x=>x.room.amount).reduce((a, b) => a + b, 0);
      }
      if(this.tripData.trip_transportation){
        this.tripTransport = this.tripData.trip_transportation;
        this.transportFare = this.tripData.trip_transportation.trip_vehicles[0].price_per_vehicle;
        this.selectedTransport= this.tripData.trip_transportation.selected_transportation;
      }

      if(this.tripData.trip_visa){
        this.tripVisaData = this.tripData.trip_visa;
      }
    }
    });
  }

  /**
   * Method to book trip and check availability
   */
  bookTrip(){
    this.submitted = true;
    let travellers = [];
    this.roomAdultsArray.controls.forEach((adult, j) => { 
    if(this.mainTraveller[j]){
      const x = {
        "title": "Mr", 
        "first_name" : (<HTMLInputElement>document.getElementById("firstName"+j)).value,
        "last_name":(<HTMLInputElement>document.getElementById("lastName"+j)).value,
        "email": (<HTMLInputElement>document.getElementById("email"+j)).value,
        "phone_number": (<HTMLInputElement>document.getElementById("mobile"+j)).value,
        "address":(<HTMLInputElement>document.getElementById("address"+j)).value,
        "country_code": this.selectedCountry,
        "phn_country_code":(<HTMLInputElement>document.getElementById("phn_country_code"+j)).value,
      }
    
      const q=  {
        "title": "Mr", 
        "first_name": (<HTMLInputElement>document.getElementById("firstName"+j)).value,
        "last_name": (<HTMLInputElement>document.getElementById("lastName"+j)).value,
        "dob": this.datepipe.transform((<HTMLInputElement>document.getElementById("dob"+j)).value, 'yyyy-MM-dd'),
        "gender": (document.getElementById("gender"+j).getElementsByClassName("mat-select-value-text")[0].getElementsByClassName("ng-star-inserted")[0]).innerHTML,
        "nationality": this.selectedNationality,
        "passport_no": (<HTMLInputElement>document.getElementById("passportNo"+j)).value,
        "room_reference": 0+"_"+this.rooms[0].adults+"ADT_"+this.rooms[0].children+"CHD_"+this.rooms[0].child_ages.sort().join("_")+"",
        "passport_expiry_date": this.datepipe.transform((<HTMLInputElement>document.getElementById("ped"+j)).value, 'yyyy-MM-dd'),
        "contactinfo": x,
        "country_of_residence":this.selectedCountry
      }
      travellers.push(q);
      }else{
        const q=  {
            "first_name": (<HTMLInputElement>document.getElementById("firstName"+j)).value,
            "last_name": (<HTMLInputElement>document.getElementById("lastName"+j)).value,
            "dob":  this.datepipe.transform((<HTMLInputElement>document.getElementById("dob"+j)).value, 'yyyy-MM-dd'),
            "gender": (document.getElementById("gender"+j).getElementsByClassName("mat-select-value-text")[0].getElementsByClassName("ng-star-inserted")[0]).innerHTML,
            "nationality": this.selectedNationality,
            "passport_no": (<HTMLInputElement>document.getElementById("passportNo"+j)).value,
            "room_reference": 0+"_"+this.rooms[0].adults+"ADT_"+this.rooms[0].children+"CHD_"+this.rooms[0].child_ages.sort().join("_")+"",
            "passport_expiry_date": this.datepipe.transform((<HTMLInputElement>document.getElementById("ped"+j)).value, 'yyyy-MM-dd'),
            "country_of_residence":this.selectedCountry
      }
        travellers.push(q);
      }
  });
  const body={travellers}
    this.common.bookTrip(body,this.appStore.customeTripId).subscribe((data) => {
      this.bookingId = data.id;
      localStorage.setItem("reference_no",data.reference_no)
      this.common.checkAvailability(data.id).subscribe((response)=> {
          if(response.makkah_trip_hotel){
            if(response.makkah_trip_hotel.success){
              (<HTMLElement>document.getElementById("changemakkaHotel")).style.backgroundColor = "unset";
              (<HTMLElement>document.getElementById("changemakkaHotel")).style.display = "none";
            }else{
              (<HTMLElement>document.getElementById("changemakkaHotel")).style.backgroundColor = "#0000005c";
              (<HTMLElement>document.getElementById("changemakkaHotel")).style.display = "block";
              window.scrollTo(0,0);
            } 
          }
          if(response.medinah_trip_hotel){
            if(response.medinah_trip_hotel.success){
              (<HTMLElement>document.getElementById("changemadinahHotel")).style.backgroundColor = "unset";
              (<HTMLElement>document.getElementById("changemadinahHotel")).style.display = "none";
            }else{
              (<HTMLElement>document.getElementById("changemadinahHotel")).style.backgroundColor = "#0000005c";
              (<HTMLElement>document.getElementById("changemadinahHotel")).style.display = "block";
              window.scrollTo(0,0);
            }
          }
          if(response.trip_transportation){
            if(response.trip_transportation.success){
              (<HTMLElement>document.getElementById("changeTransport")).style.backgroundColor = "unset";
              (<HTMLElement>document.getElementById("changeTransport")).style.display = "none";
            }else{
              (<HTMLElement>document.getElementById("changeTransport")).style.backgroundColor = "#0000005c";
              (<HTMLElement>document.getElementById("changeTransport")).style.display = "block";
              window.scrollTo(0,0);
            } 
          }
          if((response.makkah_trip_hotel && response.makkah_trip_hotel.success == false) || (response.medinah_trip_hotel && response.medinah_trip_hotel.success == false) ||(response.trip_transportation && response.trip_transportation.success == false) || response.refetch_trip == true ){
            (<HTMLInputElement>document.getElementById("payBtn")).style.display = "none";
            (<HTMLInputElement>document.getElementById("continueBooking")).style.display = "block";
          }else{
            (<HTMLInputElement>document.getElementById("payBtn")).style.display = "block";
            (<HTMLInputElement>document.getElementById("continueBooking")).style.display = "none";
          }
          
          if(response.refetch_trip == true){
            this.createTripHelper.showSweetAlert(this.translateService.instant('Price has been changed'),"warning",this.translateService.instant('OK'))
            this.getTripData();
          } 
        });
    });
  }

  /**
   * Method to close payment popup after 30 sec
   */
  setTimerForIbanPopup() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } 
      else if (this.timeLeft == 0){
        (<HTMLInputElement>document.getElementById("ibanClose")).click();
        this.timeLeft = 30;
        clearInterval(this.interval);
      }
    },1000)
  }

   /**
   * Method to navigate payment success page
   */
  onSubmitButtonClicked(){
     // "account_no": "SA1790941327111000000002" ,
     //"auth_code": "5NMABO6U2RH2ZR5B"
    var w = {
       "booking_id": this.bookingId,
       "account_no": this.accNo,
       "auth_code" : this.authCode,
      }

      if(this.accNo && this.authCode){
      this.spinner.show();
      this.common.bookingPayment(w).subscribe((response)=> { 
        this.spinner.hide();
        if(response.status == "Success"){
          this.router.navigate(['subagent/payment/'+this.bookingId+'/success']);
        }
        else{
          this.notifyService.showWarning(response.errors[0])
        }
      },error=>{
        this.spinner.hide();
        this.createTripHelper.showSweetAlert(this.translateService.instant('Oops...'),"error",this.translateService.instant('Account Does Not Exist'));
      });
    }else{
      this.notifyService.showWarning(this.translateService.instant("Payment Credentials Missing"))
    }
  }

  /**
   * Method to navigate makka stepper when check availability fails
   */
  changemakkaHotel(){
    this.move(0);
    (<HTMLElement>document.getElementById("changemakkaHotel")).style.backgroundColor = "unset";
    (<HTMLInputElement>document.getElementById("payBtn")).style.display = "none";
    (<HTMLInputElement>document.getElementById("continueBooking")).style.display = "block";
  }

  /**
   * Method to navigate madina stepper when check availability fails
   */
  changemadinahHotel(){
    if(this.steps.length > 2){
      this.move(1);
    }else{
      this.move(0);
    }
    (<HTMLElement>document.getElementById("changemadinahHotel")).style.backgroundColor = "unset";
    (<HTMLInputElement>document.getElementById("payBtn")).style.display = "none";
    (<HTMLInputElement>document.getElementById("continueBooking")).style.display = "block";
  }

  /**
   * Method to navigate transport stepper when check availability fails
   */
  changeTransport(){
    if(this.steps.length > 2){
      this.move(2);
    }else{
      this.move(0);
    }
    (<HTMLElement>document.getElementById("changeTransport")).style.backgroundColor = "unset";
    (<HTMLInputElement>document.getElementById("payBtn")).style.display = "none";
    (<HTMLInputElement>document.getElementById("continueBooking")).style.display = "block";
  }
  
  @ViewChild("multiSelect", { static: true }) multiSelect;
  public form: FormGroup;
  public loadContent: boolean = false;
  public data = [];
   
  ngOnInit() {
    this.generalHelper.checkForAccessToken();
    if(!this.appStore.showShimmer){this.appStore.showShimmer = true,this.showShimmer = true}
    this.userDetails = CreateTripComponent.UserObjectData;
    this.appStore.userDetails = this.userDetails;
    if(typeof(this.userDetails) == 'undefined'){this.router.navigate(['subagent/home'])}
    if(this.userDetails){
    this.totalTravellers = this.userDetails.travallersCount;
    this.noOfDaysInMakkah = this.appStore.noOfDaysInMakkah;
    this.makkahCheckInDate = this.userDetails.makkahCheckinDate;
    this.makkahCheckOutDate = this.userDetails.makkahCheckoutDate;
    this.transportStartDate = this.userDetails.transportStartDate;
    this.vehicleId = this.userDetails.vehicleType;
    this.vehicleMax = this.userDetails.vehicleCapacity;
    this.routeId = this.userDetails.transportRoute;
    }
    this.travellersCount = this.appStore.totalTravellers;
    this.rooms = CreateTripComponent.RoomData;
    this.appStore.roomArray = this.rooms;
    this.appStore.stepperIndex = 0;
    this.selectedCurrency = "SAR";
    this.fetchNessoryApisForTransport();
    this.multiSelectDropDownSettings()
    this.setForm();
    this.callCorrespongingSteppers();
    this.setdataForUserDetailsAtLastPage();
  }

  multiSelectDropDownSettings(){
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
  setdataForUserDetailsAtLastPage(){
    this.roomAdultsArray.clear();
    this.roomChildrenArray.clear();
    this.rooms = [] ;
    if(this.roomDetails && this.roomDetails.length > 0){
      this.rooms = this.roomDetails;}else{
        var  transportRoom:Room[] = [{adults: 1, children: 0, child_ages: ["0"], seq_no: "0",id:1,pax_info_str:"1"}]
        this.rooms = transportRoom
    }
    for (let index = 0; index < 1; index++) {
        this.roomAdultsArray.push(this.addroomAdult(0));
        this.mainTraveller[0] = true;
    }
  }

  /**
   * Method to call all the apis for transport search 
   */
  fetchNessoryApisForTransport(){
    this.selectedLanguage = this.appStore.langCode
    this.common.getVehicles(this.selectedLanguage).subscribe((data) => {
      this.vehicleTypeList = data.vehicle_types.map(x => ( {item_text: x.name, item_id: x.code} ));
    });
    this.common.getRoutes(this.selectedLanguage).subscribe((data) => {
      this.routeList = data.routes.map(x => ( {item_text: x.name, item_id: x.code } ));
    });
    this.common.getCategories(this.selectedLanguage).subscribe((data) => {
      this.dropdownList = data.categories.map(x => ( {item_text: x.name, item_id: x.code } ));
    });
    this.common.getAdditionalServices(this.selectedLanguage).subscribe((data) => {
      this.data = data.additional_services.map(x => ( {item_text: x.name, item_id: x.code } ));
    });
    this.common.getCompanies(this.selectedLanguage).subscribe((data) => {
      this.companyList = data.companies.map(x => ( {item_text: x.name, item_id: x.code } ));
      this.companylistall = data.companies;
    });
    this.common.getCountry("",this.selectedLanguage).subscribe((data) => {
      this.nationalityList = data.map(x => ( {item_text: x.name, item_id: x.short_iso_code } ));
    });
    this.common.getNationality("",this.selectedLanguage).subscribe((data) => {
      this.phoneCodeList = data.map(x => ( {item_text: x.name, item_id: x.code } ));
    });
    this.common.getCountry("",this.selectedLanguage).subscribe((data) => {
      this.countryList = data.map(x => ( {item_text: x.name, item_id: x.short_iso_code } ));
    });
  }

  /**
   * Method to call corresponding steppers according to user selection  
   */
  callCorrespongingSteppers(){
    if(this.steps.includes("1")){
      this.hotelSearch("MAKKA");
    }
    
    if(!this.steps.includes("1") && this.steps.includes("2")){
      this.madeenaloader = true;
      this.hotelSearch("MADEENA");
    }

    if(this.steps.includes("3") && !this.steps.includes("2") && !this.steps.includes("1")){
      this.transportSearch();
    }
  }

  get roomAdultsArray() : FormArray {
    return this.paymentForm.get("roomAdultsArray") as FormArray
  }

  get roomChildrenArray() : FormArray {
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

  get f() {
    return this.form.controls;
  }

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
    if(this.vehicleId == 1){
      this.vehicleMax = 4;
    }
    if(this.vehicleId == 2){
      this.vehicleMax = 7;
    }
    if(this.vehicleId == 3){
      this.vehicleMax = 60;
    }
    this.disableBtn = true;
  }
  
  /*
 * this method for call back from hotel-details-popup component
 */
  createTripHandle(event){
    this.move(this.appStore.stepperIndex)
    if(this.steps.includes("3") && this.appStore.stepperIndex == 2){
      this.transportSearch();
    }
    this.getTripData()
    if(this.steps.includes("2") && this.appStore.stepperIndex == 1){
      this.hotelSearch("MADEENA");
    }
  }

  /*
 * this method for fetching hotel list
 */
  hotelSearch(city:string) {
    this.common.pilotHotelSearch( this.createTripAdapter.hotelSearchRequest(city,this.userDetails), this.appStore.langCode).subscribe(
      (data) => {
        let response = data;
        this.hotelsList = data.results;
        if (typeof response.search_id != "undefined") {
          if(city == "MAKKA"){this.appStore.makkahSearchId = response.search_id;}
          if(city == "MADEENA"){this.appStore.madinahSearchId = response.search_id;
            this.noOfDaysInMadeena = this.appStore.noOfDaysInMadeena;
            this.travellersCount = this.appStore.totalTravellers;
            this.madeenaCheckInDate = this.userDetails.madeenaCheckinDate;
            this.madeenaCheckOutDate = this.userDetails.madeenaCheckoutDate;
          }
          this.common.getHotelList(response.search_id,this.selectedCurrency,"en-US")
            .subscribe(
              (data) => {
                this.hotelsList = data;
                if (this.hotelsList.length == 0) {this.notifyService.showWarning(this.translateService.instant( "No hotel(s) availabe plz change date"));}
              },
              (error) => {this.notifyService.showWarning(this.translateService.instant("Server busy try later"));});}
      },
      (error) => {this.notifyService.showWarning(this.translateService.instant("Server busy try later"));});
  }

  /*
 * this method for for polling loader status
 */
  ngDoCheck(){
    this.generalHelper.checkForAccessToken();
    if(!this.appStore.showShimmer) {
      this.showShimmer = false;
    } 
  }

  /**
   * Method for navigate to home page
   */
  backToHomePage(){
    this.router.navigate(['/home']);
  }
}