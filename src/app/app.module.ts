import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from "@angular/common/http";
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HedderComponent } from './common/components/hedder/hedder.component';
import { FooterComponent } from './common/components/footer/footer.component';
import {OwlDateTimeModule,OwlNativeDateTimeModule} from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule, MatInputModule, MatButtonModule,MatSliderModule} from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MyDatePickerModule } from 'mydatepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DatePipe } from '@angular/common';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatRadioModule} from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule} from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TagInputModule } from 'ngx-chips';
export function TranslatorFactory(httpClient: HttpClient) { return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json'); }
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgImageSliderModule } from 'ng-image-slider';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HedderComponent,
    FooterComponent
],
  imports: [
    TagInputModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule, 
    MatDatepickerModule,
    MatAutocompleteModule,
    MyDatePickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    DateRangePickerModule,
    NgMultiSelectDropDownModule,
    MatRadioModule,
    MatExpansionModule,
    MatCheckboxModule,
    NgxSpinnerModule,
    NgbModule,
    FilterPipeModule,
    TagInputModule,
    MatSliderModule,
    NgImageSliderModule,
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
  providers: [DatePipe,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public translateService: TranslateService){
    translateService.addLangs(["en-US","ar-AE"]);
    translateService.setDefaultLang('en'); /* Setting up the Translate Json to English - `en` */
  }
}