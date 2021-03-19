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
}