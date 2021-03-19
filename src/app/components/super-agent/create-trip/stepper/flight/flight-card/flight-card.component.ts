import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { FlightComponent } from '../flight.component';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})

export class FlightCardComponent implements OnInit {

  static data = {
    departure: '',
    return: ''
  }

  constructor(private flight:FlightComponent) { }

  ngOnInit() {}

  get departureFlights(){
   return this.flight.departureFlights
  }

  get returnFlights(){
    return this.flight.returnFlights
  }

  get fromLocation(){
    return this.flight.fromLocation
  }

  get destLocation(){
    return this.flight.destLocation
  }

  setDepFlight(item, i){
    FlightCardComponent.data.departure=item
    document.getElementById('depCard'+i).style.background="#ddedfd";
  }
  
  setArrFlight(item, i){
    FlightCardComponent.data.return=item
    document.getElementById('arrCard'+i).style.background="#ddedfd";
  }

}
