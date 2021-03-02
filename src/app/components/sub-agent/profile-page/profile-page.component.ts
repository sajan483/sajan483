import { Component, OnInit } from '@angular/core';
import{staff_details} from './staff_details';
import {Router} from '@angular/router';
import { CommonApiService } from 'src/app/common/services/common-api-services';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  providers:[CommonApiService]
})
export class ProfilePageComponent implements OnInit {
  details:staff_details;
  upgradebttn: boolean = false;

  constructor(private router:Router,private common:CommonApiService) { }

  ngOnInit() {
    if (localStorage.getItem('accesstoken') == null) {
      this.router.navigate(["/login"]);
    }else{
      this.common.getStaffDetails().subscribe(response => {
        console.log(response);
        this.details = response;
        
      });
    }
  }

}
