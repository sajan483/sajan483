import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  superAgentApi:SuperAgentApiService;
  id:any;
  profile: any;

  constructor(private activeRoute:ActivatedRoute,private _siperAgentApi:SuperAgentApiService) { 
    this.superAgentApi = this._siperAgentApi;
  }

  ngOnInit() {
    this.getAgencyDetails();
  }

  getAgencyDetails(){
    this.id = this.activeRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.superAgentApi.getAgencyApprovedDetails(this.id).subscribe(res =>{
        this.profile = res;
      })
    })
  }
}
