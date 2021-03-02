import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from "@angular/common/http";
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map'
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MyDatePickerModule } from 'mydatepicker';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxSpinnerModule } from "ngx-spinner";  
import { DatePipe } from '@angular/common';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatExpansionModule} from '@angular/material/expansion'; 
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MobxAngularModule } from 'mobx-angular';
import { MatStepperModule, MatInputModule, MatButtonModule, MatSliderModule, MatMenuModule, MatProgressBar} from '@angular/material';
import { CreateTripRoutingModule } from './create-trip-routing.module'
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material';
import { MatTabsModule} from '@angular/material/tabs';
import { MatRadioModule} from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateTripComponent } from './create-trip.component';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
/* Initializing and Exporting the Translate Loader as Factory */
export function TranslatorFactory(httpClient: HttpClient) { return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json'); }
import { MakkaHotelComponent } from './components/makka-hotel/makka-hotel.component';
import { HotelDetailsPopupComponent } from './components/hotel-details-popup/hotel-details-popup.component';
import { TransportComponent } from './components/transport/transport.component';
import { PaymentHotelComponent } from './components/payment-hotel/payment-hotel.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RoomDetailsPopupComponent } from './components/room-details-popup/room-details-popup.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LoaderHotelPopupComponent } from './components/loader-hotel-popup/loader-hotel-popup.component';
import { HotelImagePopupComponent } from './components/hotel-image-popup/hotel-image-popup.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    CreateTripComponent, 
    MakkaHotelComponent ,
    HotelDetailsPopupComponent,
    TransportComponent,
    PaymentHotelComponent,
    LoaderComponent,
    RoomDetailsPopupComponent,
    LoaderHotelPopupComponent,
    HotelImagePopupComponent
    ],

  imports: [
    FilterPipeModule,
    HttpClientModule,
    HttpModule,
    MyDatePickerModule,
    InfiniteScrollModule,
    NgImageSliderModule,
    MatExpansionModule,
    NgxSpinnerModule,
    DateRangePickerModule,
    MatStepperModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    CreateTripRoutingModule,
    MobxAngularModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    CommonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressBarModule,
    CarouselModule,
    NgMultiSelectDropDownModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslatorFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  exports: [
    TranslateModule,
  ],
  providers: [
    DatePipe,
  ],
})
export class CreateTripModule {
  // constructor(public translateService: TranslateService){
  //   translateService.setDefaultLang('en'); /* Setting up the Translate Json to English - `en` */
  // }
}