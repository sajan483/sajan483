import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchRouteModule } from './landing-routing.module';
import { HomeComponent } from 'src/app/components/branch/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BranchRouteModule
  ]
})
export class BranchModule { }
