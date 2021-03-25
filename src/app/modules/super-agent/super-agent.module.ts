import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SuperAgentRouteModule } from './super-agent-routing.module';
import { CreateTripComponent } from 'src/app/components/super-agent/create-trip/create-trip.component';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatProgressBarModule, MatStepperModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightComponent } from 'src/app/components/super-agent/create-trip/stepper/flight/flight.component';
import { OtherInfoComponent } from 'src/app/components/super-agent/create-trip/stepper/other-info/other-info.component';
import { OtherServiceComponent } from 'src/app/components/super-agent/create-trip/stepper/other-service/other-service.component';
import { PaymentComponent } from 'src/app/components/super-agent/create-trip/stepper/payment/payment.component';
import { PreviewComponent } from 'src/app/components/super-agent/create-trip/stepper/preview/preview.component';
import { TransportComponent } from 'src/app/components/super-agent/create-trip/stepper/transport/transport.component';
import { FlightCardComponent } from 'src/app/components/super-agent/create-trip/stepper/flight/flight-card/flight-card.component';
import { FlightFooterComponent } from 'src/app/components/super-agent/create-trip/stepper/flight/flight-footer/flight-footer.component';
import { StepperComponent } from 'src/app/components/super-agent/create-trip/stepper/stepper.component';
import { GeneralHelper } from 'src/app/helpers/General/general-helpers';
import { CommonApiService } from 'src/app/Services/common-api-services';
import { HelperService } from 'src/app/common/services/helper-service';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { HotelComponent } from 'src/app/components/super-agent/create-trip/stepper/hotel/hotel.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {MatRadioModule} from '@angular/material/radio'; 
import { HotelDetailsPopupComponent } from 'src/app/components/super-agent/create-trip/stepper/hotel/hotel-details/hotel-details-popup/hotel-details-popup.component';
import { TagInputModule } from 'ngx-chips';
import { FlightDetailsComponent } from 'src/app/components/super-agent/create-trip/stepper/flight/flight-details/flight-details.component';
import { HotelDetailsImageComponent } from 'src/app/components/super-agent/create-trip/stepper/hotel/hotel-details-image/hotel-details-image.component';

@NgModule({
  declarations: [
    CreateTripComponent,
    FlightComponent,
    OtherInfoComponent,
    OtherServiceComponent,
    PaymentComponent,
    PreviewComponent,
    TransportComponent,
    FlightCardComponent,
    FlightFooterComponent,
    StepperComponent,
    HotelComponent,
    HotelDetailsPopupComponent,
    FlightDetailsComponent,
    HotelDetailsImageComponent
  ],
  imports: [
    CommonModule,
    TagInputModule,
    SuperAgentRouteModule,
    MatStepperModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatRadioModule,
    MatTabsModule
  ],
  providers: [
    DatePipe, GeneralHelper,CommonApiService,HelperService,SuperAgentApiService
  ],
})

export class SuperAgentModule { }