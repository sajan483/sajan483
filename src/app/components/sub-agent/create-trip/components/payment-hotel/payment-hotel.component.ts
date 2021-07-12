import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { AppStore } from 'src/app/stores/app.store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-payment-hotel',
  templateUrl: './payment-hotel.component.html',
  styleUrls: ['./payment-hotel.component.scss']
})

export class PaymentHotelComponent implements OnInit, OnChanges {
  @Input() tripHotel: any;
  @Input() city: any;
  @Output() notifyCreateTrip = new EventEmitter();
  showMakkah: boolean = false;
  showMadinah: boolean = false;
  makkahotel: boolean = false;
  travelCount: number;
  readonly = true;
  baseFareAmount: number;
  taxAmount: number;
  constructor(private appStore: AppStore, private translate: TranslateService,) { }

  ngOnInit() {
    var obj = JSON.parse(sessionStorage.getItem('userObject'))
    this.travelCount = obj.adults + obj.children;

    this.getHotelPriceSummery()
  }

  getHotelPriceSummery(){
    var basefare = 0;
    var tax = 0;
    this.tripHotel.room_variations.forEach(element => {
      element.room.forEach(room => {
        room.fare_summary.forEach(payment => {
          if(payment.name == 'Base Price'){
            basefare = basefare + (payment.amount * room.quantity);
          }
          if(payment.name == 'TAX'){
            tax = tax + (payment.amount * room.quantity);
          }
        });
      });
    });
    this.baseFareAmount = basefare;
    this.taxAmount = tax;
  }

  ngOnChanges() {
    this.getHotelPriceSummery()
    if (this.city == "makkah") { this.showMakkah = true } else { this.showMakkah = false }
    if (this.city == "madinah") { this.showMadinah = true } else { this.showMadinah = false }
  }

  ngAfterViewChecked() {
    this.translate.use((sessionStorage.getItem('userLanguage') === 'ar-AE') ? "ar-AE" : "en-US");
    if (sessionStorage.getItem('userLanguage') == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
  }

  goToHotelStepper(event) {
    let stepLength = JSON.parse(sessionStorage.getItem('steps')).length
    if (stepLength > 1) {
      if (event == "makkah") {
        sessionStorage.setItem('stage', '0')
        sessionStorage.setItem('modify', 'yes')
        location.reload()
      }
      else {
        sessionStorage.setItem('stage', '1')
        sessionStorage.setItem('modify', 'yes')
        location.reload()
      }
    }
    else {
      sessionStorage.setItem('stage', '0')
      location.reload()
    }

  }
}