import { Component, OnInit } from '@angular/core';
import { FlightCardComponent } from '../flight-card/flight-card.component';

@Component({
  selector: 'app-flight-footer',
  templateUrl: './flight-footer.component.html',
  styleUrls: ['./flight-footer.component.scss'],
  providers:[FlightCardComponent]
})
export class FlightFooterComponent implements OnInit {

  constructor(private flightCard : FlightCardComponent) { }

  ngOnInit() { 
  }

  get depFlight(){
    console.log(this.flightCard.data);
    return this.flightCard.data.departure
  }

  get retFlight(){
    console.log(this.flightCard.data);
    return this.flightCard.data.return
  }

}
