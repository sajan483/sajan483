import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GeneralHelper {
  constructor() { }
  getAccessTocken(): string {
    if (localStorage && localStorage.getItem('accesstoken')) {
      return localStorage.getItem('accesstoken');
    }
    return "";
  }
}