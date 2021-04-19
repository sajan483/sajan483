import { Component, OnInit } from '@angular/core';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { AppStore } from 'src/app/stores/app.store';
import { Router } from "@angular/router";

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
  superAgentApiService:SuperAgentApiService;
  branch:any;
  shimmer:boolean=true;

  constructor(private _SuperAgentService:SuperAgentApiService,private appStore:AppStore,public router: Router) {
    this.superAgentApiService=this._SuperAgentService;
   }

  ngOnInit() {
    this.branchList();
  }

  /**
   * API calling for Branch list
   */
  branchList(){
    this.superAgentApiService.getBranchlist(this.appStore.langCode).subscribe((data)=>{
      this.branch=data;
      this.shimmer=false;
    })
  }

  navigateAddBranch(){
    this.router.navigate(['/superagent/create_branch'])
  }

}
