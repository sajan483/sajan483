import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTripComponent } from 'src/app/components/super-agent/create-trip/create-trip.component';
import { HotelDetailsImageComponent } from 'src/app/components/super-agent/create-trip/stepper/hotel/hotel-details-image/hotel-details-image.component';
import { StepperComponent } from 'src/app/components/super-agent/create-trip/stepper/stepper.component';

const myPath: Routes = [
  {
   path: "createTrip",component: CreateTripComponent
  },
  {
    path: "stepper",component: StepperComponent
   },
   {
    path: "image",component: HotelDetailsImageComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(myPath)],
  exports: [RouterModule]
})
export class SuperAgentRouteModule { }