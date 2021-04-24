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
import { Observable } from "rxjs";
import { listAirport } from "../models/listAirport";
import { environment } from "src/environments/environment";

@Injectable()
export class SuperAgentApiService {
  BASE_URL: any = environment.baseUrl;
  BASE_URL2: any = environment.baseUrl2;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("accesstoken"),
    }),
  };
  options = {
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("accesstoken"),
    }),
  };

  optionsForForm = {
    headers: new Headers({
      Authorization: "Bearer " + sessionStorage.getItem("accesstoken"),
    }),
  };

  constructor(
    private http: Http,
    private _httpClient: HttpClient,
    private router: Router,
    private https: HttpClient
  ) {}

  searchFlights(data: any) {
    return this.http
      .post(this.BASE_URL + "flights/search/", data, this.options)
      .map((res) => res.json());
  }

  getAirportListSrc(airport: String): Observable<any> {
    return this.https.get<listAirport[]>(
      this.BASE_URL +
        "airports/autocomplete/?airport_type=DESTINATION&airport_type=BOARDING&search=" +
        airport,
      this.httpOptions
    );
  }
  
  getairlineslist(airline: String): Observable<any> {
        return this.https.get(
          this.BASE_URL + "airlines/autocomplete/?search=" + airline,
          this.httpOptions
        );
    }

  agencyHotelSearch(data: any, lang: any) {
    return this.http
      .post(this.BASE_URL + "packages/hotels/search/?lang=" + lang, data, this.options)
      .map((res) => res.json());
  }

  updatePackageAPI(data,currency,lang,id){
    return this.http
      .put(this.BASE_URL + "packages/"+id+"/?currency=" + currency + "&lang=" + lang, data, this.options)
      .map((res) => res.json());
  }

  getPackageCategories(lang){
    return this.http
      .get(this.BASE_URL + "packages/categories/?lang=" + lang , this.options)
      .map((res) => res.json());
  }

  getVisaType(){
    return this.http
      .get(this.BASE_URL + "visa_types/", this.options)
      .map((res) => res.json());
  }

  getPackageDetails(id){
    return this.http
      .get(this.BASE_URL + "packages/"+id+"/", this.options)
      .map((res) => res.json());
  }

  getPackageHotelInfo(data,currency,lang) {
    return this.http
      .post(this.BASE_URL + "packages/hotels/details/?currency=" + currency + "&lang=" + lang, data, this.options)
      .map((res) => res.json());
  }
  
  searchSSRFlights(data: any) {
    return this.http
      .post(this.BASE_URL + "flights/flight_ssr/", data, this.options)
      .map((res) => res.json());
  }

  getFareRules(data: any) {
    return this.http
      .post(this.BASE_URL + "b2capis/flights/fare_rules/", data, this.options)
      .map((res) => res.json());
  }

  createPackage(data,currency,lang) {
    return this.http
      .post(this.BASE_URL + "packages/?currency=" + currency + "&lang=" + lang, data, this.options)
      .map((res) => res.json());
  }

  publishPackage(data: any,id:number) {
    return this.http.put(this.BASE_URL +  "packages/"+id+"/", data, this.options).map(res => res.json());
  }

  getBranchlist(lang){
    return this.http
      .get(this.BASE_URL + 'branches/?lang=' + lang, this.options)
      .map((res) => res.json());
  }

  getPaginatedStaffList(pageNumber: number, lang) {
    return this.http.get(this.BASE_URL + 'staff/?search=&role=&page=' + pageNumber + '&lang=' + lang, this.options).map((res) => res.json());
  }

  getAgency(){
    return this.http
      .get(this.BASE_URL + 'agencies/', this.options)
      .map((res) => res.json());
  }

  branchCreation(data){
    return this.http
      .post(this.BASE_URL + "branches/", data, this.options)
      .map((res) => res.json());
  }

  getSelectedBranch(id: any) {
    return this.http.get(this.BASE_URL + 'branches/' + id + '/', this.options).map(res => res.json());
  }

  updateBranch(id: any, data: any) {
    return this.http.put(this.BASE_URL + 'branches/' + id + '/', data, this.options).map(res => res.json());
  }

  staffRegister(data:any){
    return this.http
      .post(this.BASE_URL + "staff/", data, this.options)
      .map((res) => res.json());
  }

  getAccountHistory() {
    return this.http.get(this.BASE_URL + 'account/account_statement/', this.options).map(res => res.json());
  }

  getAccountDateHistory(fromdate:string,todate:string) {
    return this.http.get(this.BASE_URL + 'account/account_statement/?from_date='+fromdate+'&to_date='+todate, this.options).map(res => res.json());
  }

  getAgencyApprovedDetails(id:any) {
    return this.http
      .get(this.BASE_URL + "agencies/"+id+"/approval_details/", this.options)
      .map((res) => res.json());
  } 

  getSalesOverView(month) {
    return this.http.get(this.BASE_URL2 +'dashboard/overview?month='+month, this.options).map(res => res.json());
  }

  uploadTripImage(data,currency,lang,id){
    let formData = new FormData();
    formData.append('[attachments][0][file]',data[0].file);
    console.log("m",formData.get('[attachments][0][file]'));
     return this.http
      .put(this.BASE_URL + "packages/"+id+"/?currency=" + currency + "&lang=" + lang, formData, this.options)
      .map((res) => res.json());
  }

  forItinerarySetAPI(param,currency,lang,id){
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
            console.log('dsdsdsd',formData.get('[itinerary_set][${index}][attachments][${i}][file]`'))
            });
          }       
        });
    return this.http
      .put(this.BASE_URL + "packages/"+id+"/?currency=" + currency + "&lang=" + lang,formData,this.optionsForForm);
  }

}