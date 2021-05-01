import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../../common/services/notification.service';
import { AppStore } from 'src/app/stores/app.store';
import { Router } from '@angular/router';

export class loginHelper{
    constructor(private cookie: CookieService,
        private notifyService: NotificationService,
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
          if(data.staff.is_approved == 'False'){
            this.notifyService.showWarning('Processing !!');
            this.router.navigate(["upload/"+data.staff.agency_id])
          }else{
            if(data.staff.employer_type == 'SUPER'){
              this.notifyService.showSuccess('success !!');
              sessionStorage.setItem('agency_Id', data.staff.agency_id);
              this.router.navigate(["superagent/dashboard"]);
            }else if(data.staff.employer_type == 'SUB'){
              this.notifyService.showSuccess('success !!');
              this.router.navigate(['subagent/home/']);
            }else if(data.staff.employer_type == 'BRANCH'){
              this.notifyService.showSuccess('success !!');
              this.router.navigate(["branch/packages"]);
            }
          }
        }
    }
}