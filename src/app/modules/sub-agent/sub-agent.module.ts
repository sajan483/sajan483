import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from 'src/app/components/sub-agent/booking-history/booking-history.component';
import { RecentBookingComponent } from 'src/app/components/sub-agent/create-trip-front-page/components/recent-booking/recent-booking.component';
import { RoomAllocationPopupComponent } from 'src/app/components/sub-agent/create-trip-front-page/components/room-allocation-popup/room-allocation-popup.component';
import { CreateTripFrontPageComponent } from 'src/app/components/sub-agent/create-trip-front-page/create-trip-front-page.component';
import { PaymentStatusComponent } from 'src/app/components/sub-agent/payment-status/payment-status.component';
import { ProfilePageComponent } from 'src/app/components/sub-agent/profile-page/profile-page.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatStepperModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatRadioModule, MatExpansionModule, MatCheckboxModule, MatProgressBarModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { NgbRatingModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { SubAgentRouteModule } from './sub-agent-routing.module';
import { CreateTripComponent } from 'src/app/components/sub-agent/create-trip/create-trip.component';
import { LoaderComponent } from 'src/app/components/sub-agent/create-trip/components/loader/loader.component';
import { MakkaHotelComponent } from 'src/app/components/sub-agent/create-trip/components/makka-hotel/makka-hotel.component';
import { HotelDetailsPopupComponent } from 'src/app/components/sub-agent/create-trip/components/hotel-details-popup/hotel-details-popup.component';
import { TransportComponent } from 'src/app/components/sub-agent/create-trip/components/transport/transport.component';
import { HotelImagePopupComponent } from 'src/app/components/sub-agent/create-trip/components/hotel-image-popup/hotel-image-popup.component';
import { LoaderHotelPopupComponent } from 'src/app/components/sub-agent/create-trip/components/loader-hotel-popup/loader-hotel-popup.component';
import { PaymentHotelComponent } from 'src/app/components/sub-agent/create-trip/components/payment-hotel/payment-hotel.component';
import { RoomDetailsPopupComponent } from 'src/app/components/sub-agent/create-trip/components/room-details-popup/room-details-popup.component';
import { MobxAngularModule } from 'mobx-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxGalleryModule } from 'ngx-gallery';
//import { TranslatorFactory } from 'src/app/app.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { HelperService } from 'src/app/common/services/helper-service';
import { PaymentTransportComponent } from 'src/app/components/sub-agent/create-trip/components/payment-transport/payment-transport.component';
import { SubAgentApiService } from 'src/app/Services/sub-agent-api-services';
import { OnlyNumberDirective } from 'src/app/models/onlynumber.directive';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { SubAgentStateService } from '../../Services/sub-agent-state.service';

export function TranslatorFactory(httpClient: HttpClient) { return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json'); }
import { PaginationComponent } from 'src/app/components/sub-agent/pagination/pagination.component';
import { ItineraryViewComponent } from 'src/app/components/sub-agent/itinerary-view/itinerary-view.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SubAgentInterceptor } from 'src/app/core/sub-agent/sub-agent.interceptor'
import { CancelationPopupComponent } from 'src/app/components/sub-agent/cancelation-popup/cancelation-popup.component';
import { IBANAccountDetailsComponent } from 'src/app/components/sub-agent/iban-account-details/iban-account-details.component';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TermsAndConditionComponent } from 'src/app/components/sub-agent/terms-and-condition/terms-and-condition.component';
import { IbanCreaterComponent } from 'src/app/components/sub-agent/iban-creater/iban-creater.component';
@NgModule({
  declarations: [
    BookingHistoryComponent,
    CreateTripFrontPageComponent,
    CreateTripComponent,
    PaymentStatusComponent,
    ProfilePageComponent,
    RoomAllocationPopupComponent,
    RecentBookingComponent,
    LoaderComponent,
    MakkaHotelComponent,
    HotelDetailsPopupComponent,
    TransportComponent,
    PaymentHotelComponent,
    RoomDetailsPopupComponent,
    LoaderHotelPopupComponent,
    HotelImagePopupComponent,
    PaymentTransportComponent,
    OnlyNumberDirective,
    PaginationComponent,
    ItineraryViewComponent,
    CancelationPopupComponent,
    IBANAccountDetailsComponent,
    TermsAndConditionComponent,
    IbanCreaterComponent
  ],

  imports: [
    CommonModule,
    SubAgentRouteModule,
    NgxGalleryModule,
    HttpClientModule,
    NgxSpinnerModule,
    HttpModule,
    MobxAngularModule,
    MatStepperModule,
    MatFormFieldModule,
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressBarModule,
    FilterPipeModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    NgbRatingModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSliderModule,
    MatNativeDateModule,
    CarouselModule,
    Ng2TelInputModule,
    DateRangePickerModule,
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
  providers: [SubAgentApiService, HelperService,SubAgentStateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SubAgentInterceptor,
      multi: true,
    }]

})

export class SubAgentModule {
  constructor(public translateService: TranslateService) {
    translateService.addLangs(["en-US", "ar-AE"]);
    translateService.setDefaultLang('en-US'); /* Setting up the Translate Json to English - `en` */
  }
}