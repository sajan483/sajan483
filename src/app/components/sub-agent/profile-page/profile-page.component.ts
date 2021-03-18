import { Component, OnInit } from '@angular/core';
import { staff_details } from '../../../models/staff_details';
import { Router } from '@angular/router';
import { GeneralHelper } from 'src/app/helpers/General/general-helpers';
import { SubAgentApiService } from 'src/app/Services/sub-agent-api-services';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  details: staff_details;
  upgradebttn: boolean = false;
  genHelper: GeneralHelper;
  constructor(private router: Router, private common: SubAgentApiService, private _gHelper: GeneralHelper) {
    this.genHelper = _gHelper;
  }

  ngOnInit() {
    if (this.genHelper.getAccessTocken() == "") {
      this.router.navigate(["/login"]);
    } else {
      this.common.getStaffDetails().subscribe(response => {
        this.details = response;
      });
    }
  }

}
