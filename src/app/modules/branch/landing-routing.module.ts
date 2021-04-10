import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/branch/home/home.component';
const myPath: Routes = [
    {
        path: "home", component: HomeComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(myPath)],
  exports: [RouterModule]
})
export class BranchRouteModule { }