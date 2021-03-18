import { Component, OnInit } from '@angular/core';
import { FlightCardComponent } from '../flight-card/flight-card.component';

@Component({
  selector: 'app-flight-footer',
  templateUrl: './flight-footer.component.html',
  styleUrls: ['./flight-footer.component.scss'],
  providers:[]
})
export class FlightFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    console.log(FlightCardComponent.data);
  }

  get depFlight(){
    return FlightCardComponent.data.departure
  }

  get retFlight(){
    return FlightCardComponent.data.return
  }

}
