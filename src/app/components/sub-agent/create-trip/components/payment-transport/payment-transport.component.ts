import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-transport',
  templateUrl: './payment-transport.component.html',
  styleUrls: ['./payment-transport.component.scss']
})

export class PaymentTransportComponent implements OnInit {
  @Input() tripTransport : any;

  constructor() { }

  ngOnInit() {
    console.log("dsadsd",this.tripTransport)
  }
}