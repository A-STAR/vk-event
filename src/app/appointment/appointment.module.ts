import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';

@NgModule({
  imports: [
    SharedModule,
    AppointmentRoutingModule
  ],
  declarations: [AppointmentComponent]
})
export class AppointmentModule { }
