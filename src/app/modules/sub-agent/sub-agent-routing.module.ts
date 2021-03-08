import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingHistoryComponent } from 'src/app/components/sub-agent/booking-history/booking-history.component';
import { CreateTripFrontPageComponent } from 'src/app/components/sub-agent/create-trip-front-page/create-trip-front-page.component';
import { PaymentStatusComponent } from 'src/app/components/sub-agent/payment-status/payment-status.component';
import { ProfilePageComponent } from 'src/app/components/sub-agent/profile-page/profile-page.component';
import { CreateTripComponent } from 'src/app/components/sub-agent/create-trip/create-trip.component';

const myPath: Routes = [
  {
    path: "createTrip",component: CreateTripComponent
    
  },
  {
    path: "home",
    component: CreateTripFrontPageComponent,
  },
  {
    path: "profilepage",
    component: ProfilePageComponent,
  },
  {
    path: "history",
    component: BookingHistoryComponent,
  },
  {
    path: "payment/:id/:status",
    component: PaymentStatusComponent,
  },
  {
    path: "bookings/:id/details",
    component: PaymentStatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(myPath)],
  exports: [RouterModule]
})
export class SubAgentRouteModule { }