import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchRouteModule } from './branch-routing.module';
import { HomeComponent } from 'src/app/components/branch/home/home.component';
import { PackageDetailsComponent } from 'src/app/components/branch/home/package-details/package-details.component';
import { MatButtonModule, MatIconModule, MatInputModule, MatRadioModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaxAndPaymentComponent } from 'src/app/components/branch/home/pax-and-payment/pax-and-payment.component';
import { ConfirmationComponent } from 'src/app/components/branch/home/confirmation/confirmation.component';


@NgModule({
  declarations: [
    HomeComponent,
    PackageDetailsComponent,
    PaxAndPaymentComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    BranchRouteModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class BranchModule { }
