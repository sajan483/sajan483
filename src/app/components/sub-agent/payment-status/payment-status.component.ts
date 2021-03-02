import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { NotificationService } from "../../../notifications.service";
import { NgxSpinnerService } from "ngx-spinner";
import 'rxjs/add/observable/interval';
import {Observable,of, from, empty } from 'rxjs';
import Swal from "sweetalert2";
import {TranslateService} from '@ngx-translate/core';
import { AppStore } from 'src/app/stores/app.store';
import { CommonApiService } from 'src/app/common/services/common-api-services';
@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.scss'],
  providers: [
    CommonApiService
  ],
})
export class PaymentStatusComponent implements OnInit {
  tripData: any;
  tripMakkahHotel: any;
  hotelMakkahFare: any;
  tripMakkahHotelrating: number;
  tripMadeenaHotel: any;
  hotelMadeenaFare: any;
  transportFare: any;
  selectedTransport: any;
  tripTransport: any;
  tripService: any;
  tripVisaData: any;
  status: any;
  tripTravellers: any;
  tripFlight: any;
  makkahCancellation: any;
  medinahCancellation: any;
  serviceCancellation: any;
  transportCancellation: any;
  canCancel: any;
  dataArray: any;
  counter = 0;
  reference_no :any
  selectedValue: string;
  cancelationPopup: boolean =false;
  makkahchecked: boolean =false;
  medinahchecked: boolean =false;
  transportchecked: boolean =false;
  viewbttn: boolean =false;
  makka: boolean = true;
  medinah: boolean = true;
  trnsprt: boolean = true;

  constructor(private route: ActivatedRoute,private appStore: AppStore, 
    private paymentLoader: NgxSpinnerService,private translate: TranslateService,
     private common: CommonApiService,private notifyService: NotificationService,
     private router:Router) { }

  ngOnInit() {
    if (localStorage.getItem("accesstoken") == null) {
      this.notifyService.showWarning(this.translate.instant("Please Login"))
      this.router.navigate(['/login']);
    }
   
    this.paymentLoader.show();
    this.status = this.route.snapshot.params.status;
    this.getList();
  }

  getList(){
    this.common.getPaymentDetails(this.route.snapshot.params.id).subscribe((data) => {
      console.log(data)
      if(data.message && data.message == "Request is processing" && this.counter < 10){
        console.log("no data")
        this.dataArray = Observable
    .interval(10*1000)    
    .subscribe(data => {
        console.log(data);
        this.getList();
        this.counter = this.counter +1;
    });
      }else{
        this.getData(data);
      } 
    });
  }

  ngAfterViewChecked() {
    this.translate.use(this.appStore.langCode);
    if(this.appStore.langCode == "ar-AE"){
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    }else{
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
  }

  getData(data){
    this.paymentLoader.hide();
    this.reference_no = data.reference_no;
    if(this.dataArray){
      this.dataArray.unsubscribe();
    }
    console.log("data present")
    this.tripData = data;
      if(data.trip_flights && data.trip_flights.length > 0){
        this.tripFlight = data.trip_flights[0];
      }
      if(data.madina_hotel_booking){
        this.tripMadeenaHotel = data.madina_hotel_booking;
      }
      if(data.makka_hotel_booking){
        this.tripMakkahHotel = data.makka_hotel_booking;
      }
      if(data.transport_booking){
        this.tripTransport = data.transport_booking;
        if(data.transport_booking.trip_transportation.trip_vehicles.length>0){
          this.transportFare = data.transport_booking.trip_transportation.trip_vehicles[0].price_per_vehicle;
        }
        this.selectedTransport = data.transport_booking.trip_transportation.selected_transportation;
      }
      if(data.service_booking){
        this.tripService = data.service_booking;
      }
      if(data.trip_visa){
        this.tripVisaData = data.trip_visa[0];
      }
      if(data.travellers){
        this.tripTravellers = data.travellers;
      }
  }

  bookVisa(){
    this.common.getVisaDetails(this.route.snapshot.params.id).subscribe((data) => {
      if(data.success){
        this.sendPayuRequest(data.visa_requests[0]);
      }
    });
  }

  invoiceClick(item : any){
    if(item == "View"){
      this.invoiceClickHtml()
    }
    if(item == "Download"){
      this.invoiceClickPdf()
    }
  }

  voucherClick(item : any){
    if(item == "View"){
      this.voucherClickHtml()
    }
    if(item == "Download"){
      this.voucherClickPdf()
    }
  }

  invoiceClickHtml(){
    this.common.getInvoice(this.route.snapshot.params.id).subscribe((data) => {
      this.showInvoiceHtml(data)
    });
  }

  showInvoiceHtml(blob){
    var newBlob = new Blob([blob], {type: "text/html"})
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    } 
    const data = window.URL.createObjectURL(newBlob);
    window.open(data);
  }

  voucherClickHtml(){
    this.common.getVoucher(this.route.snapshot.params.id).subscribe((data) => {
      this.showVoucherHtml(data)
    });
  }
  
  showVoucherHtml(blob){
    var newBlob = new Blob([blob], {type: "text/html"})
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    } 
    const data = window.URL.createObjectURL(newBlob);
    window.open(data);
  }

  invoiceClickPdf(){
    this.common.getInvoicePdf(this.route.snapshot.params.id).subscribe((data) => {
      this.showInvoicePdf(data)
    });
  }

  showInvoicePdf(blob){
    var newBlob = new Blob([blob], {type: "application/pdf"})
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    } 
    const data = window.URL.createObjectURL(newBlob);
    var link = document.createElement('a');
    link.href = data;
    link.download="Invoice.pdf";
    link.click();
  }

  voucherClickPdf(){
    this.common.getVoucherPdf(this.route.snapshot.params.id).subscribe((data) => {
      this.showVoucherPdf(data)
    });
  }
  
  showVoucherPdf(blob){
    var newBlob = new Blob([blob], {type: "application/pdf"})
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    } 
    const data = window.URL.createObjectURL(newBlob);
    var link = document.createElement('a');
    link.href = data;
    link.download="Voucher.pdf";
    link.click();
  }

  checkCancellation(){
    this.paymentLoader.show();
    this.common.getCheckCancellation(this.route.snapshot.params.id).subscribe((data) => {
      console.log(data)
      this.paymentLoader.hide();
      this.canCancel = data.can_cancel_booking;
      this.makkahCancellation = data.makkah_hotel_booking;
      this.medinahCancellation = data.medinah_hotel_booking;
      this.serviceCancellation = data.service_booking;
      this.transportCancellation = data.transport_booking;
      window.scrollTo(0, 0);
      if(this.canCancel == true){
        this.cancelationPopup = true;
      }else{
        Swal.fire({
          text:this.translate.instant('Sorry, No Cancellation Available'),
          icon: "warning",
          confirmButtonText: "ok",
        });
      }
    });
  }

  confirmCancellation(){
    if((<HTMLTextAreaElement>document.getElementById("confirmCancellationInput")).value == ""){
      this.notifyService.showWarning(this.translate.instant("Please mention the reason for cancellation"))
    }else{
      let body = {
        "cancellation_reason": (<HTMLTextAreaElement>document.getElementById("confirmCancellationInput")).value
      }
      this.common.getConfirmCancellation(this.route.snapshot.params.id,body).subscribe((data) => {
        console.log(data)
      });
      window.location.reload();
      (<HTMLElement>document.getElementById("checkCancellationBtn")).style.display = "none";
    }
  }

  sendPayuRequest(payment_create_response){
    console.log(payment_create_response);
    var form = document.createElement("form");
    form.setAttribute("method", "get");
    form.setAttribute("id", "cashfree-form");
    form.setAttribute("action", payment_create_response.payment_url);

    for(var key in payment_create_response.post_params) {
      if(payment_create_response.post_params.hasOwnProperty(key)) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", payment_create_response.post_params[key]);
        form.appendChild(hiddenField);
      }
    }
    document.body.appendChild(form);
    form.submit();
  }
  closecancelPopup(){
    this.cancelationPopup = false;
  }
  makkahcheck(){
    this.makkahchecked = true;
    this.cancelbuttondisable();
  }
  medinahcheck(){
    this.medinahchecked = true;
    this.cancelbuttondisable();
  }
  transportcheck(){
    this.transportchecked = true;
    this.cancelbuttondisable();
  }
  cancelbuttondisable(){
    if(this.makkahCancellation != null && this.medinahCancellation != null && this.transportCancellation != null){
      if(this.makkahCancellation.success && this.medinahCancellation.success && this.transportCancellation.success){
        if(this.makkahchecked && this.medinahchecked && this.transportchecked){
          this.viewbttn = true;
        }
      }else if(this.makkahCancellation.success && this.medinahCancellation.success){
        if(this.makkahchecked && this.medinahchecked){
          this.viewbttn = true;
        }
      }else if(this.makkahCancellation.success && this.transportCancellation.success){
        if(this.makkahchecked && this.transportchecked){
          this.viewbttn = true;
        }
      }else if(this.medinahCancellation.success && this.transportCancellation.success){
        if(this.medinahchecked && this.transportchecked){
          this.viewbttn = true;
        }
      }else if(this.makkahCancellation.success){
        if(this.makkahchecked){
          this.viewbttn = true;
        }
      }else if(this.medinahCancellation.success){
        if(this.medinahchecked){
          this.viewbttn = true;
        }
      }else if(this.transportCancellation.success){
        if(this.transportchecked){
          this.viewbttn = true;
        }
      }
    }else if(this.makkahCancellation != null && this.medinahCancellation != null){
      if(this.makkahCancellation.success && this.medinahCancellation.success){
        if(this.makkahchecked && this.medinahchecked){
          this.viewbttn = true;
        }
      }else if(this.makkahCancellation.success){
        if(this.makkahchecked){
          this.viewbttn = true;
        }
      }else if(this.medinahCancellation.success){
        if(this.medinahchecked){
          this.viewbttn = true;
        }
      }
    }else if(this.medinahCancellation != null && this.transportCancellation != null){
      if(this.medinahCancellation.success && this.transportCancellation.success){
        if(this.medinahchecked && this.transportchecked){
          this.viewbttn = true;
        }
      }else if(this.medinahCancellation.success){
        if(this.medinahchecked){
          this.viewbttn = true;
        }
      }else if(this.transportCancellation.success){
        if(this.transportchecked){
          this.viewbttn = true;
        }
      }
    }else if(this.makkahCancellation != null && this.transportCancellation != null){
      if(this.makkahCancellation.success && this.transportCancellation.success){
        if(this.makkahchecked && this.transportchecked){
          this.viewbttn = true;
        }
      }else if(this.makkahCancellation.success){
        if(this.makkahchecked){
          this.viewbttn = true;
        }
      }else if(this.transportCancellation.success){
        if(this.transportchecked){
          this.viewbttn = true;
        }
      }
    }else if(this.makkahCancellation != null){
      if(this.makkahCancellation.success){
        if(this.makkahchecked){
          this.viewbttn = true;
        }
      }
    }else if(this.transportCancellation != null){
      if(this.transportCancellation.success){
        if(this.transportchecked){
          this.viewbttn = true;
        }
      }
    }else if(this.medinahCancellation != null){
      if(this.medinahCancellation.success){
        if(this.medinahchecked){
          this.viewbttn = true;
        }
      }
    }
  }

  sentItenaryButtonClicked(){
    this.common.sendNotification(this.route.snapshot.params.id).subscribe((data) => {
      this.notifyService.showSuccess("Email has been sent");
      });
  }

  toggleMakkaUp(){
    (<HTMLElement>document.getElementById("makka")).style.display = "none";
    this.makka = !this.makka;
  }

  toggleMakkaDown(){
    (<HTMLElement>document.getElementById("makka")).style.display = "block";
    this.makka = !this.makka;
  }

  toggleMedinahDown(){
    (<HTMLElement>document.getElementById("medinah")).style.display = "block";
    this.medinah = !this.medinah;
  }

  toggleMedinahUp(){
    (<HTMLElement>document.getElementById("medinah")).style.display = "none";
    this.medinah = !this.medinah;
  }
  toggleTransportUp(){
    (<HTMLElement>document.getElementById("transport")).style.display = "none";
    (<HTMLElement>document.getElementById("transportRate")).style.display = "none";
    (<HTMLElement>document.getElementById("transportPolicy")).style.display = "none";
    (<HTMLElement>document.getElementById("transportBrn")).style.display = "none";
    (<HTMLElement>document.getElementById("trnsptNormal")).style.display = "none";
    this.trnsprt= !this.trnsprt;
  }

  toggleTransportDown(){
    (<HTMLElement>document.getElementById("transport")).style.display = "block";
    (<HTMLElement>document.getElementById("transportPolicy")).style.display = "block";
    (<HTMLElement>document.getElementById("transportRate")).style.display = "block";
    (<HTMLElement>document.getElementById("transportBrn")).style.display = "block";
    (<HTMLElement>document.getElementById("trnsptNormal")).style.display = "block";
    this.trnsprt = !this.trnsprt;
  }
}