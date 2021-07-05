import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingHistoryComponent } from 'src/app/components/sub-agent/booking-history/booking-history.component';
import { CreateTripFrontPageComponent } from 'src/app/components/sub-agent/create-trip-front-page/create-trip-front-page.component';
import { PaymentStatusComponent } from 'src/app/components/sub-agent/payment-status/payment-status.component';
import { ProfilePageComponent } from 'src/app/components/sub-agent/profile-page/profile-page.component';
import { CreateTripComponent } from 'src/app/components/sub-agent/create-trip/create-trip.component';
import { ItineraryViewComponent } from 'src/app/components/sub-agent/itinerary-view/itinerary-view.component';
import { IBANAccountDetailsComponent } from 'src/app/components/sub-agent/iban-account-details/iban-account-details.component';

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
    path: "IBAN/details",
    component: IBANAccountDetailsComponent,
  },
  {
    path: "payment/:id/:status",
    component: PaymentStatusComponent,
  },
  {
    path: "bookings/:id/details",
    component: PaymentStatusComponent,
  },
  {
    path: "bookings/:id/itinerary",
    component: ItineraryViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(myPath)],
  exports: [RouterModule]
})
export class SubAgentRouteModule { }