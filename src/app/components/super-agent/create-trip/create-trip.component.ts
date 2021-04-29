import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from "rxjs/operators";
import { Observable } from 'rxjs';
import { listAirport } from 'src/app/models/listAirport';
import { airlineList } from 'src/app/models/airlineList';
import { MatDatepicker } from '@angular/material';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { Router } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';
import { AppStore } from 'src/app/stores/app.store';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent implements OnInit {

  today = new Date().toJSON().split("T")[0];
  todayStamp = new Date();
  searchForm: FormGroup;
  returnMin=new Date();
  mekkahInMin:Date;
  mekkahInMax:Date;
  mekkahOutMin:Date;
  mekkahOutMax:Date;
  medinahInMin:Date;
  medinahInMax:Date;
  medinahOutMin:Date;
  medinahOutMax:Date;
  airportListFilteredSrc:Observable<listAirport[]>;
  airportListFilteredDest:Observable<listAirport[]>;
  airlinesFiltered: Observable<airlineList[]>;
  airportsSrc: listAirport[] = [];
  airportsDest: listAirport[] = [];
  airlineList: airlineList[] = [];
  source = new FormControl();
  destination = new FormControl();
  airline = new FormControl();
  departureFlights=[];
  returnFlights=[];
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
  searchDataOld;
  destError:boolean=false;
  srcError:boolean=false;


  @ViewChild('pickerReturn' , {read: undefined, static: false}) pickerReturn: MatDatepicker<Date>;
  @ViewChild('pickerMedOut' , {read: undefined, static: false}) pickerMedOut: MatDatepicker<Date>;
  @ViewChild('pickerMedIn' , {read: undefined, static: false}) pickerMedIn: MatDatepicker<Date>;
  @ViewChild('pickerMekOut' , {read: undefined, static: false}) pickerMekOut: MatDatepicker<Date>;

  constructor(
    private fb: FormBuilder,
    private commonService: SuperAgentApiService,
    private router: Router,
    private appStore:AppStore) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      adult:[1, Validators.required],
      children:[0],
      infant:[0],
			departDate: ['', Validators.required],
			returnDate: ['', Validators.required],
      medIn: ['', Validators.required],
			medOut: ['', Validators.required],
      mekIn: ['', Validators.required],
			mekOut: ['', Validators.required]
    });
     if(sessionStorage.getItem('searchData') == null){
      this.source.setValue(this.fromLocation.iata)
      this.destination.setValue(this.destLocation.iata)
      this.airline.setValue(this.airlineDetails.name)
      this.searchForm.controls.departDate.setValue(this.todayStamp);
      this.returnMin = this.incrementDate(this.searchForm.controls.departDate.value,1)
      this.searchForm.controls.returnDate.setValue(this.incrementDate(this.searchForm.controls.departDate.value,14));
      this.searchForm.controls.mekIn.setValue(this.todayStamp);
      this.searchForm.controls.mekOut.setValue(this.incrementDate(this.searchForm.controls.mekIn.value,2));
      this.searchForm.controls.medIn.setValue(this.searchForm.controls.mekOut.value);
      this.searchForm.controls.medOut.setValue(this.incrementDate(this.searchForm.controls.medIn.value,2));
      this.mekkahInMin = this.form.departDate.value;
      this.mekkahInMax = this.form.returnDate.value;
      this.mekkahOutMin= this.incrementDate(this.form.mekIn.value,1)
      this.mekkahOutMax = this.form.returnDate.value;
      this.medinahOutMax = this.form.returnDate.value;
      this.medinahInMin = this.form.mekOut.value
      this.medinahInMax = this.form.returnDate.value;
      this.medinahOutMin = this.incrementDate(this.form.medIn.value,1)
      
    } else {
      this.searchDataOld = JSON.parse(sessionStorage.getItem('searchData'))
      this.source.setValue(this.searchDataOld.flightData.source)
      this.destination.setValue(this.searchDataOld.flightData.destination)
      this.airline.setValue(this.searchDataOld.flightData.airlineName)
      this.searchForm.controls.adult.setValue(this.searchDataOld.travellersData.adult)
      this.searchForm.controls.departDate.setValue(this.searchDataOld.flightData.departureDate);
      this.searchForm.controls.returnDate.setValue(this.searchDataOld.flightData.returnDate);
      this.searchForm.controls.mekIn.setValue(this.searchDataOld.mekkahData.checkIn);
      this.searchForm.controls.mekOut.setValue(this.searchDataOld.mekkahData.checkOut);
      this.searchForm.controls.medIn.setValue(this.searchDataOld.medinaData.checkIn);
      this.searchForm.controls.medOut.setValue(this.searchDataOld.medinaData.checkOut);
      this.destLocation.city = this.searchDataOld.flightData.destinationName
      this.fromLocation.city = this.searchDataOld.flightData.sourceName
    }
    
    this.getAirportListSrc()
    this.getAirportListDest()
    this.getAirlineList()
  }

  incrementDate(date,days) {
    var d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
  }

  get form() { return this.searchForm.controls; }

  get submit() {
    if(this.searchForm.valid && !this.destError && !this.srcError){
      return true
    }
    else{
      return false
    }
  }

  setReturnMinDate(){
   this.returnMin= this.incrementDate(this.form.departDate.value,1) 
   this.pickerReturn.open()
  }

  setMekkahInMinDate(){
    this.mekkahInMax = this.form.returnDate.value;
    this.mekkahOutMax = this.form.returnDate.value;
    this.medinahOutMax = this.form.returnDate.value;
    this.medinahInMax = this.form.returnDate.value;
    this.mekkahInMin = this.form.departDate.value
    this.medinahOutMax = this.form.returnDate.value
   }

  setMekkahOutMinDate(){
    this.mekkahOutMin=this.incrementDate(this.form.mekIn.value,1)
    this.pickerMekOut.open()
  }

  setMedinahInMinDate(){
   this.medinahInMin=this.form.mekOut.value
   this.pickerMedIn.open()
  }

  setMedinahOutMinDate(){
    this.medinahOutMin=this.incrementDate(this.form.medIn.value,1)
    this.pickerMedOut.open()
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
    this.srcError = false
    this.destError = false
    if(this.destLocation.city == data.city){
      this.srcError = true
    }
    else{
      this.fromLocation.city = data.city
      this.fromLocation.iata = data.iata
    }
  }

  setDestLocation(data){
    this.destError = false
    this.srcError = false
    if(this.fromLocation.city == data.city){
      this.destError = true
    }
    else{
      this.destLocation.city = data.city
      this.destLocation.iata = data.iat
    }
  }

  setAirline(data){
    this.airlineDetails.code = data.code
    this.airlineDetails.name = data.name
  }

  submitData(){
    var a = parseInt(this.form.adult.value);
    var b = parseInt(this.form.children.value);
    var c = parseInt(this.form.infant.value)
    var dep = (this.form.departDate.value.length < 11)?this.form.departDate.value:this.form.departDate.value.toJSON().split("T")[0]
    var ret = (this.form.returnDate.value.length < 11)?this.form.returnDate.value:this.form.returnDate.value.toJSON().split("T")[0]
    var mkIn = (this.form.mekIn.value.length < 11)?this.form.mekIn.value:this.form.mekIn.value.toJSON().split("T")[0]
    var mkOut = (this.form.mekOut.value.length < 11)?this.form.mekOut.value:this.form.mekOut.value.toJSON().split("T")[0]
    var mdIn = (this.form.medIn.value.length < 11)?this.form.medIn.value:this.form.medIn.value.toJSON().split("T")[0]
    var mdOut = (this.form.medOut.value.length < 11)?this.form.medOut.value:this.form.medOut.value.toJSON().split("T")[0] 
    this.appStore.totalTravellers = a+b+c;
    this.searchData = {
      travellersData : {
        adult: this.form.adult.value,
        childret:this.form.children.value,
        infant:this.form.infant.value 
      },
      flightData:{
        source:this.source.value,
        sourceName:this.fromLocation.city,
        destination:this.destination.value,
        destinationName:this.destLocation.city,
        departureDate:this.incrementDate(dep,1),
        returnDate:this.incrementDate(ret,1),
        airline:this.airlineDetails.code,
        airlineName:this.airlineDetails.name
      },
      mekkahData:{
        checkIn:this.incrementDate(mkIn,1),
        checkOut:this.incrementDate(mkOut,1)
      },
      medinaData:{
        checkIn:this.incrementDate(mdIn,1),
        checkOut:this.incrementDate(mdOut,1)
      }
    };

    this.appStore.departureDate = dep;
    this.appStore.arrivalDate = ret;
    this.appStore.makkahCheckInDate = this.incrementDate(mkIn,1);
    this.appStore.makkahCheckOutDate = this.incrementDate(mkOut,1);
    this.appStore.medinahCheckInDate = this.incrementDate(mdIn,1);
    this.appStore.medinahCheckOutDate = this.incrementDate(mdOut,1)
    sessionStorage.setItem('searchData',JSON.stringify(this.searchData))
    StepperComponent.searchData = this.searchData;
    this.appStore.dataFromFrontPage  = this.searchData;
    this.router.navigateByUrl('superagent/stepper');
  }
}