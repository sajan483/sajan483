import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTripComponent } from 'src/app/components/super-agent/create-trip/create-trip.component';

const myPath: Routes = [
  {
   path: "createTrip",component: CreateTripComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(myPath)],
  exports: [RouterModule]
})
export class SuperAgentRouteModule { }