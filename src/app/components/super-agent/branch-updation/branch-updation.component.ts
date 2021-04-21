import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchAdapter } from 'src/app/adapters/super-agent/branch-adapter';
import { NotificationService } from 'src/app/common/services/notification.service';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';

@Component({
  selector: 'app-branch-updation',
  templateUrl: './branch-updation.component.html',
  styleUrls: ['./branch-updation.component.scss']
})
export class BranchUpdationComponent implements OnInit {
  agencies: any[]=[];
  updateBranchForm: FormGroup;
  submitted = false;
  respone: any;
  branchAdapter:BranchAdapter;
  superAgentApiService:SuperAgentApiService;
  id:any;
  selectedBranch: any;

  constructor(private route:Router,private _SuperAgentService:SuperAgentApiService,private notifyService:NotificationService,
    private activeRouter:ActivatedRoute) { 
    this.branchAdapter = new BranchAdapter();
    this.superAgentApiService=this._SuperAgentService;
  }

  ngOnInit() {
    this.updateBranchForm = this.branchAdapter.createBranchForm();
    this.getAgencyList()
    this.getBranchData();
  }

  getAgencyList(){
    this.superAgentApiService.getAgency().subscribe((data)=>{
      this.agencies = data.results;
    })
  }

  getBranchData(){
    this.id = this.activeRouter.params.subscribe(data=>{
      this.id = data['id'];
      this.superAgentApiService.getSelectedBranch(this.id).subscribe((res)=>{
        this.selectedBranch = res;
        this.updateBranchForm.patchValue({
          name:this.selectedBranch.name,
          contact_person_name:this.selectedBranch.contact_person_name,
          phone_number:this.selectedBranch.phone_number,
          state:this.selectedBranch.state,
          city:this.selectedBranch.city,
          agency:this.selectedBranch.agency,
          email:this.selectedBranch.email,
          code:this.selectedBranch.code
        })
      })
    })
  }

  get f() { return this.updateBranchForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.updateBranchForm.invalid) {
     return;
    } 
    this.updateBranch();
  }

  updateBranch(){
    this.id = this.activeRouter.params.subscribe(params => {  
      this.id = params['id'];
      this.superAgentApiService.updateBranch(this.id,this.updateBranchForm.value).subscribe((res) =>{
        this.notifyService.showSuccess('SUCCESS !!');
        this.navigateBranchList();
      })
    });
  }
  
  navigateBranchList(){
    this.route.navigate(['/superagent/branch_list'])
  }

}
