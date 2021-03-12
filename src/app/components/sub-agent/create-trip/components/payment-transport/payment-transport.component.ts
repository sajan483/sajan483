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
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.transportFailed != ""){
      this.showTransportNotAvailable = true;
    }
  }

  changeTransport(){
    this.notifyCreatetrip.emit('event');
  }

}