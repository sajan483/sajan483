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
          if(data.staff.is_super_agent){
            this.notifyService.showSuccess(this.translate.instant('success !!'));
            etype = 'superagent';
            this.appStore.userType = data.staff.name;
            sessionStorage.setItem('currentUser', etype);
            this.router.navigate(["superagent/dashboard"]);
          }else{
            if(data.staff.employer_type == 'branch'){
              if(data.staff.is_umrah_operator == 'True'){
                this.notifyService.showSuccess(this.translate.instant('success !!'));
                etype = 'branch';
                this.appStore.userType = data.staff.name;
                sessionStorage.setItem('currentUser', etype);
                this.router.navigate(["subagent/home"]);
              }
            }
            if(data.staff.employer_type == 'agency'){
              if (data.staff.is_approved == 'False') {
                this.notifyService.showWarning(this.translate.instant('processing !!'));
                this.router.navigate(["upload", data.staff.employer_id]);
              } else if(data.staff.is_umrah_operator == 'False'){
                this.notifyService.showSuccess(this.translate.instant('success !!'));
                etype = 'branch';
                this.appStore.userType = data.staff.name;
                sessionStorage.setItem('currentUser', etype);
                this.router.navigate(["branch/home"]);
              } else{
                this.notifyService.showSuccess(this.translate.instant('success !!'));
                etype = 'subagent';
                this.appStore.userType = data.staff.employer_name;
                sessionStorage.setItem('currentUser', etype);
                this.router.navigate(['subagent/home/']);
              }
            }
            
          }
          
        }
    }
}