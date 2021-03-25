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

  uploadTripImage(data,currency,lang,id){
    console.log(data);
    
    let formData = new FormData();
    data.map(x=>x.file).forEach((item,index) => {
      formData.append(`[${index}][file]`, item);
    })
    return this.http
      .put(this.BASE_URL + "packages/"+id+"/?currency=" + currency + "&lang=" + lang, formData, this.options)
      .map((res) => res.json());
  }

  forItinerarySetAPI(param,currency,lang,id){
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
      .put(this.BASE_URL + "packages/"+id+"/?currency=" + currency + "&lang=" + lang,formData,this.optionsForForm);
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

}