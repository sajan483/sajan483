import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const myPath: Routes = [
  {
   // path: "createTrip",component: CreateTripComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(myPath)],
  exports: [RouterModule]
})
export class SuperAgentRouteModule { }