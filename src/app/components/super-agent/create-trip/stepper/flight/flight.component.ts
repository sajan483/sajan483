import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from "rxjs/operators";
import { Observable } from 'rxjs';
import { listAirport } from 'src/app/models/listAirport';
import { airlineList } from 'src/app/models/airlineList';
import { StepperComponent } from '../stepper.component';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { AppStore } from 'src/app/stores/app.store';
import { HelperService } from 'src/app/common/services/helper-service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  freeArray = ["1","2","3","4","","","","","","","",""];
  loader:boolean=true;
  available:boolean=true;
  modifyButton:boolean=true;
  today = new Date();
  searchForm: FormGroup;
  fareForm: FormGroup;
  returnMin:Date;
  airportListFilteredSrc:Observable<listAirport[]>;
  airportListFilteredDest:Observable<listAirport[]>;
  airlinesFiltered: Observable<airlineList[]>;
  airportsSrc: listAirport[] = [];
  airportsDest: listAirport[] = [];
  airlineList: airlineList[] = [];
  source = new FormControl();
  destination = new FormControl();
  airline = new FormControl();
  flightListingFlag:boolean=false;
  fromLocation:any = {
    iata:"DXB",
    city:"Dubai"
  };
  destLocation:any = {
    iata:"JED",
    city:"Jeddah"
  };
  airlineDetails:any = {
    name:"Emirates",
    code:"EK"
  };
  searchData;
  flightSearchData;
  searchResult={
    destLocation:{
      iata:'',
      city:''
    },
    fromLocation:{
      iata:'',
      city:''
    },
    departureFlights:'',
    returnFlights:''
  };
  footerFlag:string='false';
  footerData;
  fareSelection:boolean=false;
  searchError:boolean=false;
  listBody

  constructor(
    private fb: FormBuilder,
    private commonService: SuperAgentApiService, private stepper: StepperComponent, private appStore: AppStore, private helperService : HelperService) { }

  ngOnInit() {
    this.searchData = JSON.parse(sessionStorage.getItem('searchData'))
    this.flightSearchData = this.searchData.flightData
    console.log(this.flightSearchData);
    this.searchForm = this.fb.group({
			departDate: ['', Validators.required],
			returnDate: ['', Validators.required],
    });
    this.fareForm = this.fb.group({
			adult: ['', Validators.required],
			child: [0],
			infant: [0]
    });
    this.searchResult.destLocation=this.destLocation
    this.searchResult.fromLocation=this.fromLocation
    this.listFlights()
    this.listBody = {
      boarding_airport:this.flightSearchData.source,
      destination_airport:this.flightSearchData.destination,
      airlines:this.flightSearchData.airline,
      onward_date: this.flightSearchData.departureDate,
      return_date: this.flightSearchData.returnDate,
    };
  }

  get form() { return this.searchForm.controls; }
  get fare() { return this.fareForm.controls}

  get submit() {
    if(this.source.value != null && this.source.value != '' && this.destination.value != null && this.destination.value != '' && this.airline.value != null && this.airline.value != '' && this.searchForm.valid){
      return true
    }
    else{
      return false
    }
  }

  get continue(){
    if(this.fareForm.valid){
      return false
    }
    else{
      return true
    }
  }

  getfooterFlag(event){
    this.footerFlag = event
  }

  getfooterData(event){
    this.footerData=event
  }

  modifySearch(){
    this.source.setValue(this.flightSearchData.source)
    this.destination.setValue(this.flightSearchData.destination)
    this.airline.setValue(this.flightSearchData.airline)
    this.searchForm.controls.departDate.setValue(this.flightSearchData.departureDate);
    this.searchForm.controls.returnDate.setValue(this.flightSearchData.returnDate);
    this.getAirportListSrc()
    this.getAirportListDest()
    this.getAirlineList()
    this.modifyButton=false;
  }

  setReturnMinDate(){
   this.returnMin=this.form.departDate.value
  }

  getAirportListSrc(){
    this.airportListFilteredSrc = this.source.valueChanges.pipe(
      startWith(" "),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filterAirportListSrc(name) : this.airportsSrc.slice())
    );
  }
  
  getAirportListDest(){
    this.airportListFilteredDest = this.destination.valueChanges.pipe(
      startWith(" "),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filterAirportListDest(name) : this.airportsDest.slice())
    );
  }

  getAirlineList(){
    this.airlinesFiltered = this.airline.valueChanges.pipe(
      startWith(" "),
      map((state) => (state ? this._filterAirlineList(state) : this.airlineList.slice()))
    );
  }

  private _filterAirportListSrc(value: string): listAirport[] {
    const filterValue = value.toLowerCase();
    this.airportsSrc = [];
    this.commonService.getAirportListSrc(value).subscribe((data) => {
      for (const d of data as any) {
        this.airportsSrc.push(d);
      }
    });
    return this.airportsSrc;
  }

  private _filterAirportListDest(value: string): listAirport[] {
    const filterValue = value.toLowerCase();
    this.airportsDest = [];
    this.commonService.getAirportListSrc(value).subscribe((data) => {
      for (const d of data as any) {
        this.airportsDest.push(d);
      }
    });
    return this.airportsDest;
  }

  private _filterAirlineList(value: string): airlineList[] {
    const filterValue = value.toLowerCase();
    this.airlineList = [];
    this.commonService.getairlineslist(value).subscribe((data) => {
      for (const d of data as any) {
        this.airlineList.push(d);
      }
    });
    return this.airlineList;
  }

  setFromLocation(data){
    this.fromLocation.city = data.city
    this.fromLocation.iata = data.iata
    this.searchResult.fromLocation.city = data.city
  }

  setDestLocation(data){
    this.destLocation.city = data.city
    this.destLocation.iata = data.iata
    this.searchResult.destLocation.city = data.city
  }

  setAirline(data){
    this.airlineDetails.code = data.code
    this.airlineDetails.name = data.name
  }

  searchFlights(){
    let ddate
    let rdate
    if(this.searchForm.controls.departDate.value == this.flightSearchData.departureDate){
      ddate = this.flightSearchData.departureDate
    } else {
      ddate = this.searchForm.controls.departDate.value.toJSON().split("T")[0]
    }
    if(this.searchForm.controls.returnDate.value == this.flightSearchData.returnDate){
      rdate = this.flightSearchData.returnDate
    } else {
      rdate = this.searchForm.controls.returnDate.value.toJSON().split("T")[0]
    }
    var searchBody = {
      boarding_airport:this.source.value,
      destination_airport:this.destination.value,
      airlines:this.airlineDetails.code,
      onward_date: ddate,
      return_date: rdate,
    };
    if(JSON.stringify(this.listBody)===JSON.stringify(searchBody)){
      this.searchError=true
    }
    else {
      this.searchError=false;
      this.listBody=searchBody
      this.footerFlag='false'
      if(this.submit){
        this.loader=true
        this.flightListingFlag=false
        this.commonService.searchFlights(searchBody).subscribe((data) => {
          if(data.flights[0].length > 0 && data.flights[1].length > 0){
            data.flights[0].forEach(element => {element.isTouched = false});
            data.flights[1].forEach(element => {element.isTouched = false});
            this.searchResult.departureFlights = data.flights[0].sort((a, b) => (a.GrossFare) - (b.GrossFare));
            this.searchResult.returnFlights = data.flights[1].sort((a, b) => (a.GrossFare) - (b.GrossFare));
            this.available=true
            this.loader=false;
            this.flightListingFlag = true;
          }
          else {
            this.loader=false;
            this.available=false;
          }
        })
      }
    }
  }

  listFlights(){
    var body = {
      boarding_airport:this.flightSearchData.source,
      destination_airport:this.flightSearchData.destination,
      airlines:this.flightSearchData.airline,
      onward_date: this.flightSearchData.departureDate,
      return_date: this.flightSearchData.returnDate,
    };
    this.commonService.searchFlights(body).subscribe((data) => {
      if(data.flights[0].length > 0 && data.flights[1].length > 0){
        this.searchResult.departureFlights = data.flights[0].sort((a, b) => (a.GrossFare) - (b.GrossFare));
        this.searchResult.returnFlights = data.flights[1].sort((a, b) => (a.GrossFare) - (b.GrossFare));
        this.loader=false;
        this.flightListingFlag = true;
        this.available=true;
        this.appStore.tui = data.tui;
      }
      else{
        this.loader=false;
        this.available=false;
      }
    })
  }

  navigateFareSelection(){
    this.fareSelection = true
  }

  navigateHotel(component, id){
    this.stepper.stepContent(component,id)
    this.saveFlight()
  }

  saveFlight(){
    let data = {
      "start_date": this.flightSearchData.departureDate,
      "end_date": this.flightSearchData.returnDate,
      "max_passengers":StepperComponent.searchData.travellersData.adult,
      "num_days": this.helperService.noOfDaysBetweenTwoDates(this.flightSearchData.departureDate,this.flightSearchData.returnDate),
      "arr_date_time_stamp": Math.floor(new Date(this.flightSearchData.returnDate).getTime()/1000),
      "arr_airport_code": this.destLocation.iata,
      "title": "",  
        "trip_flights": [
        {
          "adult_price": this.fareForm.controls.adult.value,
          "infant_price": this.fareForm.controls.infant.value,
          "child_price": this.fareForm.controls.child.value,
          "onward_flight": {
            "flight_id": this.footerData.depFlight.id,
            "flight_type": "ONWARD",
            "boarding_airport": this.footerData.depFlight.From,
            "destination_airport": this.footerData.depFlight.To,
            "departure_at_timestamp": Math.floor(new Date(this.footerData.depFlight.DepartureTime).getTime()/1000),
            "arrival_at_timestamp": Math.floor(new Date(this.footerData.depFlight.ArrivalTime).getTime()/1000),
            "flight_no": this.footerData.depFlight.FlightNo,
            "instructions": this.footerData.depFlight.Notice,
            "fare_class": this.footerData.depFlight.FareClass,
            "stops": this.footerData.depFlight.Stops,
            "seats": this.footerData.depFlight.Seats,
            "index": this.footerData.depFlight.Index,
            "provider": this.footerData.depFlight.Provider,
            "vac": this.footerData.depFlight.VAC,
            "mac": this.footerData.depFlight.MAC,
            "oac": this.footerData.depFlight.OAC,
            "gross_fare": this.footerData.depFlight.GrossFare,
            "total_commission": this.footerData.depFlight.TotalCommission,
            "airline_name": this.footerData.depFlight.AirlineName,
            "aircraft": this.footerData.depFlight.AirCraft,
            "fbc": this.footerData.depFlight.FBC,
            "netfare": this.footerData.depFlight.NetFare,
            "refundable": this.footerData.depFlight.Refundable,
            "alliances": this.footerData.depFlight.Alliances,
            "rbd": this.footerData.depFlight.RBD,
            "cabin": this.footerData.depFlight.Cabin,
            "promo": this.footerData.depFlight.Promo,
            "connections": this.footerData.depFlight.Connections,
            "search_tui":  this.appStore.tui,
            "duration":this.footerData.depFlight.Duration
          },
          "return_flight": {
            "flight_id":this.footerData.retFlight.id,
            "flight_type": "RETURN",
            "boarding_airport": this.footerData.retFlight.From,
            "destination_airport": this.footerData.retFlight.To,
            "departure_at_timestamp": Math.floor(new Date(this.footerData.retFlight.DepartureTime).getTime()/1000),
            "arrival_at_timestamp": Math.floor(new Date(this.footerData.retFlight.DepartureTime).getTime()/1000),
            "flight_no": this.footerData.retFlight.FlightNo,
            "instructions": this.footerData.retFlight.Notice,
            "fare_class": this.footerData.retFlight.FareClass,
            "stops": this.footerData.retFlight.Stops,
            "seats": this.footerData.retFlight.Seats,
            "index": this.footerData.retFlight.Index,
            "provider": this.footerData.retFlight.Provider,
            "vac": this.footerData.retFlight.VAC,
            "mac": this.footerData.retFlight.MAC,
            "oac": this.footerData.retFlight.OAC,
            "gross_fare": this.footerData.retFlight.GrossFare,
            "total_commission": this.footerData.retFlight.TotalCommission,
            "airline_name": this.footerData.retFlight.AirlineName,
            "aircraft": this.footerData.retFlight.AirCraft,
            "fbc": this.footerData.retFlight.FBC,
            "netfare": this.footerData.retFlight.NetFare,
            "refundable": this.footerData.retFlight.Refundable,
            "alliances": this.footerData.retFlight.Alliances,
            "rbd": this.footerData.retFlight.RBD,
            "cabin": this.footerData.retFlight.Cabin,
            "promo": this.footerData.retFlight.Promo,
            "connections": this.footerData.retFlight.Connections,
            "search_tui":  this.appStore.tui,
            "duration":this.footerData.retFlight.Duration
          },
          "trip_type": "round_trip",
        }
      ]
    }
    var currency = this.appStore.currencyCode
    var lang = this.appStore.langCode
    this.commonService.createPackage(data,currency,lang).subscribe((data) => {
      this.appStore.packageId = data.id     
    })
  }

}