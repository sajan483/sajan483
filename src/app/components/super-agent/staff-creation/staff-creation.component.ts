import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchAdapter } from 'src/app/adapters/super-agent/branch-adapter';
import { NotificationService } from 'src/app/common/services/notification.service';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { AppStore } from 'src/app/stores/app.store';

@Component({
  selector: 'app-staff-creation',
  templateUrl: './staff-creation.component.html',
  styleUrls: ['./staff-creation.component.scss']
})
export class StaffCreationComponent implements OnInit {
  options = false;
  AgentStaffRegisterForm: FormGroup;
  submitted = false;
  branchlists: any[] = [];
  branchAdapter:BranchAdapter;
  superAgentApiService:SuperAgentApiService;
  emp_id: any;
  agency:string = 'agency';
  branch:string = 'branch';

  constructor(private route:Router,private _SuperAgentService:SuperAgentApiService,private notifyService:NotificationService,
    private appStore:AppStore) { 
    this.branchAdapter = new BranchAdapter();
    this.superAgentApiService=this._SuperAgentService;
  }

  ngOnInit() {
    this.emp_id = sessionStorage.getItem("employer_id");
    this.AgentStaffRegisterForm = this.branchAdapter.agentStaffCreationForm();
    this.getBranchList();
  }

  /**
   * This method for getting all branch lists
   */
  getBranchList(){
    this.superAgentApiService.getBranchlist(this.appStore.langCode).subscribe((data)=>{
      this.branchlists = data;
    })
  }

  get f() { return this.AgentStaffRegisterForm.controls; }

  /**
   * This method for submitting staff details
   */
  onSubmit() {
    console.log(this.AgentStaffRegisterForm.value)
    this.submitted = true;
    if (this.AgentStaffRegisterForm.invalid) {
      return;
    }
    this.staffCreation();
  }

  staffCreation(){
    this.superAgentApiService.staffRegister(this.AgentStaffRegisterForm.value).subscribe(data=>{
      this.notifyService.showSuccess("Success !!");
      this.navigateStaffList();
    },error=>{
      this.notifyService.showError("staff with this phone number already exists.")
    })
  }

  navigateStaffList(){
    this.route.navigate(['/superagent/staff_list']);
  }

}
