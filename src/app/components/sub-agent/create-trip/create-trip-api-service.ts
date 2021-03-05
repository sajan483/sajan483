import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Http, Headers, ResponseContentType } from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/add/operator/toPromise";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { listAirport } from "../../../models/listAirport";
import { airportList } from "src/app/models/airportList";

const BASE_URL = "https://b2b.betatest.akbarumrah.com/apis/";
const BASE_URL2 = "https://b2ctest.akbarumrah.com/apis/";

@Injectable()
export class ApiService {
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

  constructor(
    private http: Http,
    private _httpClient: HttpClient,
    private router: Router,
    private https: HttpClient
  ) {}

  getTransportationList(accessToken: string) {
    return this.http
      .get(BASE_URL + "ground_transports/", this.options)
      .map((res) => res.json());
  }
  getCountries() {
    return this.http
      .get(BASE_URL + "countries/", this.options)
      .map((res) => res.json());
  }

  getAccountDateHistory(fromdate: string, todate: string) {
    return this.http
      .get(
        BASE_URL +
          "account/account_statement/?from_date=" +
          fromdate +
          "&to_date=" +
          todate,
        this.options
      )
      .map((res) => res.json());
  }

  getSelectedTransportation(id: any) {
    return this.http
      .get(BASE_URL + "ground_transports/" + id + "/", this.options)
      .map((res) => res.json());
  }

  updateTransportation(id: any, data: any) {
    return this.http
      .put(BASE_URL + "ground_transports/" + id + "/", data, this.options)
      .map((res) => res.json());
  }

  getSelectHotel(id: any) {
    return this.http
      .get(BASE_URL + "hotels/" + id + "/", this.options)
      .map((res) => res.json());
  }

  updateHotel(id: any, data: any) {
    return this.http
      .put(BASE_URL + "hotels/" + id + "/", data, this.options)
      .map((res) => res.json());
  }

  createTrip(data: any, id: number) {
    return this.http
      .put(BASE_URL + "packages/" + id + "/", data, this.options)
      .map((res) => res.json());
  }

  getAirportListSrc(airport: String): Observable<any> {
    return this.https.get<listAirport[]>(
      BASE_URL +
        "airports/autocomplete/?airport_type=DESTINATION&airport_type=BOARDING&search=" +
        airport,
      this.httpOptions
    );
  }

  getairlineslist(airline: String): Observable<any> {
    return this.https.get(
      BASE_URL + "airlines/autocomplete/?search=" + airline,
      this.httpOptions
    );
  }

  getPackageDetails(id: number) {
    return this.http
      .get(BASE_URL + "trips/" + id + "/", this.options)
      .map((res) => res.json());
  }

  createOtp(data: any) {
    return this.http
      .post(BASE_URL + "login/generate_otp/", data, this.options)
      .map((res) => res.json());
  }

  verifyOtp(data: any) {
    return this.http
      .post(BASE_URL + "login/verify_otp/?", data, this.options)
      .map((res) => res.json());
  }

  generateOtp(data: any) {
    return this.http
      .post(BASE_URL + "login/join/", data, this.options)
      .map((res) => res.json());
  }

  searchTransport(data) {
    return this.http
      .post(BASE_URL + "ground_transports/search/", data, this.options)
      .map((res) => res.json());
  }

  initHotelSearch(data: any) {
    return this.http
      .post(BASE_URL + "hotels/search/", data, this.options)
      .map((res) => res.json());
  }

  getVehicleList() {
    return this.http
      .get(BASE_URL + "vehicles/", this.options)
      .map((res) => res.json());
  }

  getAirportListD(): Observable<any> {
    return this.https.get<airportList[]>(
      BASE_URL + "airports/autocomplete/?airport_type=DESTINATION",
      this.httpOptions
    );
  }

  getAirportListA(airport: String): Observable<any> {
    return this.https.get<airportList[]>(
      BASE_URL +
        "airports/autocomplete/?airport_type=DESTINATION&airport_type=BOARDING&search=" +
        airport,
      this.httpOptions
    );
  }

  getDestinationAirport(): Observable<any> {
    return this.https.get<airportList[]>(
      BASE_URL + "airports/autocomplete/?airport_type=BOARDING",
      this.httpOptions
    );
  }

  getHotelList(id: any, currency: any, lang: any) {
    return this.http
      .get(
        BASE_URL +
          "hotels/?search_id=" +
          id +
          "&currency=" +
          currency +
          "&lang=" +
          lang,
        this.options
      )
      .map((res) => res.json());
  }

  getRoutes(lang) {
    return this.http
      .get(BASE_URL + "ground_transports/routes/?lang=" + lang, this.options)
      .map((res) => res.json());
  }

  getVehicles(lang) {
    return this.http
      .get(
        BASE_URL + "ground_transports/vehicle_types/?lang=" + lang,
        this.options
      )
      .map((res) => res.json());
  }

  getCategories(lang) {
    return this.http
      .get(
        BASE_URL + "ground_transports/categories/?lang=" + lang,
        this.options
      )
      .map((res) => res.json());
  }

  getAdditionalServices(lang) {
    return this.http
      .get(
        BASE_URL + "ground_transports/additional_services/?lang=" + lang,
        this.options
      )
      .map((res) => res.json());
  }

  getserviceAdditionalServices() {
    return this.http
      .get(BASE_URL + "ground_services/additional_services/", this.options)
      .map((res) => res.json());
  }

  getCompanies(lang) {
    return this.http
      .get(BASE_URL + "ground_transports/companies/?lang=" + lang, this.options)
      .map((res) => res.json());
  }

  searchTransportList(id, currency, lang) {
    return this.http
      .get(
        BASE_URL +
          "ground_transports/?search_id=" +
          id +
          "&currency=" +
          currency +
          "&lang=" +
          lang,
        this.options
      )
      .map((res) => res.json());
  }

  getSelectedHotelInfo(data, currency, lang) {
    return this.http
      .post(
        BASE_URL + "hotels/details/?currency=" + currency + "&lang=" + lang,
        data,
        this.options
      )
      .map((res) => res.json());
  }

  updateCustomTrip(id, data) {
    return this.http
      .put(BASE_URL + "custom_trips/" + id + "/", data, this.options)
      .map((res) => res.json());
  }

  bookCustomTrip(data) {
    return this.http
      .post(BASE_URL + "custom_trips/", data, this.options)
      .map((res) => res.json());
  }

  searchGroundservice(data) {
    return this.http
      .post(BASE_URL + "ground_services/search/", data, this.options)
      .map((res) => res.json());
  }

  searchGroundserviceList(id, currency, lang) {
    return this.http
      .get(
        BASE_URL +
          "ground_services/?search_id=" +
          id +
          "&currency=" +
          currency +
          "&lang=" +
          lang,
        this.options
      )
      .map((res) => res.json());
  }

  getNationality(data, lang) {
    return this.http
      .get(
        BASE_URL + "nationalities/?search=" + data + "&lang=" + lang,
        this.options
      )
      .map((res) => res.json());
  }

  getCountry(data, lang) {
    return this.http
      .get(
        BASE_URL + "countries/?search=" + data + "&lang=" + lang,
        this.options
      )
      .map((res) => res.json());
  }

  getTrip(id) {
    return this.http
      .get(BASE_URL + "custom_trips/" + id + "/", this.options)
      .map((res) => res.json());
  }

  bookTrip(data, id) {
    return this.http
      .post(BASE_URL + "custom_trips/" + id + "/booking/", data, this.options)
      .map((res) => res.json());
  }

  saveSelectedHotel(data) {
    return this.http
      .post(BASE_URL + "custom_trips/", data, this.options)
      .map((res) => res.json());
  }

  bookingPayment(data) {
    return this.http
      .post(BASE_URL + "payments/", data, this.options)
      .map((res) => res.json());
  }

  checkAvailability(id) {
    return this.http
      .get(
        BASE_URL + "b2b_trip_booking/" + id + "/check_availability/",
        this.options
      )
      .map((res) => res.json());
  }

  getCurrencies() {
    return this.http
      .get(BASE_URL + "currencies", this.options)
      .map((res) => res.json());
  }

  getPaymentDetails(id) {
    return this.http
      .get(BASE_URL + "bookings/" + id + "/", this.options)
      .map((res) => res.json());
  }

  getCheckCancellation(id) {
    return this.http
      .get(
        BASE_URL + "custom_trip_booking/" + id + "/check_cancellation/",
        this.options
      )
      .map((res) => res.json());
  }

  getConfirmCancellation(id, data) {
    return this.http
      .post(
        BASE_URL + "custom_trip_booking/" + id + "/confirm_cancellation/",
        data,
        this.options
      )
      .map((res) => res.json());
  }

  sendNotification(id: any) {
    return this.http
      .get(BASE_URL + "bookings/" + id + "/resend_notification/", this.options)
      .map((res) => res.json());
  }

  getInvoice(id) {
    const bookingOptions = {
      responseType: ResponseContentType.Blob,
      headers: new Headers({
        Authorization: "Bearer Guest",
      }),
    };
    return this.http
      .get(BASE_URL + "bookings/" + id + "/invoice_template/", bookingOptions)
      .map((res) => {
        return new Blob([res.blob()], { type: "text/html" });
      });
  }

  getVoucher(id) {
    const bookingOptions = {
      responseType: ResponseContentType.Blob,
      headers: new Headers({
        Authorization: "Bearer Guest",
      }),
    };
    return this.http
      .get(BASE_URL + "bookings/" + id + "/voucher_template/", bookingOptions)
      .map((res) => {
        return new Blob([res.blob()], { type: "text/html" });
      });
  }

  getInvoicePdf(id) {
    const bookingOptions = {
      responseType: ResponseContentType.Blob,
      headers: new Headers({
        Authorization: "Bearer Guest",
      }),
    };
    return this.http
      .get(BASE_URL + "bookings/" + id + "/invoice/", bookingOptions)
      .map((res) => {
        return new Blob([res.blob()], { type: "application/pdf" });
      });
  }

  getVoucherPdf(id) {
    const bookingOptions = {
      responseType: ResponseContentType.Blob,
      headers: new Headers({
        Authorization: "Bearer Guest",
      }),
    };
    return this.http
      .get(BASE_URL + "bookings/" + id + "/voucher/", bookingOptions)
      .map((res) => {
        return new Blob([res.blob()], { type: "application/pdf" });
      });
  }

  getLanguages() {
    return this.http
      .get(BASE_URL + "languages/", this.options)
      .map((res) => res.json());
  }
  
  signup(body: any) {
    return this.http
      .post(BASE_URL + "agencies/signup/", body)
      .map((res) => res.json());
  }

  getSavedData(id) {
    return this.http
      .get(BASE_URL + "packages/" + id + "/", this.options)
      .map((res) => res.json());
  }

  getOtp(data) {
    return this.http
      .post(BASE_URL + "staff/forgot_password/", data)
      .map((res) => res.json());
  }

  changePassword(data) {
    return this.http
      .post(BASE_URL + "staff/change_password/", data)
      .map((res) => res.json());
  }

  //b2capis/ using apis..........starts

  pilotHotelSearch(data: any, lang: any) {
    return this.http
      .post(
        BASE_URL + "b2capis/hotels/search/?lang=" + lang,
        data,
        this.options
      )
      .map((res) => res.json());
  }

  //b2capis/ using apis..........ends
}
