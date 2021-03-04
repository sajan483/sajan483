import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../../common/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { AppStore } from 'src/app/stores/app.store';
import { Router } from '@angular/router';

export class loginHelper{
    constructor(private cookie: CookieService,
        private notifyService: NotificationService,
        private translate: TranslateService,
        private appStore: AppStore,
        private router: Router){}

    /**
     * this method for saving username and password to cookie
     */
    setDataForCookies(userName:any,password:any){
        this.cookie.set("userName", userName);
        this.cookie.set("password", password);
    }
    
    loginResponse(data:any,rememberme:boolean){
        var access = data.access;
        var etype = data.staff.employer_type;
        localStorage.setItem('accesstoken', data.access);
        if (rememberme) {
          localStorage.setItem('isTouched', 'true');
        }
        if (!rememberme) {
          localStorage.setItem('isTouched', null);
          this.cookie.set("userName", null);
          this.cookie.set("password", null);
        }

        localStorage.setItem('empId', data.staff.employer_id);
        if (localStorage.getItem('accesstoken') != null) {
          if (etype == 'branch') {
            this.notifyService.showSuccess(this.translate.instant('success !!'));
            this.appStore.currentUser = etype;
            localStorage.setItem('currentUser', etype);
            this.router.navigate(['subagent/home/']);
          }
          if (etype == 'agency') {
            if (data.staff.is_approved == 'False') {
              this.notifyService.showWarning(this.translate.instant('processing !!'));
              this.router.navigate(["upload", data.staff.employer_id]);
            } else {
              this.notifyService.showSuccess(this.translate.instant('success !!'));
              this.appStore.currentUser = etype;
              localStorage.setItem('currentUser', etype);
              this.router.navigate(["first/"]);
            }

          }
        }
    }
}