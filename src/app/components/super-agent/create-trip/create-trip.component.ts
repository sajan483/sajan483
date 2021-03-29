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
  styleUrls: ['./create-trip.component.scss'],
  providers:[]
})
export class CreateTripComponent implements OnInit {

  today = new Date().toJSON().split("T")[0];
  todayStamp = new Date();
  searchForm: FormGroup;
  returnMin=new Date();
  medinahInMin:Date;
  medinahOutMin:Date;
  mekkahInMin:Date;
  mekkahOutMin:Date;
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
  searchData

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
    this.source.setValue(this.fromLocation.iata)
    this.destination.setValue(this.destLocation.iata)
    this.airline.setValue(this.airlineDetails.name)
    this.searchForm.controls.departDate.setValue(this.todayStamp);
    this.searchForm.controls.returnDate.setValue(this.incrementDate(this.searchForm.controls.departDate.value,14));
    this.searchForm.controls.mekIn.setValue(this.todayStamp);
    this.searchForm.controls.mekOut.setValue(this.incrementDate(this.searchForm.controls.mekIn.value,2));
    this.searchForm.controls.medIn.setValue(this.searchForm.controls.mekOut.value);
    this.searchForm.controls.medOut.setValue(this.incrementDate(this.searchForm.controls.medIn.value,2));
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
    if(this.searchForm.valid){
      return true
    }
    else{
      return false
    }
  }

  setReturnMinDate(){
   this.returnMin=this.form.departDate.value
   this.pickerReturn.open()
  }

  setMekkahInMinDate(){
    this.mekkahInMin=this.form.departDate.value
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
    this.fromLocation.city = data.city
  }

  setDestLocation(data){
    this.destLocation.city = data.city
  }

  setAirline(data){
    this.airlineDetails.code = data.code
    this.airlineDetails.name = data.name
  }

  submitData(){
    this.searchData = {
      travellersData : {
        adult: this.form.adult.value,
        childret:this.form.children.value,
        infant:this.form.infant.value 
      },
      flightData:{
        source:this.source.value,
        destination:this.destination.value,
        departureDate:this.form.departDate.value.toJSON().split("T")[0],
        returnDate:this.form.returnDate.value.toJSON().split("T")[0],
        airline:this.airlineDetails.code
      },
      mekkahData:{
        checkIn:this.form.mekIn.value.toJSON().split("T")[0],
        checkOut:this.form.mekOut.value.toJSON().split("T")[0]
      },
      medinaData:{
        checkIn:this.form.medIn.value.toJSON().split("T")[0],
        checkOut:this.form.medOut.value.toJSON().split("T")[0]
      }
    };
    StepperComponent.searchData = this.searchData;
    this.appStore.dataFromFrontPage  = this.searchData;
    this.router.navigateByUrl('superagent/stepper');
  }
}
