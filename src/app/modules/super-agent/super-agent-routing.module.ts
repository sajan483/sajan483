import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTripComponent } from 'src/app/components/super-agent/create-trip/create-trip.component';
import { StepperComponent } from 'src/app/components/super-agent/create-trip/stepper/stepper.component';
import { BranchListComponent } from 'src/app/components/super-agent/branch-list/branch-list.component';

const myPath: Routes = [
  {
   path: "createTrip",component: CreateTripComponent
  },
  {
    path: "stepper",component: StepperComponent
  },
  {
    path: "branch_list",component: BranchListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(myPath)],
  exports: [RouterModule]
})
export class SuperAgentRouteModule { }