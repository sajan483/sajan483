import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/branch/home/home.component';
import { PackageDetailsComponent } from 'src/app/components/branch/home/package-details/package-details.component';
const myPath: Routes = [
    {
        path: "home", component: HomeComponent,
    },
    {
      path: "details", component: PackageDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(myPath)],
  exports: [RouterModule]
})
export class BranchRouteModule { }