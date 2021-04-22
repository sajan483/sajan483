import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pax-and-payment',
  templateUrl: './pax-and-payment.component.html',
  styleUrls: ['./pax-and-payment.component.scss']
})
export class PaxAndPaymentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  navigateConfirm(){
    this.route.navigate(["/branch/confirmation"])
  }
}
