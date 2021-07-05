import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Router } from "@angular/router";
import "rxjs/add/operator/toPromise";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { listAirport } from "../models/listAirport";


@Injectable()
export class SubAgentApiService {
  
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  getStaffDetails(): Observable<any> {
    return this.http.get( "staff/profile/")
  }
  
  getSelectedHotelInfo(data, currency, lang): Observable<any> {
    return this.http
      .post( "hotels/details/?currency=" + currency + "&lang=" + lang, data)
  }

  saveSelectedHotel(data,lang): Observable<any> {
    return this.http
      .post( "custom_trips/"+"?lang=" + lang, data)
  }


  getVoucherPdf(id): Observable<any>{
    return this.http
    .get("bookings/"+id+"/voucher/",{responseType:'blob'})
  }

  getLanguages(): Observable<any> {
    return this.http
      .get( "languages/")
  }
  
  updateCustomTrip(id,data,lang): Observable<any>{
    return this.http
    .put("custom_trips/"+id+"/?lang=" + lang,data)
  }

  bookCustomTrip(data): Observable<any> {
    return this.http
      .post( "custom_trips/", data)
  }

  getPaymentDetails(id,lang): Observable<any>{
    return this.http
      .get("bookings/"+id+"/?lang=" + lang)
  }

  getVisaDetails(id,lang): Observable<any>{
    return this.http
    .get("custom_trip_booking/"+id+"/update_mutamer_info/?lang=" + lang)
  }

  getInvoice(id): Observable<any>{
    return this.http
    .get("bookings/"+id+"/invoice_template/",{responseType:'blob'})
  }
    
  getConfirmCancellation(id,data): Observable<any>{
    return this.http
    .post("b2b_trip_booking/"+id+"/confirm_cancellation/",data)
  }

  getCheckCancellation(id,lang): Observable<any>{
    return this.http
    .get("b2b_trip_booking/"+id+"/check_cancellation/?lang=" + lang)
  }


  getVoucher(id): Observable<any>{
    return this.http
    .get("bookings/"+id+"/voucher_template/",{responseType:'blob'})
  }

  getInvoicePdf(id): Observable<any>{
    return this.http
    .get("bookings/"+id+"/invoice/",{responseType:'blob'})
  }


  sendNotification(id:any): Observable<any> {
    return this.http
      .get( "bookings/"+id+"/resend_notification/")
  }


  bookTrip(data,id,lang): Observable<any>{
    return this.http
    .post( "custom_trips/" + id + "/booking/?lang=" + lang,data)
  }


  searchTransport(data): Observable<any> {
    return this.http
      .post( "ground_transports/search/", data)
  }

    
  searchTransportList(id,currency,lang): Observable<any> {
    return this.http
      .get("ground_transports/?search_id=" + id + "&currency=" + currency + "&lang=" + lang)
  }


  getTrip(id,lang): Observable<any>{
    return this.http
    .get("custom_trips/" + id + "/"+ "?lang=" + lang)
  }


  checkAvailability(id): Observable<any>{
    return this.http
    .get("b2b_trip_booking/"+id+"/check_availability/")
  }

  bookingPayment(data): Observable<any>{
    return this.http
    .post( "payments/",data)
  }
  
  getCategories(lang): Observable<any> {
    return this.http
      .get( "ground_transports/categories/?lang=" + lang)
  }

  getAdditionalServices(lang): Observable<any> {
    return this.http
      .get(+ "ground_transports/additional_services/?lang=" + lang )
  }

  getserviceAdditionalServices(): Observable<any> {
    return this.http
      .get("ground_services/additional_services/")
  }


  pilotHotelSearch(data: any, lang: any): Observable<any> {
    return this.http
      .post( "b2capis/hotels/search/?lang=" + lang, data)
  }


  getHotelList(id: any,currency: any, lang: any): Observable<any> {
    return this.http
      .get("hotels/?search_id=" + id + "&currency=" + currency + "&lang=" + lang)
  }

  getPaginatedhistoryList(pageNumber: number,lang): Observable<any> {
    return this.http.get( 'bookings/?page=' + pageNumber + "&lang=" + lang)
  }

  getIbanDetails(lang): Observable<any> {
    return this.http.get( 'account/balance_enquiry/?lang=' + lang)
  }

  getIbanHistory(from,to,lang): Observable<any> {
    return this.http.get( 'account/account_statement/?from_date='+from+'&to_date='+to+'&lang=' + lang)
  }

  getAirportListSrc(airport: String): Observable<any> {
    return this.http.get<listAirport[]>( "airports/autocomplete/?airport_type=DESTINATION&airport_type=BOARDING&search=" + airport);
  }

  getairlineslist(airline: String): Observable<any> {
    return this.http.get("airlines/autocomplete/?search=" + airline);
  }

  getRoutes(lang): Observable<any> {
    return this.http
      .get("ground_transports/routes/?lang=" + lang)
  }

  getVehicles(lang): Observable<any> {
    return this.http
      .get("ground_transports/vehicle_types/?lang=" + lang)
  }

}
