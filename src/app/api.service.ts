import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import { staffList } from './staffList';
import { Observable, from } from 'rxjs';
import { listHotel } from './listHotel';
import { listAirport } from './listAirport';
import { listBranch } from './listBranch';
import { listflight } from './listflight';
import { transportList } from './transportList';

const BASE_URL = 'https://b2b.betatest.akbarumrah.com/apis/'
// const BASE_URL='http://umrah.fortelogic.in/'

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'Bearer '+localStorage.getItem("accesstoken")
    })
}
@Injectable({ 
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getstaffList(): Observable<any>{
    return this.http.get<staffList[]>(
      BASE_URL+'staff/?search=&role=',httpOptions);
  }
  getHotelList(): Observable<any>{
    return this.http.get<listHotel[]>(
      BASE_URL+'hotels/',httpOptions);
  }
  getAirportList(): Observable<any>{
    return this.http.get<listAirport[]>(
      BASE_URL+'airports/',httpOptions);
  }
  getBrachList(): Observable<any>{
    return this.http.get<listBranch[]>(
      BASE_URL+'branches/',httpOptions);
  }
  getflightList(): Observable<any>{
    return this.http.get<listflight[]>(
      BASE_URL+'flights/',httpOptions);
  }
  getTransportList(): Observable<any>{
    return this.http.get<transportList[]>(
      BASE_URL+'ground_transports/',httpOptions);
  }
  


  registerHotel(data:any): Observable<any>{
    return this.http.post<any>(BASE_URL+'hotels/',data,httpOptions)
  }
  registerStaff(data:any): Observable<any>{
    return this.http.post(BASE_URL+'staff/',data,httpOptions)
   }
   registerTransport(data:any): Observable<any>{
    return this.http.post(BASE_URL+'ground_transports/',data,httpOptions)
   } 
   createFlight(data:any): Observable<any>{
     return this.http.post(BASE_URL+'flights/',data,httpOptions)
   }
}
