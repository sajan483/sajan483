import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Http, Response, Headers, RequestOptions, URLSearchParams, ResponseContentType} from "@angular/http";
import { Router} from "@angular/router";
import "rxjs/add/operator/toPromise";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from "rxjs";
import { listAirport } from "../../listAirport";
import { airportList } from 'src/app/models/aiportlist'

const BASE_URL = 'https://b2b.betatest.akbarumrah.com/apis/'
const BASE_URL2 = 'https://b2ctest.akbarumrah.com/apis/'
// const BASE_URL='http://umrah.fortelogic.in/'


@Injectable()
export class CommonApiService {

 httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    'Authorization': 'Bearer '+localStorage.getItem("accesstoken")
  }),
};
 options = {
  headers:new Headers({
    'Content-Type':'application/json',
    'Authorization':'Bearer '+localStorage.getItem("accesstoken")
    })
}

optionsForForm = {
  headers:new Headers({
    'Authorization':'Bearer '+localStorage.getItem("accesstoken")
    })
}

  constructor(private http: Http, private _httpClient: HttpClient, private router: Router,private https: HttpClient) {

  }

  getBranchess(accessToken: string) {
    return this.http.get(BASE_URL+'branches/', this.options).map(res => res.json());
  }

  getTripLists(accessToken: string, pageNumber:any) {
    return this.http.get(BASE_URL+'trips/?page='+pageNumber,this.options).map(res => res.json());
  }

  getAirportList() {
    return this.http.get(BASE_URL+'airports/',this.options).map(res => res.json());
  }
  getAirportListsearch(airport: String): Observable<any> {
    return this.https.get<airportList[]>(
      BASE_URL +
        "airports/autocomplete/?airport_type=DESTINATION&airport_type=BOARDING&search=" +
        airport,
      this.httpOptions
    );
  }

  getAgencies() {
    return this.http.get(BASE_URL+'agencies/',this.options).map(res => res.json());
  }

  getTransportationList(accessToken: string) {
  return this.http.get(BASE_URL+'ground_transports/',this.options).map(res => res.json());
  }
  getCountries(){
    return this.http.get(BASE_URL + "countries/", this.options).map(res => res.json());
  }

  getFlights(accessToken: string) {
    return this.http.get(BASE_URL + 'flights/', this.options).map(res => res.json());
  }
  getAccountHistory() {
    return this.http.get(BASE_URL + 'account/account_statement/', this.options).map(res => res.json());
  }
  getAccountDateHistory(fromdate:string,todate:string) {
    return this.http.get(BASE_URL + 'account/account_statement/?from_date='+fromdate+'&to_date='+todate, this.options).map(res => res.json());
  }
  getAccountbalance() {
    return this.http.get(BASE_URL + 'account/balance_enquiry', this.options).map(res => res.json());
  }

  getPaginatedFlightList(pageNumber: number) {
    return this.http.get(BASE_URL + 'flights/?boarding_airport=&destination_airport=&departure_timestamp=&page=' + pageNumber, this.options).map(res => res.json());
  }

  getPaginatedStaffList(pageNumber: number, lang) {
    return this.http.get(BASE_URL + 'staff/?search=&role=&page=' + pageNumber + '&lang=' + lang, this.options).map(res => res.json());
  }
  
  getPaginatedHotelList(pageNumber: number) {
    return this.http.get(BASE_URL + 'hotels/?page=' + pageNumber, this.options).map(res => res.json());
  }
  // getPaginatedbranchList(pageNumber: number) {
  //   return this.http.get(BASE_URL + 'branches/?page=' + pageNumber, this.options).map(res => res.json());
  // }
  getPaginatedbranchList(lang) {
    return this.http.get(BASE_URL + 'branches/?lang=' + lang, this.options).map(res => res.json());
  }
  getPaginatedhistoryList(pageNumber: number) {
    return this.http.get(BASE_URL + 'bookings/?page=' + pageNumber, this.options).map(res => res.json());
  }
  getPaginatedAirportList(pageNumber: number) {
    return this.http.get(BASE_URL + 'airports/?airport_type=DESTINATION&airport_type=BOARDING&page=' + pageNumber, this.options).map(res => res.json());
  }

  getSelectedFlight(id: any) {
    return this.http.get(BASE_URL + 'flights/' + id + '/', this.options).map(res => res.json());
  }

  getTripList(id: any) {
    return this.http.get(BASE_URL + 'trips/' + id + '/', this.options).map(res => res.json());
  }

  updateFlight(id: any, data: any) {
    return this.http.put(BASE_URL + 'flights/' + id + '/', data, this.options).map(res => res.json());
  }
  

  getSelectedBranch(id: any) {
    return this.http.get(BASE_URL + 'branches/' + id + '/', this.options).map(res => res.json());
  }

  getSelectedAirport(id: any) {
    return this.http.get(BASE_URL + 'airports/' + id + '/', this.options).map(res => res.json());
  }

  updateBranch(id: any, data: any) {
    return this.http.put(BASE_URL + 'branches/' + id + '/', data, this.options).map(res => res.json());
  }

  getTransportPaginationList(pageNumber: number) {
    return this.http.get(BASE_URL + 'ground_transports/?page=' + pageNumber, this.options).map(res => res.json());
  }

  getSelectedTransportation(id: any) {
    return this.http.get(BASE_URL + 'ground_transports/' + id + '/', this.options).map(res => res.json());
  }

  updateTransportation(id: any, data: any) {
    return this.http.put(BASE_URL + 'ground_transports/' + id + '/', data, this.options).map(res => res.json());
  }

  getSelectHotel(id: any) {
    return this.http.get(BASE_URL + 'hotels/' + id + '/', this.options).map(res => res.json());
  }

  updateHotel(id: any, data: any) {
    return this.http.put(BASE_URL + 'hotels/' + id + '/', data, this.options).map(res => res.json());
  }

  updateAirport(id: any, data: any) {
    return this.http.put(BASE_URL + 'airports/' + id + '/', data, this.options).map(res => res.json());
  }

  createAirport(data: any) {
    return this.http.post(BASE_URL + 'airports/', data, this.options).map(res => res.json());
  }

  createTrip(data: any,id:number) {
    return this.http.put(BASE_URL +  "packages/"+id+"/", data, this.options).map(res => res.json());
  }

  getAirportListSrc(airport: String): Observable<any> {
    return this.https.get<listAirport[]>(
      BASE_URL + "airports/autocomplete/?airport_type=DESTINATION&airport_type=BOARDING&search=" + airport,
      this.httpOptions
    );
  }

  getairlineslist(airline: String): Observable<any> {
    return this.https.get(
      BASE_URL + "airlines/autocomplete/?search=" + airline,
      this.httpOptions
    );
  }

  searchSSRFlights(data: any) {
    return this.http
      .post(BASE_URL + "flights/flight_ssr/", data, this.options)
      .map((res) => res.json());
  }
  searchINFOFlights(data: any) {
    return this.http
      .post(BASE_URL + "flights/flight_info/", data, this.options)
      .map((res) => res.json());
  }

  getHotelsList(pageNumber: number) {
    return this.http
      .get(BASE_URL + "hotels/?page=" + pageNumber, this.options)
      .map((res) => res.json());
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


//b2capis/ using apis..........starts

  searchFlights(data: any) {
    return this.http
      .post(BASE_URL2 + "flights/search/", data, this.options)
      .map((res) => res.json());
  }
  getSpecialFare(id: any) {
    return this.http
      .get(BASE_URL + "b2capis/flights/special_fare_ids/?rsid=" + id, this.options)
      .map((res) => res.json());
  }
  getFareRules(data: any) {
    return this.http
      .post(BASE_URL + "b2capis/flights/fare_rules/", data, this.options)
      .map((res) => res.json());
  }
  getReturnFlights(data: any) {
    return this.http
      .post(BASE_URL + "b2capis/flights/return_flights/", data, this.options)
      .map((res) => res.json());
  }

  getFlightPricingInfo(id: any) {
    return this.http
      .get(BASE_URL + "b2bapis/trips/" + id + "/flight_pricing/", this.options)
      .map((res) => res.json());
  }

  getFlightDetails(data: any) {
    return this.http
      .post(BASE_URL + "b2bapis/flights/flight_info/", data, this.options)
      .map((res) => res.json());
  }

  getSSR(data: any) {
    return this.http
      .post(BASE_URL + "b2capis/flights/flight_ssr/", data, this.options)
      .map((res) => res.json());
  }

  pilotHotelSearch(data: any, lang: any) {
    return this.http
      .post(BASE_URL + "b2capis/hotels/search/?lang=" + lang, data, this.options)
      .map((res) => res.json());
  }

  searchTransport(data) {
    return this.http
      .post(BASE_URL + "ground_transports/search/", data, this.options)
      .map((res) => res.json());
  }

  // Agency package apis starts 

  agencyHotelSearch(data: any, lang: any) {
    return this.http
      .post(BASE_URL + "packages/hotels/search/?lang=" + lang, data, this.options)
      .map((res) => res.json());
  }

  getPackageHotelInfo(data,currency,lang) {
    return this.http
      .post(BASE_URL + "packages/hotels/details/?currency=" + currency + "&lang=" + lang, data, this.options)
      .map((res) => res.json());
  }

  getPackageFlight(data,currency,lang) {
    return this.http
      .post(BASE_URL + "packages/?currency=" + currency + "&lang=" + lang, data, this.options)
      .map((res) => res.json());
  }


  updatePackageAPI(data,currency,lang,id){
    return this.http
      .put(BASE_URL + "packages/"+id+"/?currency=" + currency + "&lang=" + lang, data, this.options)
      .map((res) => res.json());
  }

  forDataPackageAPI(param,currency,lang,id){
    console.log("PARAM",param)
    let formData = new FormData();
    param.forEach((item,index) => {
          if(item.title){
            formData.append(`[itinerary_set][${index}][title]`, item.title);
          }
          if(item.from_date){
            formData.append(`[itinerary_set][${index}][from_date]`, item.from_date);
          }
          if(item.details){
            formData.append(`[itinerary_set][${index}][details]`, item.details);
          }
          if(item.attachments){
            item.attachments.map(x=>x.file).forEach((photo,i) => {
            formData.append(`[itinerary_set][${index}][attachments][${i}][file]`, photo);
            });
          }       
        });
    return this.http
      .put(BASE_URL + "packages/"+id+"/?currency=" + currency + "&lang=" + lang,formData,this.optionsForForm);
  }



  // b2capis/ using apis ........ end

  initHotelSearch(data: any) {
   
    return this.http
      .post(BASE_URL + "hotels/search/", data, this.options)
      .map((res) => res.json());
  }

  createTripFlight(data: any) {
    return this.http
      .post(BASE_URL + "custom_trips/", data, this.options)
      .map((res) => res.json());
  }

  getVisaTypes() {
    return this.http
      .get(BASE_URL + "visa_types/", this.options)
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
      BASE_URL +
        "airports/autocomplete/?airport_type=BOARDING",
      this.httpOptions
    );
  }

  getHotelList(id: any,currency: any, lang: any) {
    return this.http
      .get(BASE_URL + "hotels/?search_id=" + id + "&currency=" + currency + "&lang=" + lang, this.options)
      .map((res) => res.json());
  }

  getRoutes(lang) {
    return this.http
      .get(BASE_URL + "ground_transports/routes/?lang=" + lang , this.options)
      .map((res) => res.json());
  }

  getVehicles(lang) {
    return this.http
      .get(BASE_URL + "ground_transports/vehicle_types/?lang=" + lang , this.options)
      .map((res) => res.json());
  }

  getCategories(lang) {
    return this.http
      .get(BASE_URL + "ground_transports/categories/?lang=" + lang , this.options)
      .map((res) => res.json());
  }

  getPackageCategories(lang){
    return this.http
      .get(BASE_URL + "packages/categories/?lang=" + lang , this.options)
      .map((res) => res.json());
  }

  getserviceCategories(lang) {
    return this.http
      .get(BASE_URL + "ground_services/categories/" , this.options)
      .map((res) => res.json());
  }

  getAdditionalServices(lang) {
    return this.http
      .get(BASE_URL + "ground_transports/additional_services/?lang=" + lang , this.options)
      .map((res) => res.json());
  }

  getserviceAdditionalServices() {
    return this.http
      .get(BASE_URL + "ground_services/additional_services/" , this.options)
      .map((res) => res.json());
  }

  getCompanies(lang) {
    return this.http
      .get(BASE_URL + "ground_transports/companies/?lang=" + lang , this.options)
      .map((res) => res.json());
  }

  
  searchTransportList(id,currency,lang) {
    return this.http
      .get(BASE_URL + "ground_transports/?search_id=" + id + "&currency=" + currency + "&lang=" + lang, this.options)
      .map((res) => res.json());
  }

  getSelectedHotelInfo(data,currency,lang) {
    return this.http
      .post(BASE_URL + "hotels/details/?currency=" + currency + "&lang=" + lang, data, this.options)
      .map((res) => res.json());
  }

  updateCustomTrip(id,data){
    return this.http
    .put(BASE_URL + "custom_trips/"+id+"/",data, this.options)
    .map((res) => res.json());
  }

  bookCustomTrip(data){
    return this.http
    .post(BASE_URL + "custom_trips/",data, this.options)
    .map((res) => res.json());
  }

  searchGroundservice(data){
    return this.http
    .post(BASE_URL + "ground_services/search/",data, this.options)
    .map((res) => res.json());
  }

  searchGroundserviceList(id,currency,lang) {
    return this.http
      .get(BASE_URL + "ground_services/?search_id=" + id + "&currency=" + currency + "&lang=" + lang, this.options)
      .map((res) => res.json());
  }

  getNationality(data, lang) {
    return this.http
      .get(BASE_URL + "nationalities/?search=" + data + "&lang=" + lang, this.options)
      .map((res) => res.json());
  }

  getCountry(data, lang) {
    return this.http
      .get(BASE_URL + "countries/?search=" + data + "&lang=" + lang, this.options)
      .map((res) => res.json());
  }
  

  getTrip(id){
    return this.http
    .get(BASE_URL + "custom_trips/" + id + "/", this.options)
    .map((res) => res.json());
  }

  bookTrip(data,id){
    return this.http
    .post(BASE_URL + "custom_trips/" + id + "/booking/",data, this.options)
    .map((res) => res.json());
  }

  saveSelectedHotel(data){
    return this.http
    .post(BASE_URL + "custom_trips/",data, this.options)
    .map((res) => res.json());
  }

  saveSelectedMadeenaHotel(data){
    return this.http
    .post(BASE_URL + "custom_trips/",data, this.options)
    .map((res) => res.json());
  }

  bookingPayment(data){
    return this.http
    .post(BASE_URL + "payments/",data, this.options)
    .map((res) => res.json());
  }

  checkAvailability(id){
    return this.http
    .get(BASE_URL + "b2b_trip_booking/"+id+"/check_availability/", this.options)
    .map((res) => res.json());
  }

  getCurrencies() {
    return this.http
      .get(BASE_URL + "currencies", this.options)
      .map((res) => res.json());
  }

  getPaymentDetails(id){
    return this.http
      .get(BASE_URL + "bookings/"+id+"/", this.options)
      .map((res) => res.json());
  }

  getVisaDetails(id){
    return this.http
    .get(BASE_URL + "custom_trip_booking/"+id+"/update_mutamer_info/", this.options)
    .map((res) => res.json());
  }

  getTravllerVisa(id){
    return this.http
    .get(BASE_URL + "custom_trip_booking/"+id+"/get_visa_status/", this.options)
    .map((res) => res.json());
  }

  getCheckCancellation(id){
    return this.http
    .get(BASE_URL + "custom_trip_booking/"+id+"/check_cancellation/", this.options)
    .map((res) => res.json());
  }

  getStaffDetails(){
    return this.http
    .get(BASE_URL + "staff/profile/", this.options)
    .map((res) => res.json());
  }

  getConfirmCancellation(id,data){
    return this.http
    .post(BASE_URL + "custom_trip_booking/"+id+"/confirm_cancellation/",data, this.options)
    .map((res) => res.json());
  }

  sendNotification(id:any) {
    return this.http
      .get(BASE_URL + "bookings/"+id+"/resend_notification/", this.options)
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
    .get(BASE_URL + "bookings/"+id+"/invoice_template/", bookingOptions)
    .map((res) =>
    {
      return new Blob([res.blob()], { type: 'text/html' })
    });
  }

  getVoucher(id){
    const bookingOptions = {
      responseType: ResponseContentType.Blob,
      headers: new Headers({
        "Authorization": "Bearer Guest",
      }),
      
    };
    return this.http
    .get(BASE_URL + "bookings/"+id+"/voucher_template/", bookingOptions)
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
    .get(BASE_URL + "bookings/"+id+"/invoice/", bookingOptions)
    .map((res) =>
    {
      return new Blob([res.blob()], { type: 'application/pdf' })
    });
  }

  getVoucherPdf(id){
    const bookingOptions = {
      responseType: ResponseContentType.Blob,
      headers: new Headers({
        "Authorization": "Bearer Guest",
      }),
      
    };
    return this.http
    .get(BASE_URL + "bookings/"+id+"/voucher/", bookingOptions)
    .map((res) =>
    {
      return new Blob([res.blob()], { type: 'application/pdf' })
    });
  }

  getLanguages() {
    return this.http
      .get(BASE_URL + "languages/", this.options)
      .map((res) => res.json());
  }
  signup(body:any){
    return this.http
      .post(BASE_URL + "agencies/signup/",body)
      .map((res) => res.json());
  }
  getAgencyApprovedDetails(id:any) {
    return this.http
      .get(BASE_URL + "agencies/"+id+"/approval_details/", this.options)
      .map((res) => res.json());
  } 

  otaUpgrade(passportFile: File, contractsign: File, bankLetter: File, body:any, id:any){
    const formData: FormData = new FormData();
    formData.append('passport',passportFile);
    formData.append('contract',contractsign);
    formData.append('bank_letter',bankLetter);
    formData.append('signatory_name',body.signatiureName);
    formData.append('passport_number',body.passportNo);
    formData.append('iata_license',body.iataLicence);
    formData.append('mobile',body.mobileNo);
    formData.append('commercial_regno',body.commercialreg);
    formData.append('request_text',body.reqstText);
    console.log(formData)

    return this.http
      .post(BASE_URL + "agencies/"+id+"/approval_request/",formData)
      .map((res) => res.json());
  }

  getSavedData(id) {
    return this.http
      .get(BASE_URL + "packages/"+id+"/", this.options)
      .map((res) => res.json());
  }

  getOtp(data) {
    return this.http.post(BASE_URL+'staff/forgot_password/',data).map(res => res.json());
  }

  changePassword(data) {
    return this.http.post(BASE_URL+'staff/change_password/',data).map(res => res.json());
  }

  branchCreation(data) {
    return this.http.post(BASE_URL+'branches/',data).map(res => res.json());
  }

  options2 = {
    headers:new Headers({
      'Content-Type':'application/json',
      'Authorization':'Bearer c94a5a8852f96bbb34a87e580c474367185d7291'
      })
  }

  sample() {
    return this.http.get('http://13.234.228.171/clubAdminApis/ticketFilter',this.options2).map(res => res.json());
  }
  
}