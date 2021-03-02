import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/components/login/login.component';
import { BookingHistoryComponent } from './components/sub-agent/booking-history/booking-history.component';  
import { PaymentStatusComponent } from './components/sub-agent/payment-status/payment-status.component';  
import { ProfilePageComponent } from './components/sub-agent/profile-page/profile-page.component'; 
import { SignupComponent } from './common/components/signup/signup.component';
import { UploadDocsComponent } from './components/super-agent/upload-docs/upload-docs.component';
import { CreateTripFrontPageComponent } from './components/sub-agent/create-trip-front-page/create-trip-front-page.component';


const myPath: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: "login", component: LoginComponent,
    },
    {
      path: "signup", component: SignupComponent,
    },
    {
      path: "upload/:id", component: UploadDocsComponent,
    },
    {
      path: "createTrip", 
      loadChildren: () => import('./components/sub-agent/create-trip/create-trip.module')
      .then(m => m.CreateTripModule),
    },
    {
      path: "firstpage", component: CreateTripFrontPageComponent,
    },
    {
      path: "profilepage", component: ProfilePageComponent,
    },
    {
      path: "history", component: BookingHistoryComponent,
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
  imports: [RouterModule.forRoot(myPath)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
