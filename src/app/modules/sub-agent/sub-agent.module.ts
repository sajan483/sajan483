import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PaginationComponent } from 'src/app/common/components/pagination/pagination.component';
import { SliderComponent } from 'src/app/common/components/slider/slider.component';
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
import { MatStepperModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatAutocompleteModule, MatNativeDateModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatRadioModule, MatExpansionModule, MatCheckboxModule, MatSliderModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { MyDatePickerModule } from 'mydatepicker';
import { NgImageSliderModule } from 'ng-image-slider';
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
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxGalleryModule } from 'ngx-gallery';
import { TranslatorFactory } from 'src/app/app.module';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    PaginationComponent,
    SliderComponent,
    OnlyNumberDirective,
    BookingHistoryComponent,
    CreateTripFrontPageComponent,
    CreateTripComponent,
    PaymentStatusComponent,
    ProfilePageComponent,
    RoomAllocationPopupComponent,
    RecentBookingComponent,
    LoaderComponent,
    MakkaHotelComponent ,
    HotelDetailsPopupComponent,
    TransportComponent,
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
    CommonModule,
    SubAgentRouteModule,
    NgxGalleryModule,
    HttpClientModule,
    NgxSpinnerModule,
    HttpModule,
    FilterPipeModule,
    MyDatePickerModule,
    InfiniteScrollModule,
    NgImageSliderModule,
    MatExpansionModule,
    DateRangePickerModule,
    MatStepperModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
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

export class SubAgentModule {
  constructor(public translateService: TranslateService){
    translateService.setDefaultLang('en-US'); /* Setting up the Translate Json to English - `en` */
  }
}