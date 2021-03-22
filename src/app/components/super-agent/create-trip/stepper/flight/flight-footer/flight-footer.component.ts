import { Component, Input, OnInit } from '@angular/core';
import { StepperComponent } from '../../stepper.component';
import { FlightCardComponent } from '../flight-card/flight-card.component';

@Component({
  selector: 'app-flight-footer',
  templateUrl: './flight-footer.component.html',
  styleUrls: ['./flight-footer.component.scss'],
  providers:[]
})
export class FlightFooterComponent implements OnInit {

  @Input() footerData:any;

  constructor(private stepper: StepperComponent) { }

  ngOnInit() { 
  }

  navigateHotel(component,hotelFlag){
    this.stepper.stepContent(component,hotelFlag)
  }

}
