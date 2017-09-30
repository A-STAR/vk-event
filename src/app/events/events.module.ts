import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { AcceptedComponent } from './accepted/accepted.component';
import { IncomingComponent } from './incoming/incoming.component';
import { OutgoingComponent } from './outgoing/outgoing.component';
import { IncomingModalComponent } from './shared/incoming-modal/incoming-modal.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  declarations: [EventsComponent, AcceptedComponent, IncomingComponent, OutgoingComponent, IncomingModalComponent]
})
export class EventsModule { }
