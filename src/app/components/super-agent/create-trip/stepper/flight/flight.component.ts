import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from "rxjs/operators";
import { Observable } from 'rxjs';
import { listAirport } from 'src/app/models/listAirport';
import { airlineList } from 'src/app/models/airlineList';
import { StepperComponent } from '../stepper.component';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  today = new Date();
  searchForm: FormGroup;
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
    name:"Etihad",
    code:"EY"
  };
  searchData;

  constructor(
    private fb: FormBuilder,
    private commonService: SuperAgentApiService) { }

  ngOnInit() {
    this.searchData= StepperComponent.searchData.flightData
    this.searchForm = this.fb.group({
			departDate: ['', Validators.required],
			returnDate: ['', Validators.required],
    });
    this.listFlights()
  }

  get form() { return this.searchForm.controls; }

  get submit() {
    if(this.source.value != null && this.source.value != '' && this.destination.value != null && this.destination.value != '' && this.airline.value != null && this.airline.value != '' && this.searchForm.valid){
      return true
    }
    else{
      return false
    }
  }

  modifySearch(){
    this.source.setValue(this.searchData.source)
    this.destination.setValue(this.searchData.destination)
    this.airline.setValue(this.searchData.airline)
    this.searchForm.controls.departDate.setValue(this.searchData.departureDate);
    this.searchForm.controls.returnDate.setValue(this.searchData.returnDate);
    this.getAirportListSrc()
    this.getAirportListDest()
    this.getAirlineList()
    document.getElementById('search-section').style.display="block";
    document.getElementById('search-section').style.visibility="visible";
    document.getElementById('modify-box').style.display="none";
    document.getElementById('modify-box').style.visibility="hidden";
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
  }

  setDestLocation(data){
    this.destLocation.city = data.city
  }

  setAirline(data){
    this.airlineDetails.code = data.code
  }

  searchFlights(){
    if(this.submit){
      var body
      body = {
        boarding_airport:this.source.value,
        destination_airport:this.destination.value,
        airlines:this.airlineDetails.code,
        onward_date: this.searchForm.controls.departDate.value.toJSON().split("T")[0],
        return_date: this.searchForm.controls.returnDate.value.toJSON().split("T")[0],
      };
      this.commonService.searchFlights(body).subscribe((data) => {
        if(data.flights[0].length > 0 && data.flights[1].length > 0){
          this.flightListingFlag = true
          this.departureFlights = data.flights[0];
          this.returnFlights = data.flights[1];
        }
      })
    }
  }

  listFlights(){
      var body = {
        boarding_airport:this.searchData.source,
        destination_airport:this.searchData.destination,
        airlines:this.searchData.airline,
        onward_date: this.searchData.departureDate,
        return_date: this.searchData.returnDate,
      };
      this.commonService.searchFlights(body).subscribe((data) => {
        if(data.flights[0].length > 0 && data.flights[1].length > 0){
          this.flightListingFlag = true
          this.departureFlights = data.flights[0];
          this.returnFlights = data.flights[1];
        }
      })
    }

}