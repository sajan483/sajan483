import { Component, Input, OnInit } from '@angular/core';
import { FlightComponent } from '../flight.component';

@Component({
  selector: 'app-flight-footer',
  templateUrl: './flight-footer.component.html',
  styleUrls: ['./flight-footer.component.scss'],
  providers:[]
})
export class FlightFooterComponent implements OnInit {

  @Input() footerData:any;

  constructor(private flight:FlightComponent) { }

  ngOnInit() { 
  }

  navigateFareSelection(){
    if(this.footerData.retFlight.From && this.footerData.depFlight.From){
      this.flight.navigateFareSelection()
    }
  }

}
