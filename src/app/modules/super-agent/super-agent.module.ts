import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAgentRouteModule } from './super-agent-routing.module';
import { CreateTripComponent } from 'src/app/components/super-agent/create-trip/create-trip.component';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatProgressBarModule, MatStepperModule } from '@angular/material';
import { FlightComponent } from 'src/app/components/super-agent/create-trip/components/flight/flight.component';
import { HotelComponent } from 'src/app/components/super-agent/create-trip/components/hotel/hotel.component';
import { OtherInfoComponent } from 'src/app/components/super-agent/create-trip/components/other-info/other-info.component';
import { OtherServiceComponent } from 'src/app/components/super-agent/create-trip/components/other-service/other-service.component';
import { PaymentComponent } from 'src/app/components/super-agent/create-trip/components/payment/payment.component';
import { PreviewComponent } from 'src/app/components/super-agent/create-trip/components/preview/preview.component';
import { TransportComponent } from 'src/app/components/super-agent/create-trip/components/transport/transport.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightCardComponent } from 'src/app/components/super-agent/create-trip/components/flight/flight-card/flight-card.component';
import { FlightFooterComponent } from 'src/app/components/super-agent/create-trip/components/flight/flight-footer/flight-footer.component';

@NgModule({
  declarations: [
    CreateTripComponent,
    FlightComponent,
    HotelComponent,
    OtherInfoComponent,
    OtherServiceComponent,
    PaymentComponent,
    PreviewComponent,
    TransportComponent,
    FlightCardComponent,
    FlightFooterComponent
  ],
  imports: [
    CommonModule,
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
    MatInputModule
  ]
})

export class SuperAgentModule { }