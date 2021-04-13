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
        sessionStorage.setItem('accesstoken', data.access);
        if (rememberme) {
          sessionStorage.setItem('isTouched', 'true');
        }
        if (!rememberme) {
          sessionStorage.setItem('isTouched', null);
          this.cookie.set("userName", null);
          this.cookie.set("password", null);
        }

        sessionStorage.setItem('empId', data.staff.employer_id);
        if (sessionStorage.getItem('accesstoken') != null) {
          if (etype == 'branch') {
            this.notifyService.showSuccess(this.translate.instant('success !!'));
            this.appStore.currentUser = etype;
            this.appStore.userType = data.staff.employer_name;
            sessionStorage.setItem('currentUser', etype);
            this.router.navigate(['subagent/home/']);
          }
          if (etype == 'agency') {
            if (data.staff.is_approved == 'False') {
              this.notifyService.showWarning(this.translate.instant('processing !!'));
              this.router.navigate(["upload", data.staff.employer_id]);
            }
            if(data.staff.is_umrah_operator == 'False'){
              this.notifyService.showSuccess(this.translate.instant('success !!'));
              this.appStore.currentUser = etype;
              this.appStore.userType = data.staff.name;
              sessionStorage.setItem('currentUser', etype);
              this.router.navigate(["branch/home"]);
            }
            else if(data.staff.is_umrah_operator == 'True'){
              this.notifyService.showSuccess(this.translate.instant('success !!'));
              this.appStore.currentUser = etype;
              this.appStore.userType = data.staff.name;
              sessionStorage.setItem('currentUser', etype);
              this.router.navigate(["superagent/createTrip"]);
            }

          }
        }
    }
}