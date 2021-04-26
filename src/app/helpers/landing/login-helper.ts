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
        sessionStorage.setItem('userTypeName',data.staff.name);
        sessionStorage.setItem('currentUser', etype);
        sessionStorage.setItem('accesstoken', access);
        if (rememberme) {
          sessionStorage.setItem('isTouched', 'true');
        }
        if (!rememberme) {
          sessionStorage.setItem('isTouched', null);
          this.cookie.set("userName", null);
          this.cookie.set("password", null);
        }
        if (sessionStorage.getItem('accesstoken') != null) {
          if(data.staff.employer_type == 'SUPER'){
            console.log(data.staff.agency_id);
            sessionStorage.setItem('agency_Id', data.staff.agency_id);
            this.notifyService.showSuccess(this.translate.instant('success !!'));
            this.router.navigate(["superagent/dashboard"]);
          }else if(data.staff.employer_type == 'SUB'){
            this.notifyService.showSuccess(this.translate.instant('success !!'));
            this.router.navigate(['subagent/home/']);
          }else if(data.staff.employer_type == 'BRANCH'){
            this.notifyService.showSuccess(this.translate.instant('success !!'));
            this.router.navigate(["branch/home"]);
          }
          
        }
    }
}