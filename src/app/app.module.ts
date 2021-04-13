import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from "@angular/common/http";
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HedderComponent } from './common/components/hedder/hedder.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
export function TranslatorFactory(httpClient: HttpClient) { return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json'); }
import { CookieService } from 'ngx-cookie-service';
import { SliderComponent } from './common/components/slider/slider.component';
import { PaginationComponent } from './common/components/pagination/pagination.component';
import { LandingApiService } from './Services/landing-api-services';
import { CommonApiService } from './Services/common-api-services';
import { BranchApiService } from 'src/app/Services/branch-api-service'
import { OnlyNumberDirective } from './models/onlynumber.directive';

@NgModule({
  declarations: [
    OnlyNumberDirective,
    AppComponent,
    HedderComponent,
    FooterComponent,
    SliderComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,maxOpened:1
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslatorFactory,
        deps: [HttpClient]
      },
      isolate: false
    }),
  ],
  providers: [DatePipe,CookieService,LandingApiService,CommonApiService,BranchApiService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(public translateService: TranslateService){
    translateService.addLangs(["en-US","ar-AE"]);
    translateService.setDefaultLang('en-US'); /* Setting up the Translate Json to English - `en` */
  }
  
}