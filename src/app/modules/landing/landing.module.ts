
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { MatStepperModule, MatInputModule, MatButtonModule, MatSliderModule, MatCheckboxModule } from '@angular/material';
import { NgxSpinnerModule } from "ngx-spinner";
import { LandingRouteModule } from './landing-routing.module'
import { LoginComponent } from 'src/app/components/landing/login/login.component';
import { SignupComponent } from 'src/app/components/landing/signup/signup.component';
import { UploadDocsComponent } from 'src/app/components/landing/upload-docs/upload-docs.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
//import { TranslatorFactory } from 'src/app/app.module';
import { GeneralHelper } from '../../helpers/General/general-helpers';
import { HelperService} from 'src/app/common/services/helper-service';
import { CommonApiService } from 'src/app/Services/common-api-services';
import { CookieService } from 'ngx-cookie-service';
import { LandingApiService } from 'src/app/Services/landing-api-services';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function TranslatorFactory(httpClient: HttpClient) { return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json'); }


@NgModule({
  declarations: [
    LoginComponent, SignupComponent, UploadDocsComponent
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
  exports: [
    TranslateModule,
  ],
  providers: [GeneralHelper,HelperService,CommonApiService,CookieService,LandingApiService]
})

export class LandingModule {
  constructor(public translateService: TranslateService) {
    translateService.addLangs(["en-US", "ar-AE"]);
    translateService.setDefaultLang('en-US'); /* Setting up the Translate Json to English - `en` */
  }
}