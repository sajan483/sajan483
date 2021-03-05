
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { MatStepperModule, MatInputModule, MatButtonModule,MatSliderModule, MatCheckboxModule} from '@angular/material';
import { NgxSpinnerModule } from "ngx-spinner";
import { LandingRouteModule}from './landing-routing.module'
import { LoginComponent } from 'src/app/components/landing/login/login.component';
import { SignupComponent } from 'src/app/components/landing/signup/signup.component';
import { UploadDocsComponent } from 'src/app/components/landing/upload-docs/upload-docs.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslatorFactory } from 'src/app/app.module';
import {generalHelper} from '../../helpers/General/general-helpers'

@NgModule({
  declarations: [
    LoginComponent,SignupComponent,UploadDocsComponent
  ],
  imports: [
    CommonModule,
    LandingRouteModule,
    HttpClientModule,
    HttpModule,
    NgxSpinnerModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatCheckboxModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslatorFactory,
        deps: [HttpClient]
      },
      isolate: true
    }), 
  ],
  providers: [generalHelper]
})

export class LandingModule { 
  constructor(public translateService: TranslateService){
    translateService.setDefaultLang('en-US'); /* Setting up the Translate Json to English - `en` */
  }
}