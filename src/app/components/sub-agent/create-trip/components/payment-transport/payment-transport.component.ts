import { Component, Input, OnChanges, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-transport',
  templateUrl: './payment-transport.component.html',
  styleUrls: ['./payment-transport.component.scss']
})

export class PaymentTransportComponent implements OnInit,OnChanges {
  @Input() tripTransport : any;
  @Input() transportFailed : any;
  @Output() notifyCreatetrip = new EventEmitter();
  showTransportNotAvailable: boolean = false;
  transporttoggle : boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(this.tripTransport)
  }

  ngOnChanges(){
    if(this.transportFailed != ""){
      this.showTransportNotAvailable = true;
    }else{
      this.showTransportNotAvailable = false;
    }
  }

  changeTransport(){
    this.notifyCreatetrip.emit('event');
  }

}