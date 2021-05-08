import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/branch/home/home.component';
import { PackageDetailsComponent } from 'src/app/components/branch/home/package-details/package-details.component';
import { PaxAndPaymentComponent } from 'src/app/components/branch/home/pax-and-payment/pax-and-payment.component';
import { ConfirmationComponent } from 'src/app/components/branch/home/confirmation/confirmation.component';
import { ProfileComponent } from 'src/app/components/branch/profile/profile.component';

const myPath: Routes = [
    {
        path: "packages", component: HomeComponent,
    },
    {
      path: "packages/:id/details", component: PackageDetailsComponent,
    },
    {
      path: "packages/:id/payment", component: PaxAndPaymentComponent,
    },
    {
      path: "packages/:id/success", component: ConfirmationComponent,
    },
    {
      path: "profile", component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(myPath)],
  exports: [RouterModule]
})
export class BranchRouteModule { }