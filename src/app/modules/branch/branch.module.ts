import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchRouteModule } from './landing-routing.module';
import { HomeComponent } from 'src/app/components/branch/home/home.component';
import { PackageDetailsComponent } from 'src/app/components/branch/home/package-details/package-details.component';
import { MatButtonModule, MatIconModule, MatInputModule, MatRadioModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    PackageDetailsComponent
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
