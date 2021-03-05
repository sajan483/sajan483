  import {Component,OnInit,ViewChild,ViewEncapsulation,AfterViewChecked,ElementRef,Renderer2,AfterViewInit,} from "@angular/core";
  import {TranslateService} from '@ngx-translate/core';
  import {FormBuilder,FormGroup,FormArray,FormControl,Validators,} from "@angular/forms";
  import { MAT_STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
  import { Room} from "../../../models/visaTypes";
  import { MatStepper } from "@angular/material/stepper";
  import { Router, ActivatedRoute } from "@angular/router";
  import { AppStore } from '../../../stores/app.store';
  import Swal from "sweetalert2";
  import { NgxSpinnerService } from "ngx-spinner";
  import { IDropdownSettings } from "ng-multiselect-dropdown";
  import { Hotel } from "../../../models/hotels";
  import {ImageObject} from "../../../models/custome_trip";
  import { Transportation } from "../../../models/vehicle_transport"
  import { DatePipe } from "@angular/common";
  import { ToastrService } from "ngx-toastr";
  import { NotificationService } from "../../../common/services/notification.service";
  import { HttpClient } from '@angular/common/http';
  import { DoCheck } from "@angular/core";
  import { HelperService } from "src/app/common/services/helper-service";
  import { MakkaHotelComponent } from "./components/makka-hotel/makka-hotel.component";
  import { AuthService } from "src/app/common/services/auth-services";
  import { ApiService } from "./create-trip-api-service";
  import { CreateTripAdapter } from "src/app/adapters/sub-agent/create-trip-adapter";

  @Component({
    selector: "app-create-trip",
    templateUrl: "./create-trip.component.html",
    styleUrls: ["./create-trip.component.scss"],
    providers: [
      {
        provide: MAT_STEPPER_GLOBAL_OPTIONS,
        useValue: { displayDefaultIndicatorType: false },
      },
      ApiService,
      DatePipe,
      HelperService,
      AuthService
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
    filtershowgt : boolean = false;
    filtershow : boolean = false;
    roomdetails:boolean=false;
    getdiffDays:any;
    returnDepartTime:any;
    onwerdArivalTime:any;
    paymentForm:FormGroup;
    arivaldate:any;
    step = 0;
    imageshow:number=0;
    time = {hour: 13, minute: 30};
    meridian = true;
    tripData: any;
    payForm: FormGroup
    selectedTransport: any;
    hotelPics:string[]=[];
    hotelPics1:string[]=[];
    hotelPics2:string[]=[];
    moreimages:boolean = false;
    onwrdFlight:boolean = false;
    rtrnFlight: boolean = false;
    makkaHtl:boolean = false;
    makkatransport:boolean = false;
    madnaHtl:boolean = false;
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
    paymentData: any;
    multiCheckItemsList: any[];
    selectedTabIndex: number;
    showMadeenaHotelDetails: boolean;
    isGrouped: any;
    isGroupedMakka: any;
    makkaSelectActivate: boolean;
    transportSelectActivate: boolean;
    nationality: any;
    noOfDaysInMadeena: number = 0;
    makkaCheckInTime: any;
    makkaCheckOutTime: any;
    madeenaHotelName: any;
    madeenaCheckOutTime: any;
    madeenaCheckInTime: any;
    makkahloader:boolean=true;
    makkahticked:boolean = false;
    madeendetailshow:boolean=false;
    madeenaloader:boolean=false;
    madeenaticked:boolean=false;
    isHotelListSortedByHaramDistance: boolean;
    isHotelsSortedByPrice: boolean;
    isMadeenaHotelsSortedByPrice: boolean;
    setDataViewData: any;
    searchTransport: boolean ;
    adjustmentDate : Date ;
    mdate: any;
    stageArray:number[]=[];
    searchServiceButtonActive: boolean;
    bookingId: any;
    setDataForAddServiceCountPopUP:any = {};
    addSrvCount:number = 0;
    travelersError: any;
    checkdatemakkah: any;
    checkoutdatemakkah: any;
    totalTravellers: any;
    showPayButton: boolean = false;
    paymentSuccessPopUp: boolean;
    acc_no: any;
    accNo: any;
    authCode: any;
    selectedNationalityText: any;
    phoneCode: any;
    reference_no: any;
    companylistall: any;
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
    arrivalDate: any;
    returnStart: any;
    returnEnd: any;
    retDate: any;
    depStart: any;
    departureEnd: any;
    routeId: any;
    categoryId: any;
    hotelMakkahFare: any;
    hotelMadeenaFare: any;
    transportFare: any;
    categoryserviceId: any;
    additionlserviceId: any;
    additionl_serviceId: any;
    ground_additionl_serviceId: any;
    vehicleId: any;
    vehicleMax: any;
    vehicleName: any;
    countryCode: any;
    nationalityCode: any;
    firstDate: any;
    secondDate: any;
    diffDays: any;
    searchTransportId: any;
    searchserviceId: any;
    selectedCurrency: any;
    selectedLanguage: any;
    IsHidden = true;
    dropdownList = [];
    dropdownserviceList = [];
    serviceData = [];
    selectedItems = [];
    dropdownSettings: IDropdownSettings = {};
    vehicleTypeList = [];
    vehicleTypeItems =[];
    routeList = [];
    companyList= [];
    countryList = [];
    nationalityList = [];
    showSkipButtonDiv:boolean = false;
    categoryIds =[];
    categoryServiceIds = [];
    imageObjectArray: ImageObject[] = [];
    selectedHotel:any;
    selectedCountry: any;
    selectedNationality: any;
    myControl = new FormControl();
    searchBtnEnable: boolean;
    makkaHotelsList: Hotel[] = [];
    madinaHotelsList: Hotel[] = [];
    stepCount: any;
    returnStep: any;
    transportList: Transportation []=[];
    transportListData: Transportation []=[];
    stateCtrl = new FormControl();
    toggle = [];
    toggle2 = [];
    disableBtn:boolean = false;
    counter: boolean;
    count: number = 1;
    showAddButton: boolean = true;
    showMadenaTransportVehicleList: boolean = false;
    displayTab: boolean;
    changeButton: boolean;
    showhotelDetails: boolean;
    showModal: boolean;
    submitted = false;
    vehicleCount: any;
    today = new Date().toJSON().split("T")[0];
    roomCount :number = 0;
    countadult: number = 1;
    countchild: number = 0;
    countinfa: number = 0;
    displayTabtravel: boolean;
    displayVehicleCount: boolean;
    displayPersonCount: boolean;
    returnArrivalArrow: boolean;
    returnPriceArrow: boolean;
    moreFilterArrow: boolean;
    refundableFilterArrow: boolean;
    @ViewChild("menuIconClass", { read: ElementRef, static: false })
    menuIconClass: ElementRef;
    @ViewChild("menuPopupClass", { read: ElementRef, static: false })
    menuPopupClass: ElementRef;
    showModalroom: boolean;
    rooms: Room[] = [];
    selecteddaysmakkah: number;
    phoneCodeList: any;
    currentRate = 3.5;
    @ViewChild("menuIcon", { read: ElementRef, static: false })
    menuIcon: ElementRef;
    @ViewChild("menuPopup", { read: ElementRef, static: false })
    menuPopup: ElementRef;
    toairport = false;
    @ViewChild("menuIconTo", { read: ElementRef, static: false })
    menuIconTo: ElementRef;
    @ViewChild("menuPopupTo", { read: ElementRef, static: false })
    menuPopupTo: ElementRef;
    tripId: any;
    isChecked: boolean;
    travellersCount: number;
    infantCount: number = 0;
    adultCount: number = 1;
    childCount: number = 0;
    steps = [];
    timeLeft: number = 30;
    interval;
    showShimmer:boolean;
    noOfDaysInMakkah:number;

    constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private renderer2: Renderer2,
      private common: ApiService,
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
      private authService:AuthService
    ) {
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
          this.toairport = false;
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
    
    @ViewChild(MakkaHotelComponent,{static:false}) child:MakkaHotelComponent;

    userFilter: any = { name: '' };

    toggleMakkaUp(){
      (<HTMLElement>document.getElementById("makka")).style.display = "none";
      this.makka = !this.makka;
    }

    toggleMakkaDown(){
      (<HTMLElement>document.getElementById("makka")).style.display = "block";
      this.makka = !this.makka;
    }

    toggleMedinahDown(){
      (<HTMLElement>document.getElementById("medinah")).style.display = "block";
      this.medinah = !this.medinah;
    }

  toggleMedinahUp(){
    (<HTMLElement>document.getElementById("medinah")).style.display = "none";
    this.medinah = !this.medinah;
  }

  toggleTransportUp(){
    (<HTMLElement>document.getElementById("transport")).style.display = "none";
    (<HTMLElement>document.getElementById("transportRate")).style.display = "none";
    (<HTMLElement>document.getElementById("transportPolicy")).style.display = "none";
    (<HTMLElement>document.getElementById("trnsptNormal")).style.display = "none";
    this.trnsprt= !this.trnsprt;
  }

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

  saveSelectedAddSrvCount(item){
    this.additionalServiceCount = false;
    this.setDataForAddServiceCountPopUP = {};
    this.setDataForAddServiceCountPopUP = item;
    this.setDataForAddServiceCountPopUP.selectedQuantity = this.addSrvCount;
  }
    
  hidecountpopup(){
    this.additionalServiceCount = false;
  }

  clearPreviosDataForFreshSearch(){
    this.userFilter.name = "";
    this.noOfDaysInMadeena = 0;
    this.selecteddaysmakkah = 0;
    this.arrivalDate = null;
    this.diffDays = 0;
    this.selectedHotel = [];
    this.selectedRoomGroups = [];
    this.makkaHotelsList = [];
    this.madinaHotelsList = [];
    this.makkahticked = false;
    this.madeenaticked = false;
    this.madeendetailshow = false;
    this.mdate = null
    this.stageArray = [];
  }
    
  @ViewChild("stepper", { static: true })
  stepper: MatStepper;
  move(index: number) {
    this.stepper.selectedIndex = index;
  }
  
  transportSearch()
  {
    this.filtershow = true;
    this.vehicleCount = Math.ceil((this.userDetails.travallersCount)/this.vehicleMax);
    const date = this.helperService.dateFormaterMdy(this.userDetails.transportStartDate);
    this.spinner.show();
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
        this.spinner.hide();
        if ((response && response.transportations && response.transportations.length == 0) ||  (response && response.transportations && response.transportations.filter(x=>x.vehicle_types.length > 0) == 0)) {
          Swal.fire({
            text:this.translateService.instant('Sorry, we could not find transport for this route'),
            icon: "warning",
            confirmButtonText: this.translateService.instant('Modify search and try again'),
          });
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

  toggleSection(i,index){
    this.transportList[i].vehicle_types[index].toggle = true;
  }
  
  showMainFilter(){
    this.moreFilterArrow = !this.moreFilterArrow;
  }
  showRefundableFilter() {
    this.refundableFilterArrow = !this.refundableFilterArrow;
  }

  closeFilterPoup() {
    this.moreFilterArrow = !this.moreFilterArrow;
  }

  add(i,index) {
      if (this.transportList[i].vehicle_types[index].count < this.transportList[i].vehicle_types[index].categories[0].capacity) {
        this.transportList[i].vehicle_types[index].count = this.transportList[i].vehicle_types[index].count + 1;
        this.transportList[i].totalCount = this.transportList[i].vehicle_types[index].count;
      } else {
        this.notifyService.showWarning(this.translateService.instant("maximum number of adult reached"));
      }
  }

  minus(i,index) {
      if (this.transportList[i].vehicle_types[index].count > 1) {
        this.transportList[i].vehicle_types[index].count = this.transportList[i].vehicle_types[index].count - 1;
        this.transportList[i].totalCount = this.transportList[i].vehicle_types[index].count;
      }
  }

  togglevehicleSection(i,index){
    this.transportList[i].vehicle_types[index].toggle_vehicle = true;
  }

  addadult() {
    this.countadult = this.countadult + 1;
  }

  minusadult() {
    if (this.countadult > 1) {
      this.countadult = this.countadult - 1;
    }
  }
  addchild() {
    this.countchild = this.countchild + 1;
  }
  
  travelersB(){
    this.displayTabtravel = !this.displayTabtravel;
  }
  travelersButton() {
    this.rooms = [];
      let adultsperroom = 5;
      let adults = this.countadult;
      let children = this.countchild;
      let nofrooms = Math.ceil(this.countadult / adultsperroom);
      let childrenperroom = 4;
      let extrachildrenroom = children % nofrooms;
      let index = 0;
      while (nofrooms > 0) {
        let tempRoom: Room = {
          id: index,
          adults: 1,
          children: 0,
          child_ages: [],
          pax_info_str:null,
          seq_no:""
        };
        if (adults > 0) {
          if (adults < adultsperroom) {
            tempRoom.adults = adults;
          } else {
            tempRoom.adults = adultsperroom;
          }
          adults -= adultsperroom;
        }
        if (children > 0) {
          if (children < childrenperroom) {
            tempRoom.children = children;
          } else {
            tempRoom.children = childrenperroom;
          }

          children -= childrenperroom;
          if (extrachildrenroom > 0 && extrachildrenroom == nofrooms) {
            tempRoom.children += 1;
            extrachildrenroom -= 1;
            children -= 1;
          }
        }
        index += 1;
        nofrooms -= 1;
        this.rooms.push(tempRoom);
      }
    }

    showTrasportCount() {
      this.displayVehicleCount = !this.displayVehicleCount;
    }
    showPersonCount(){
    this.displayPersonCount = !this.displayPersonCount;
    }

  addrooms() {
    let tempRoom: Room = {
      id: this.rooms.length + 1,
      adults: 1,
      children: 0,
      child_ages: [],
      pax_info_str:null,
      seq_no:""
    };

    this.rooms.push(tempRoom);
  }

  removerooms(i: number) {
    this.rooms.splice(i, 1);
  }
  
  minusadultroom(id: number) {
    this.rooms.forEach((value, index) => {
      if (value.id == id) {
        if (this.rooms[index].adults > 1) {
          this.rooms[index].adults = value.adults - 1;
        }
      }
    });
  }
    
  showroomselection() {
    this.gettripDays();
    this.showModalroom = true;
    let totalCount = this.countadult + this.countchild;
    if(totalCount < 5){
      this.vehicleTypeItems = [{item_id: "1", item_text: "Sedan Car"}];
      this.vehicleId =1;
      this.vehicleMax = 4;
      this.appStore.vehicleMax = 4;
    }
    else if(totalCount < 7 && totalCount > 5){
      this.vehicleTypeItems=[{item_id: "2", item_text: "SUV Car"}];
      this.vehicleId =2;
      this.vehicleMax = 7;
      this.appStore.vehicleMax = 7;
    }
    else if(totalCount > 7){
      this.vehicleTypeItems = [{item_id: "3", item_text: "Bus"}];
      this.vehicleId =3;
      this.vehicleMax = 60;
      this.appStore.vehicleMax = 60;
    }
    (<HTMLElement>document.getElementById("flightArrivalDate")).style.display = "none";
  }
  
  gettripDays(){
    this.onwerdArivalTime = this.datepipe.transform(this.onwerdArivalTime , "MM/dd/yyyy");
    this.returnDepartTime = this.datepipe.transform(this.returnDepartTime , "MM/dd/yyyy");
    this.firstDate = new Date(this.onwerdArivalTime.split("/")[2], this.onwerdArivalTime.split("/")[0]-1, this.onwerdArivalTime.split("/")[1]);
    this.secondDate = new Date(this.returnDepartTime.split("/")[2], this.returnDepartTime.split("/")[0]-1, this.returnDepartTime.split("/")[1]);
    this.diffDays = Math.round(Math.abs((this.firstDate - this.secondDate) / (24 * 60 * 60 * 1000)));
  }
  
  minuschild() {
    if (this.countchild > 0) {
      this.countchild = this.countchild - 1;
    }
  }
  addinfa() {
    this.countinfa = this.countinfa + 1;
  }
  addInfant() {
    this.infantCount = this.infantCount + 1;
  }
  minusInfant() {
    if (this.infantCount > 0) {
      this.infantCount = this.infantCount - 1;
    }
  }
  addAdult() {
    this.adultCount = this.adultCount + 1;
  }
  minusAdult() {
    if (this.adultCount > 0) {
      this.adultCount = this.adultCount - 1;
    }
  }
  minusChild() {
    if (this.childCount > 0) {
      this.childCount = this.childCount - 1;
    }
  }

  addChild() {
    this.childCount = this.childCount + 1;
  }

  minusinfa() {
    if (this.countinfa > 0) {
      this.countinfa = this.countinfa - 1;
    }
  }

  madenaVehicleDisplay() {
    this.showMadenaTransportVehicleList = true;
  }

  hide() {
    this.showModal = false;
  }

  setTravellerPopup() {
    this.showModalroom = true;
  }

  toggleButton() {
    this.displayTab = !this.displayTab;
    this.changeButton = !this.changeButton;
  }

  hideroomselection() {
    this.showModalroom = false;
  }

  hideroomselectionPopup() {
    this.showModalroom = false;
  }

  mainTraveller(i){
    this.rooms.forEach(value => {
      for(let j=0;j< value.adults;j++){
        this.mainTraveller[j] = false;
      }
    });
      this.mainTraveller[i] = true;
  }

  continuePayment(){
    this.getTripData()
    this.move(4);
  }

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
      this.spinner.show();
      this.common.checkAvailability(data.id).subscribe((response)=> {
        this.spinner.hide();
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
          this.spinner.hide();
          if((response.makkah_trip_hotel && response.makkah_trip_hotel.success == false) || (response.medinah_trip_hotel && response.medinah_trip_hotel.success == false) ||(response.trip_transportation && response.trip_transportation.success == false) || response.refetch_trip == true ){
            (<HTMLInputElement>document.getElementById("payBtn")).style.display = "none";
            (<HTMLInputElement>document.getElementById("continueBooking")).style.display = "block";
          }else{
            (<HTMLInputElement>document.getElementById("payBtn")).style.display = "block";
            (<HTMLInputElement>document.getElementById("continueBooking")).style.display = "none";
          }
          
          if(response.refetch_trip == true){
            Swal.fire({
              text:this.translateService.instant('Price has been changed'),
              icon: "warning",
              confirmButtonText: this.translateService.instant('OK'),
            });
            this.getTripData();
          } 
        });
    });
  }

  startTimer() {
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
        Swal.fire({
          icon: 'error',
          title: this.translateService.instant('Oops...'),
          text: this.translateService.instant('Account Does Not Exist'),
        })
      });
    }else{
      this.notifyService.showWarning(this.translateService.instant("Payment Credentials Missing"))
    }
  }

  changemakkaHotel(){
    this.move(0);
    //this.moveToMakkaTab();
    (<HTMLElement>document.getElementById("changemakkaHotel")).style.backgroundColor = "unset";
    (<HTMLInputElement>document.getElementById("payBtn")).style.display = "none";
    (<HTMLInputElement>document.getElementById("continueBooking")).style.display = "block";
  }

  changemadinahHotel(){
    if(this.steps.length > 2){
      this.move(1);
    }else{
      this.move(0);
    }
    //this.moveToMadeenaTab();
    (<HTMLElement>document.getElementById("changemadinahHotel")).style.backgroundColor = "unset";
    (<HTMLInputElement>document.getElementById("payBtn")).style.display = "none";
    (<HTMLInputElement>document.getElementById("continueBooking")).style.display = "block";
  }

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
  public name = "Cricketers";
  public data = [];
  public settings = {};
   
  ngOnInit() {
    if (!this.authService.isLoggedIn) {
      this.notifyService.showWarning(this.translateService.instant("Please Login"))
      this.router.navigate(['/login']);
    }
    if(!this.appStore.showShimmer){this.appStore.showShimmer = true,this.showShimmer = true}
    this.rooms = [] ; 
    this.fetchNessoryApisForTransport();
    this.userDetails = CreateTripComponent.UserObjectData;
    this.appStore.userDetails = CreateTripComponent.UserObjectData;
    if(typeof(this.userDetails) == 'undefined'){
        this.router.navigate(['subagent/home'])
    }
    if(this.userDetails){
    this.totalTravellers = this.userDetails.travallersCount;
    this.noOfDaysInMakkah = this.appStore.noOfDaysInMakkah;
    this.makkahCheckInDate = this.userDetails.makkahCheckinDate;
    this.makkahCheckOutDate = this.userDetails.makkahCheckoutDate;
    this.transportStartDate = this.userDetails.transportStartDate;
    }
    this.travellersCount = this.appStore.totalTravellers;
    this.rooms = CreateTripComponent.RoomData;
    this.appStore.roomArray = CreateTripComponent.RoomData;
    this.appStore.stepperIndex = 0;
    this.selectedCurrency = "SAR";
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

    this.settings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      enableCheckAll: true,
      selectAllText: "Select All",
      unSelectAllText: "Unselect ALL",
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 2,
      searchPlaceholderText: "Search",
      noDataAvailablePlaceholderText: "No Services",
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };
  }

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

  callCorrespongingSteppers(){
    if(this.steps.includes("1")){
      this.makkahloader = true;
      this.hotelSearch("MAKKA");
    }
    
    if(!this.steps.includes("1") && this.steps.includes("2")){
      this.madeenaloader = true;
      this.hotelSearch("MADEENA");
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

  get f1() { return this.paymentForm.controls; }

  onSubmit(){
    
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

  public save() {
    
  }

  public onFilterChange(item: any) {
    
  }

  public onDropDownClose(item: any) {
    
  }

  public onItemSelect(item: any) {
    const q = []
    this.transportListData.forEach((value, index) => {
      const a = value.vehicle_types.map(x=>x.categories[0].additional_services.map(a=>a.additional_service_code.includes(item.item_id)))
    
      a.forEach(y => {
        if(y == [true]){
          q.push(value)
        
        }
      });
      
    });
    this.transportList = q;
  }

  public onRouteSelect(item: any) {
    this.routeId = item.item_id;
    this.disableBtn = true;
  }

  onCategorySelect(item: any) { 
    this.categoryId = item.item_id;
    this.categoryIds.push(this.categoryId)
        const q = [];
        this.categoryId = item.item_id;
        this.transportListData.forEach((value, index) => {
          this.categoryIds.forEach(id => {
            const a = value.vehicle_types.map(x=>x.categories[0].category_code == id)
            if(a[0]){
              q.push(value)
            }
          });
        });
    this.transportList = q.filter(this.helperService.onlyUnique);
  }

  onCategoryDeselect(item: any) { 
    const index = this.categoryIds.indexOf(item.item_id);
    if (index > -1) {
      this.categoryIds.splice(index, 1);
    }
        const q = [];
        this.categoryId = item.item_id;
        this.transportListData.forEach((value, index) => {
          this.categoryIds.forEach(id => {
            const a = value.vehicle_types.map(x=>x.categories[0].category_code == id)
            if(a[0]){
              q.push(value)
            }
          });
        });
        this.transportList = q.filter(this.helperService.onlyUnique);
  }
  
  onadditionalDeSelectAll(items: any){
    this.transportList = this.transportListData;
  }

  onCategoryDeSelectAll(items: any){
    this.transportList = this.transportListData;
  }
  
  onadditionalItemSelect(item: any) {
    this.additionl_serviceId=[];
    let id = item.item_id
    this.additionl_serviceId.push(id);
    const q = [];
    this.transportListData.forEach((value, index) => {
      this.additionl_serviceId.forEach(id => {
        const a = value.vehicle_types.map(x=>x.categories[0].additional_services.map(c=> c.additional_service_code) == id)
        if(a[0]){
          q.push(value)
        }
      });
    });
    this.transportList = q.filter(this.helperService.onlyUnique);
  }

  onadditionalItemDeselect(item: any) {
    const index = this.additionl_serviceId.indexOf(item.item_id);
    if (index > -1) {
      this.additionl_serviceId.splice(index, 1);
    }
    const q = [];
    this.transportListData.forEach((value, index) => {
      this.additionl_serviceId.forEach(id => {
        const a = value.vehicle_types.map(x=>x.categories[0].additional_services.map(c=> c.additional_service_code) == id)
        if(a[0]){
          q.push(value)
        }
      });
    });
    this.transportList = q.filter(this.helperService.onlyUnique);
  }
    
  onadditionalsericeSelectAll(items: any) {
    this.additionlserviceId = items.map(x=>x.item_id);
    const q = [];
    this.transportListData.forEach((value, index) => {
      this.additionlserviceId.forEach(id => {
        const a = value.vehicle_types.map(x=>x.categories[0].additional_services.map(c=> c.additional_service_code) == id)
        if(a[0]){
          q.push(value)
        }
      });
    });
    this.transportList = q.filter(this.helperService.onlyUnique);
  }

  onadditionalSelectAll(items: any) {
    this.additionl_serviceId = items.map(x=>x.item_id);
    const q = [];
    this.transportListData.forEach((value, index) => {
      this.additionl_serviceId.forEach(id => {
        const a = value.vehicle_types.map(x=>x.categories[0].additional_services.map(c=> c.additional_service_code) == id)
        if(a[0]){
          q.push(value)
        }
      });
    });
    this.transportList = q.filter(this.helperService.onlyUnique);
  }

  public onVehicleSelect(item: any) {
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

  public onDeSelect(item: any) {
  }

  public onSelectAll(items: any) {
  }

  public onDeSelectAll(items: any) {
  }

  onNationalityDeselect(item:any){
    this.countryCode = null;
    this.searchServiceButtonActive = false
  } 

  onCountryDeselect(item:any){
    this.countryCode = null;
    this.searchServiceButtonActive = false
  }

  public onCountrySelect(item: any) {
    this.countryCode = item.item_id;
    this.selectedCountry = item.item_id;
    if(this.nationalityCode && this.countryCode){
      this.searchServiceButtonActive = true
    }
  }

  public clearTransport(item){
    this.transportList = [];
    this.disableBtn = false;
  }

  images = [
    "assets/images/mekka.jpg",
    "assets/images/namaz.jpg",
    "assets/images/mecca_great_mosque_600.png",
  ];
    
  setRoomAllocationPopup(){
    (<HTMLElement>document.getElementById("flightArrivalDate")).style.display = "block";
    let totalCount = this.countadult + this.countchild;
    if(totalCount < 5){
      this.vehicleTypeItems = [{item_id: "1", item_text: "Sedan Car"}];
      this.vehicleId =1;
      this.vehicleMax = 4;
    }
    else if(totalCount < 7 && totalCount > 5){
      this.vehicleTypeItems=[{item_id: "2", item_text: "SUV Car"}];
      this.vehicleId =2;
      this.vehicleMax = 7;
    }
    else if(totalCount > 7){
      this.vehicleTypeItems = [{item_id: "3", item_text: "Bus"}];
      this.vehicleId =3;
      this.vehicleMax = 60;
    }
    this.showElement = true;
      setTimeout(() => {
        this.showElement = false;
      }, 5000);
      this.travelersButton();
      this.showModalroom = true;
    
    this.IsHidden = true;
  }
  
  returnToPaymentPage(){
    if(this.steps.includes("1") && this.steps.includes("2") && this.steps.includes("3")){
      this.move(3)
    }else{
      this.stepper.next();
    }
  }

  moveToCorrespondingStage(n:number){
    var largest = 0;
    if(this.stageArray.length > 0){
      this.stageArray = this.stageArray.filter(this.helperService.onlyUnique)
    }
    this.stageArray.forEach((element)=>{
      if (element>largest) {
        largest = element;
      }
    })
    if(largest > n){
      this.move(largest);
    }else{
      this.move(n)
    }
  }
  
  public moveToPaymentPage() : void {
    if(this.steps.includes("1") && this.steps.includes("2") && this.steps.includes("3")){
      this.move(3)
    }else{
      this.stepper.next();
    }
  }
      
   /*
 * this method for call back from hotel-details-popup component
 */
  createTripHandle(event){
    this.move(this.appStore.stepperIndex)
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

  searchTransportList(){
    this.showtransportsearch = false;
  }
}