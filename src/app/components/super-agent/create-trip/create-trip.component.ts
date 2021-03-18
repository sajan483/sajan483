import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonApiService } from 'src/app/common/services/common-api-services';
import { map, startWith } from "rxjs/operators";
import { Observable } from 'rxjs';
import { listAirport } from 'src/app/models/listAirport';
import { airlineList } from 'src/app/models/airlineList';
import { MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss'],
  providers:[CommonApiService]
})
export class CreateTripComponent implements OnInit {

  today = new Date().toJSON().split("T")[0];
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
    iata:"BLR",
    city:"Bangalore"
  };
  destLocation:any = {
    iata:"JED",
    city:"Jeddah"
  };
  airlineDetails:any = {
    name:"SpiceJet",
    code:"SG"
  };

  @ViewChild('pickerReturn' , {read: undefined, static: false}) pickerReturn: MatDatepicker<Date>;
  @ViewChild('pickerMedOut' , {read: undefined, static: false}) pickerMedOut: MatDatepicker<Date>;
  @ViewChild('pickerMekIn' , {read: undefined, static: false}) pickerMekIn: MatDatepicker<Date>;
  @ViewChild('pickerMekOut' , {read: undefined, static: false}) pickerMekOut: MatDatepicker<Date>;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonApiService) { }

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
    this.searchForm.controls.departDate.setValue(this.today);
    this.searchForm.controls.returnDate.setValue(this.today);
    this.getAirportListSrc()
    this.getAirportListDest()
    this.getAirlineList()
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

  setMedinahInMinDate(){
   this.medinahInMin=this.form.departDate.value
  }

  setMedinahOutMinDate(){
    this.medinahOutMin=this.form.medIn.value
    this.pickerMedOut.open()
   }

   setMekkahInMinDate(){
    this.mekkahInMin=this.form.medOut.value
    this.pickerMekIn.open()
   }
 
   setMekkahOutMinDate(){
    this.mekkahOutMin=this.form.mekIn.value
    this.pickerMekOut.open()
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
  }
}
