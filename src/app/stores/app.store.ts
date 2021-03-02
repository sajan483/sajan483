import { Injectable } from '@angular/core';
import { observable } from "mobx-angular";
import { Room } from '../models/visaTypes';

@Injectable({
  providedIn: 'root'
})
export class AppStore {
  @observable currencyCode: string;
  @observable adultCount: number;
  @observable childCount: number;
  @observable infantCount : number;
  @observable totalTravellers : number;
  @observable stepperIndex : number;
  @observable currentUser : string;
  @observable langCode: string;
  @observable stepsArray:string[];
  @observable roomArray:Room[];
  @observable userDetails:any;
  @observable customeTripId:any;
  @observable customeTripBookingId:any;
  @observable transportSearchId:any;
  @observable vehicleMax:number;
  @observable showRoomAlPopup:boolean;
  @observable showHotelDetails:boolean;
  @observable showShimmer:boolean;
  @observable makkahSearchId:any;
  @observable madinahSearchId:any;
  @observable showHotelDetailsShimmer: boolean;
  @observable noOfDaysInMakkah:number;
  @observable noOfDaysInMadeena:number;
  constructor() { }
}