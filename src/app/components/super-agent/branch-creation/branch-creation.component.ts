import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchAdapter } from 'src/app/adapters/super-agent/branch-adapter';
import { NotificationService } from 'src/app/common/services/notification.service';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';

@Component({
  selector: 'app-branch-creation',
  templateUrl: './branch-creation.component.html',
  styleUrls: ['./branch-creation.component.scss']
})
export class BranchCreationComponent implements OnInit {
  agencies: any[]=[];
  createBranch: FormGroup;
  submitted = false;
  respone: any;
  branchAdapter:BranchAdapter;
  superAgentApiService:SuperAgentApiService;
  bttnactive:boolean =false;

  constructor(private route:Router,private _SuperAgentService:SuperAgentApiService,private notifyService:NotificationService) {
    this.branchAdapter = new BranchAdapter();
    this.superAgentApiService=this._SuperAgentService;
   }

  ngOnInit() {
    this.createBranch = this.branchAdapter.createBranchForm();
    this.getAgencyList()
  }

  getAgencyList(){
    this.superAgentApiService.getAgency().subscribe((data)=>{
      this.agencies = data.results;
    })
  }

  get f() {
    return this.createBranch.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.createBranch.invalid){
      return;
    }
    this.bttnactive = true;
    this.branchCreation();
  }

  branchCreation(){
    this.superAgentApiService.branchCreation(this.createBranch.value).subscribe((data)=>{
      this.notifyService.showSuccess('SUCCESS !!');
      this.navigateBranchList();
      this.bttnactive=false;
    })
  }

  navigateBranchList(){
    this.route.navigate(['/superagent/branch_list'])
  }

}
