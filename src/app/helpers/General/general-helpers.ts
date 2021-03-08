import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/common/services/notification.service';
@Injectable({
  providedIn: 'root'
})
export class GeneralHelper {
  constructor(private notifyService : NotificationService,
    private router : Router) { }
  getAccessTocken(): string {
    if (localStorage && localStorage.getItem('accesstoken')) {
      return localStorage.getItem('accesstoken');
    }
    return "";
  }

  checkForAccessToken(): void {
    if (localStorage.getItem('accesstoken') == "") {
      this.notifyService.showWarning("Please Login")
      this.router.navigate(['/login']);
    }
  }

}