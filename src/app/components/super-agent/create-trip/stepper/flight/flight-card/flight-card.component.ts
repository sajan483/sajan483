import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FlightComponent } from '../flight.component';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})

export class FlightCardComponent implements OnInit {



  constructor(private flight:FlightComponent) { }

  @Output() footerFlagEmitter = new EventEmitter();
  @Output() footerDataEmitter = new EventEmitter();
  @Input() searchResult:any;
  footerFlag:string='false';
  footerData={
    depFlight:'',
    retFlight:''
  }


  ngOnInit() {}

  setDepFlight(item, i){
    this.footerFlag='true'
    document.getElementById('depCard'+i).style.background="#ddedfd";
    this.footerFlagEmitter.emit(this.footerFlag);
    this.footerData.depFlight = item;
    this.footerDataEmitter.emit(this.footerData);
  }
  
  setArrFlight(item, i){
    this.footerFlag='true'
    document.getElementById('arrCard'+i).style.background="#ddedfd";
    this.footerFlagEmitter.emit(this.footerFlag);
    this.footerData.retFlight = item;
    this.footerDataEmitter.emit(this.footerData);
  }

  toggleDetails(item, event, e) {
    var element = event.target;
    element.classList.toggle("active");
    if(item.isActive) {
      item.isActive = false;
    } else {
      item.isActive = true;
    }      
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

}
