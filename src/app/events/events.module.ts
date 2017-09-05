import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { IncomingComponent } from './incoming/incoming.component';
import { OutgoingComponent } from './outgoing/outgoing.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  declarations: [EventsComponent, IncomingComponent, OutgoingComponent]
})
export class EventsModule { }
