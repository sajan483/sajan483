import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs';
import Swal from "sweetalert2";
import { TranslateService } from '@ngx-translate/core';
import { AppStore } from 'src/app/stores/app.store';
import { NotificationService } from 'src/app/common/services/notification.service';
import { GeneralHelper } from 'src/app/helpers/General/general-helpers';
import { CreateTripHelper } from 'src/app/helpers/sub-agent/create-trip-helpers';
import { HelperService } from "src/app/common/services/helper-service";
import { SubAgentApiService } from 'src/app/Services/sub-agent-api-services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LooseObject } from "src/app/models/visaTypes";
import { CancelationPopupComponent } from '../cancelation-popup/cancelation-popup.component';

@Component({
  selector: 'app-itinerary-view',
  templateUrl: './itinerary-view.component.html',
  styleUrls: ['./itinerary-view.component.scss']
})
export class ItineraryViewComponent implements OnInit {
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
  reference_no: any
  selectedValue: string;
  cancelationPopup: boolean = false;
  makkahchecked: boolean = false;
  medinahchecked: boolean = false;
  transportchecked: boolean = false;
  viewbttn: boolean = false;
  makka: boolean = true;
  medinah: boolean = true;
  trnsprt: boolean = true;
  genHelper: GeneralHelper;
  createHelper: CreateTripHelper;
  makkahotel: boolean = false;
  cancellationtoggle: boolean = false;
  bknStatus: any;
  noOfDaysInMakkah: any;
  noOfTravellers: any;
  noOfDaysInMedinah: any;
  invoicetoggle: boolean = false;
  vouchertoggle: boolean = false;
  shimmer: boolean = true;
  btnactv: boolean;
  
  submitted = false;
  checkCancelData: LooseObject = {};
  timerStatus: boolean;

  constructor(private route: ActivatedRoute,
    private appStore: AppStore,
    private common: SubAgentApiService,
    private notifyService: NotificationService,
    private router: Router,
    private _gHelper: GeneralHelper,
    private formBuilder: FormBuilder,
    private helperService: HelperService,
    private translate: TranslateService,) { 
      this.genHelper = _gHelper;
    }

  ngOnInit() {
    this.genHelper.checkForAccessToken();
    this.createHelper = new CreateTripHelper(this.helperService);
    this.status = this.route.snapshot.params.status;
    // if(sessionStorage && sessionStorage.getItem("timerStatus") && sessionStorage.getItem("timerStatus") == "stop"){this.timerStatus = true}
    // this.setTimerForCancellationTimeOut()
    this.getList();
  }
  
  setTimerForCancellationTimeOut() {
    var timeleft = 5*60;
    var timer = setInterval(()=>{
    if(timeleft <= 0){
      clearInterval(timer);
      sessionStorage.setItem("timerStatus","stop");
      this.timerStatus = true;
    }
      timeleft -= 1;
    }, 1000);
  }

  getList() {
    this.common.getPaymentDetails(this.route.snapshot.params.id).subscribe((data) => {
      if (data.message && data.message == "Request is processing" && this.counter < 10) {
        this.dataArray = Observable
          .interval(10 * 1000)
          .subscribe(data => {
            this.getList();
            this.counter = this.counter + 1;
          });
      } else {
        this.getData(data);
      }
    });
  }

  ngAfterViewChecked() {
    this.translate.use((sessionStorage.getItem('userLanguage') === 'ar-AE') ? "ar-AE" : "en-US");
    if (sessionStorage.getItem('userLanguage') == "ar-AE") {
      (<HTMLInputElement>document.getElementById("body")).classList.add('mirror_css');
    } else {
      (<HTMLInputElement>document.getElementById("body")).classList.remove('mirror_css');
    }
  }

  getData(data) {
    this.shimmer = false;
    this.bknStatus = data.status
    this.reference_no = data.reference_no;
    if (this.dataArray) { this.dataArray.unsubscribe(); }
    this.tripData = data;
    this.checkCancelData.details = this.tripData;
    if (data.trip_flights && data.trip_flights.length > 0) {
      this.tripFlight = data.trip_flights[0];
    }
    if (data.madina_hotel_booking) {
      this.tripMadeenaHotel = data.madina_hotel_booking;
      this.noOfDaysInMedinah = this.tripMadeenaHotel.trip_hotel.num_of_days
    }
    if (data.makka_hotel_booking) {
      this.tripMakkahHotel = data.makka_hotel_booking;
      this.noOfDaysInMakkah = this.tripMakkahHotel.trip_hotel.num_of_days
    }
    if (data.transport_booking) {
      this.tripTransport = data.transport_booking;
      if (data.transport_booking.trip_transportation.trip_vehicles.length > 0) {
        this.transportFare = data.transport_booking.trip_transportation.trip_vehicles[0].price_per_vehicle;
      }
      this.selectedTransport = data.transport_booking.trip_transportation.selected_transportation;
    }
    if (data.service_booking) {
      this.tripService = data.service_booking;
    }
    if (data.trip_visa) {
      this.tripVisaData = data.trip_visa[0];
    }
    if (data.travellers) {
      this.tripTravellers = data.travellers;
      this.noOfTravellers = this.tripTravellers.length
    }
  }

  bookVisa() {
    this.common.getVisaDetails(this.route.snapshot.params.id).subscribe((data) => {
      if (data.success) {
        this.sendPayuRequest(data.visa_requests[0]);
      }
    });
  }

  invoiceClick(item: any) {
    if(this.bknStatus == 'success'){
    this.invoicetoggle = true;
    if (item == "View") {
      this.invoiceClickHtml()
    }
    if (item == "Download") {
      this.invoiceClickPdf()
    }
    }
  }

  voucherClick(item: any) {
    if(this.bknStatus == 'success'){
    this.vouchertoggle = true;
    if (item == "View") {
      this.voucherClickHtml()
    }
    if (item == "Download") {
      this.voucherClickPdf()
    }
  }
  }

  invoiceClickHtml() {
    this.common.getInvoice(this.route.snapshot.params.id).subscribe((data) => {
      this.showInvoiceHtml(data)
    });
  }

  showInvoiceHtml(blob) {
    var newBlob = new Blob([blob], { type: "text/html" })
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    }
    const data = window.URL.createObjectURL(newBlob);
    window.open(data);
  }

  voucherClickHtml() {
    this.common.getVoucher(this.route.snapshot.params.id).subscribe((data) => {
      this.showVoucherHtml(data)
    });
  }

  showVoucherHtml(blob) {
    var newBlob = new Blob([blob], { type: "text/html" })
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    }
    const data = window.URL.createObjectURL(newBlob);
    window.open(data);
  }

  invoiceClickPdf() {
    this.common.getInvoicePdf(this.route.snapshot.params.id).subscribe((data) => {
      this.showInvoicePdf(data);
    });
  }

  showInvoicePdf(blob) {
    var newBlob = new Blob([blob], { type: "application/pdf" })
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    }
    const data = window.URL.createObjectURL(newBlob);
    var link = document.createElement('a');
    link.href = data;
    link.download = "Invoice.pdf";
    link.click();
    this.invoicetoggle = false;
  }

  voucherClickPdf() {
    this.common.getVoucherPdf(this.route.snapshot.params.id).subscribe((data) => {
      this.showVoucherPdf(data)
    });
  }

  showVoucherPdf(blob) {
    var newBlob = new Blob([blob], { type: "application/pdf" })
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    }
    const data = window.URL.createObjectURL(newBlob);
    var link = document.createElement('a');
    link.href = data;
    link.download = "Voucher.pdf";
    link.click();
    this.vouchertoggle = false;
  }

  

  checkCancellation() {
   // if(this.timerStatus){ 
    this.cancellationtoggle = true;
    this.common.getCheckCancellation(this.route.snapshot.params.id).subscribe((data) => {
      this.cancellationtoggle = false;
      this.checkCancelData.cancel = data;
      window.scrollTo(0, 0);
      if (data.can_cancel_booking) {
        CancelationPopupComponent.cancellationPopup = true;
      } else {
        Swal.fire({
          text: 'Sorry, No Cancellation Available',
          icon: "warning",
          confirmButtonText: "ok",
        });
      }
    });
  // }else{
  //   this.notifyService.showWarning("You can cancel a booking only after 5 minuts")
  // }
  }

  ngDoCheck(){
    this.cancelationPopup = CancelationPopupComponent.cancellationPopup;
  }

  

  sendPayuRequest(payment_create_response) {
    var form = this.createHelper.createPayuRequestForm(payment_create_response);
    document.body.appendChild(form);
    form.submit();
  }

  makkahcheck() {
    this.makkahchecked = true;
    this.cancelbuttondisable();
  }

  medinahcheck() {
    this.medinahchecked = true;
    this.cancelbuttondisable();
  }

  transportcheck() {
    this.transportchecked = true;
    this.cancelbuttondisable();
  }

  cancelbuttondisable() {
    this.viewbttn = this.createHelper.cancelbuttondisable(this.makkahCancellation, this.medinahCancellation, this.transportCancellation, this.makkahchecked, this.medinahchecked, this.transportchecked)
  }

  sentItenaryButtonClicked() {
    this.common.sendNotification(this.route.snapshot.params.id).subscribe((data) => {
      this.notifyService.showSuccess("Email has been sent");
    });
  }

  toggleDetails(event) {
    var element = event.target;
    var panel = element.nextElementSibling;
    if (element.style.transform) {
      element.style.transform = null;
    } else {
      element.style.transform = 'rotate(180deg)';
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  toggleText(event) {
    var element = event.target;
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  navigateHomePage() {
    this.router.navigate(['subagent/home']);
  }
}
