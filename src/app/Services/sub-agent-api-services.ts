import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  URLSearchParams,
  ResponseContentType,
} from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/add/operator/toPromise";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { listAirport } from "../models/listAirport";

@Injectable()
export class SubAgentApiService {
  BASE_URL: any = environment.baseUrl;
  BASE_URL2: any = environment.baseUrl2;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accesstoken"),
    }),
  };

  options = {
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accesstoken"),
    }),
  };

  optionsForForm = {
    headers: new Headers({
      Authorization: "Bearer " + localStorage.getItem("accesstoken"),
    }),
  };

  constructor(
    private http: Http,
    private _httpClient: HttpClient,
    private router: Router,
    private https: HttpClient
  ) {}

  getStaffDetails() {
    return this.http
      .get(this.BASE_URL + "staff/profile/", this.options)
      .map((res) => res.json());
  }
  getSelectedHotelInfo(data, currency, lang) {
    return this.http
      .post(
        this.BASE_URL +
          "hotels/details/?currency=" +
          currency +
          "&lang=" +
          lang,
        data,
        this.options
      )
      .map((res) => res.json());
  }

  saveSelectedHotel(data) {
    return this.http
      .post(this.BASE_URL + "custom_trips/", data, this.options)
      .map((res) => res.json());
  }


  getVoucherPdf(id){
    const bookingOptions = {
      responseType: ResponseContentType.Blob,
      headers: new Headers({
        "Authorization": "Bearer Guest",
      }),
      
    };
    return this.http
    .get(this.BASE_URL + "bookings/"+id+"/voucher/", bookingOptions)
    .map((res) =>
    {
      return new Blob([res.blob()], { type: 'application/pdf' })
    });
  }

  getLanguages() {
    return this.http
      .get(this.BASE_URL + "languages/", this.options)
      .map((res) => res.json());
  }
  
  updateCustomTrip(id,data){
    return this.http
    .put(this.BASE_URL2 + "custom_trips/"+id+"/",data, this.options)
    .map((res) => res.json());
  }

  bookCustomTrip(data) {
    return this.http
      .post(this.BASE_URL + "custom_trips/", data, this.options)
      .map((res) => res.json());
  }

  getPaymentDetails(id){
    return this.http
      .get(this.BASE_URL + "bookings/"+id+"/", this.options)
      .map((res) => res.json());
  }

  getVisaDetails(id){
    return this.http
    .get(this.BASE_URL + "custom_trip_booking/"+id+"/update_mutamer_info/", this.options)
    .map((res) => res.json());
  }

  getInvoice(id){
    const bookingOptions = {
      responseType: ResponseContentType.Blob,
      headers: new Headers({
        "Authorization": "Bearer Guest",
      }),
      
    };
    return this.http
    .get(this.BASE_URL + "bookings/"+id+"/invoice_template/", bookingOptions)
    .map((res) =>
    {
      return new Blob([res.blob()], { type: 'text/html' })
    });
  }
    
  getConfirmCancellation(id,data){
    return this.http
    .post(this.BASE_URL + "custom_trip_booking/"+id+"/confirm_cancellation/",data, this.options)
    .map((res) => res.json());
  }

  getCheckCancellation(id){
    return this.http
    .get(this.BASE_URL + "custom_trip_booking/"+id+"/check_cancellation/", this.options)
    .map((res) => res.json());
  }


  getVoucher(id){
    const bookingOptions = {
      responseType: ResponseContentType.Blob,
      headers: new Headers({
        "Authorization": "Bearer Guest",
      }),
    };
    return this.http
    .get(this.BASE_URL2 + "bookings/"+id+"/voucher_template/", bookingOptions)
    .map((res) =>
    {
      return new Blob([res.blob()], { type: 'text/html' })
    });
  }

  getInvoicePdf(id){
    const bookingOptions = {
      responseType: ResponseContentType.Blob,
      headers: new Headers({
        "Authorization": "Bearer Guest",
      }),
      
    };
    return this.http
    .get(this.BASE_URL + "bookings/"+id+"/invoice/", bookingOptions)
    .map((res) =>
    {
      return new Blob([res.blob()], { type: 'application/pdf' })
    });
  }


  sendNotification(id:any) {
    return this.http
      .get(this.BASE_URL + "bookings/"+id+"/resend_notification/", this.options)
      .map((res) => res.json());
  }


  bookTrip(data,id){
    return this.http
    .post(this.BASE_URL + "custom_trips/" + id + "/booking/",data, this.options)
    .map((res) => res.json());
  }


  searchTransport(data) {
    return this.http
      .post(this.BASE_URL + "ground_transports/search/", data, this.options)
      .map((res) => res.json());
  }

    
  searchTransportList(id,currency,lang) {
    return this.http
      .get(this.BASE_URL + "ground_transports/?search_id=" + id + "&currency=" + currency + "&lang=" + lang, this.options)
      .map((res) => res.json());
  }


  getTrip(id){
    return this.http
    .get(this.BASE_URL + "custom_trips/" + id + "/", this.options)
    .map((res) => res.json());
  }


  checkAvailability(id){
    return this.http
    .get(this.BASE_URL + "b2b_trip_booking/"+id+"/check_availability/", this.options)
    .map((res) => res.json());
  }

  bookingPayment(data){
    return this.http
    .post(this.BASE_URL + "payments/",data, this.options)
    .map((res) => res.json());
  }
  
  getCategories(lang) {
    return this.http
      .get(this.BASE_URL + "ground_transports/categories/?lang=" + lang , this.options)
      .map((res) => res.json());
  }

  getAdditionalServices(lang) {
    return this.http
      .get(this.BASE_URL + "ground_transports/additional_services/?lang=" + lang , this.options)
      .map((res) => res.json());
  }

  getserviceAdditionalServices() {
    return this.http
      .get(this.BASE_URL + "ground_services/additional_services/" , this.options)
      .map((res) => res.json());
  }


  pilotHotelSearch(data: any, lang: any) {
    return this.http
      .post(this.BASE_URL + "b2capis/hotels/search/?lang=" + lang, data, this.options)
      .map((res) => res.json());
  }


  getHotelList(id: any,currency: any, lang: any) {
    return this.http
      .get(this.BASE_URL + "hotels/?search_id=" + id + "&currency=" + currency + "&lang=" + lang, this.options)
      .map((res) => res.json());
  }

  getPaginatedhistoryList(pageNumber: number) {
    return this.http.get(this.BASE_URL + 'bookings/?page=' + pageNumber, this.options).map(res => res.json());
  }


  getAirportListSrc(airport: String): Observable<any> {
    return this.https.get<listAirport[]>(
      this.BASE_URL + "airports/autocomplete/?airport_type=DESTINATION&airport_type=BOARDING&search=" + airport,
      this.httpOptions
    );
  }

  getairlineslist(airline: String): Observable<any> {
    return this.https.get(
      this.BASE_URL + "airlines/autocomplete/?search=" + airline,
      this.httpOptions
    );
  }
}
