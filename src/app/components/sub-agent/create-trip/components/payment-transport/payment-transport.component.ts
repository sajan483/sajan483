import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-payment-transport',
  templateUrl: './payment-transport.component.html',
  styleUrls: ['./payment-transport.component.scss']
})

export class PaymentTransportComponent implements OnInit, OnChanges {
  @Input() tripTransport: any;
  @Input() transportFailed: any;
  @Output() notifyCreatetrip = new EventEmitter();
  showTransportNotAvailable: boolean = false;
  transporttoggle: boolean = false;
  additionalService :any[] = [];
  aditionalAmount: number;
  constructor(private translate: TranslateService,) { }

  ngOnInit() {
    this.additionalService = this.tripTransport.selected_transportation.vehicle_types[0].categories[0].additional_services;
    if(this.additionalService.length != 0){
      var amount = 0;
      this.additionalService.forEach((data)=>{
        data.fare_summary.forEach((price)=>{
          if(price.is_total){
            amount = amount + price.amount;
          }
        })
      })
      this.aditionalAmount = amount;
    }
  }

  ngAfterViewChecked() {
    this.translate.use((sessionStorage.getItem('userLanguage') === 'ar-AE') ? "ar-AE" : "en-US");
    if (sessionStorage.getItem('userLanguage') == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
  }

  ngOnChanges() {
    if (this.transportFailed != "") {
      this.showTransportNotAvailable = true;
    } else {
      this.showTransportNotAvailable = false;
    }
  }

  changeTransport() {
    this.notifyCreatetrip.emit('event');
  }

}