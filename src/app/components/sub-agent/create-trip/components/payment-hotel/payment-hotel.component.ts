import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-hotel',
  templateUrl: './payment-hotel.component.html',
  styleUrls: ['./payment-hotel.component.scss']
})

export class PaymentHotelComponent implements OnInit {
  @Input() tripHotel:any; 
  @Input() city1:any;
  @Input() city2:any;
  constructor() { }

  ngOnInit() {
  }
}