import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTripComponent } from 'src/app/components/super-agent/create-trip/create-trip.component';
import { StepperComponent } from 'src/app/components/super-agent/create-trip/stepper/stepper.component';
import { BranchListComponent } from 'src/app/components/super-agent/branch-list/branch-list.component';
import { DashboardComponent } from 'src/app/components/super-agent/dashboard/dashboard.component';
import { AccountDetailsComponent } from 'src/app/components/super-agent/account-details/account-details.component';
import { BranchCreationComponent } from 'src/app/components/super-agent/branch-creation/branch-creation.component';
import { BranchUpdationComponent } from 'src/app/components/super-agent/branch-updation/branch-updation.component';
import { ProfileComponent } from 'src/app/components/super-agent/profile/profile.component';
import { StaffCreationComponent } from 'src/app/components/super-agent/staff-creation/staff-creation.component';
import { StaffListComponent } from 'src/app/components/super-agent/staff-list/staff-list.component';
import { ViewPackagesComponent } from 'src/app/components/super-agent/view-packages/view-packages.component';

const myPath: Routes = [
  {
   path: "createTrip",component: CreateTripComponent
  },
  {
    path: "stepper",component: StepperComponent
  },
  {
    path: "account_details",component: AccountDetailsComponent
  },
  {
    path: "dashboard",component: DashboardComponent
  },
  {
    path: "branch_list",component: BranchListComponent
  },
  {
    path: "create_branch",component: BranchCreationComponent
  },
  {
    path: "update_branch/:id",component: BranchUpdationComponent
  },
  {
    path: "profile/:id",component: ProfileComponent
  },
  {
    path: "staff_creation",component: StaffCreationComponent
  },
  {
    path: "staff_list",component: StaffListComponent
  },
  {
    path: "view_package",component: ViewPackagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(myPath)],
  exports: [RouterModule]
})
export class SuperAgentRouteModule { }