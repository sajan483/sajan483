import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/landing/login/login.component';
import { SignupComponent } from 'src/app/components/landing/signup/signup.component';
import { UploadDocsComponent } from 'src/app/components/landing/upload-docs/upload-docs.component';
import { CommonModule } from '@angular/common';

const myPath: Routes = [
    {
        path: "login", component: LoginComponent,
    },
    {
      path: "signup", component: SignupComponent,
    },
    {
      path: "upload/:id", component: UploadDocsComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(myPath)],
  exports: [RouterModule,
  CommonModule]
})
export class LandingRouteModule { }