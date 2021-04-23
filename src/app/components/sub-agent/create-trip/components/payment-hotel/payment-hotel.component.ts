import { Component, Input, OnChanges, OnInit, Output,EventEmitter } from '@angular/core';
import {AppStore} from 'src/app/stores/app.store'

@Component({
  selector: 'app-payment-hotel',
  templateUrl: './payment-hotel.component.html',
  styleUrls: ['./payment-hotel.component.scss']
})

export class PaymentHotelComponent implements OnInit,OnChanges {
  @Input() tripHotel:any; 
  @Input() city:any;
  @Output() notifyCreateTrip = new EventEmitter();
  showMakkah: boolean = false;
  showMadinah: boolean = false;
  makkahotel : boolean = false;
  travelCount : number;
  readonly = true;
  constructor(private appStore : AppStore) { }

  ngOnInit() {
    this.travelCount = this.appStore.totalTravellers;
  }

  ngOnChanges(){
    if(this.city == "makkah"){this.showMakkah = true} else{this.showMakkah = false}
    if(this.city == "madinah"){this.showMadinah = true} else {this.showMadinah = false}
  }

  goToHotelStepper(event){
    let stepLength = JSON.parse(sessionStorage.getItem('steps')).length
    if(stepLength > 1){
      if(event == "makkah"){
        sessionStorage.setItem('stage','0')
        sessionStorage.setItem('modify','yes')
        location.reload()
      }
      else{
        sessionStorage.setItem('stage','1')
        sessionStorage.setItem('modify','yes')
        location.reload()
      }
    }
    else{
      sessionStorage.setItem('stage','0')
      location.reload()
    }
    
  }
}