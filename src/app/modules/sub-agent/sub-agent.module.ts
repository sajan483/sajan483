import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BookingHistoryComponent } from 'src/app/components/sub-agent/booking-history/booking-history.component';
import { RecentBookingComponent } from 'src/app/components/sub-agent/create-trip-front-page/components/recent-booking/recent-booking.component';
import { RoomAllocationPopupComponent } from 'src/app/components/sub-agent/create-trip-front-page/components/room-allocation-popup/room-allocation-popup.component';
import { CreateTripFrontPageComponent } from 'src/app/components/sub-agent/create-trip-front-page/create-trip-front-page.component';
import { PaymentStatusComponent } from 'src/app/components/sub-agent/payment-status/payment-status.component';
import { ProfilePageComponent } from 'src/app/components/sub-agent/profile-page/profile-page.component';
import { OnlyNumberDirective } from 'src/app/models/onlynumber.directive';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatStepperModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatRadioModule, MatExpansionModule, MatCheckboxModule, MatProgressBarModule } from '@angular/material';
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
import { TranslatorFactory } from 'src/app/app.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { GeneralHelper } from 'src/app/helpers/General/general-helpers';
import { CommonApiService } from 'src/app/common/services/common-api-services';
import { HelperService } from 'src/app/common/services/helper-service';



@NgModule({
  declarations: [
    OnlyNumberDirective,
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
    HotelImagePopupComponent
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
    MatNativeDateModule,
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
    DatePipe, GeneralHelper,CommonApiService,HelperService
  ],
})

export class SubAgentModule {
  constructor(public translateService: TranslateService) {
    translateService.setDefaultLang('en-US'); /* Setting up the Translate Json to English - `en` */
  }
}