import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventModalComponent } from './shared/event-modal/event-modal.component';

@NgModule({
  imports: [
    SharedModule,
    EventRoutingModule
  ],
  declarations: [EventComponent, EventModalComponent]
})
export class EventModule { }
