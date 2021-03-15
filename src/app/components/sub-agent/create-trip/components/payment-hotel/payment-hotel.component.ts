import { Component, Input, OnChanges, OnInit, Output,EventEmitter } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.city == "makkah"){this.showMakkah = true} else{this.showMakkah = false}
    if(this.city == "madinah"){this.showMadinah = true} else {this.showMadinah = false}
  }

  goToHotelStepper(event){
    if(event ){
      this.notifyCreateTrip.emit(event)
    }
  }

}