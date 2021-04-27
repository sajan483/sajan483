import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/branch/home/home.component';
import { PackageDetailsComponent } from 'src/app/components/branch/home/package-details/package-details.component';
import { PaxAndPaymentComponent } from 'src/app/components/branch/home/pax-and-payment/pax-and-payment.component';
import { ConfirmationComponent } from 'src/app/components/branch/home/confirmation/confirmation.component';

const myPath: Routes = [
    {
        path: "home", component: HomeComponent,
    },
    {
      path: "details/:id", component: PackageDetailsComponent,
    },
    {
      path: "payment/:id", component: PaxAndPaymentComponent,
    },
    {
      path: ":id/success", component: ConfirmationComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(myPath)],
  exports: [RouterModule]
})
export class BranchRouteModule { }