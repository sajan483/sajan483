import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchRouteModule } from './landing-routing.module';
import { HomeComponent } from 'src/app/components/branch/home/home.component';
import { MatStepperModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatRadioModule, MatExpansionModule, MatCheckboxModule, MatProgressBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BranchRouteModule,
    MatRadioModule,
    FormsModule
  ]
})
export class BranchModule { }
