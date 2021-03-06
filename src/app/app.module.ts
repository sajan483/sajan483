import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HedderComponent } from './common/components/hedder/hedder.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
export function TranslatorFactory(httpClient: HttpClient) { return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json'); }
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';
import { SliderComponent } from './common/components/slider/slider.component';
import { LandingApiService } from './Services/landing-api-services';
import { CommonApiService } from './Services/common-api-services';
import { BranchApiService } from 'src/app/Services/branch-api-service';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

@NgModule({
  declarations: [
    AppComponent,
    HedderComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    BackButtonDisableModule.forRoot(),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true, maxOpened: 1
    }),
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslatorFactory,
        deps: [HttpClient]
      },
      isolate: false
    }),
  ],
  providers: [DatePipe, CookieService, LandingApiService, CommonApiService, BranchApiService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(public translateService: TranslateService) {
    translateService.addLangs(["en-US", "ar-AE"]);
    translateService.setDefaultLang('en-US'); /* Setting up the Translate Json to English - `en` */
  }

}