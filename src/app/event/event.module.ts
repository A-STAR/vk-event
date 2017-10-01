import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';

@NgModule({
  imports: [
    SharedModule,
    EventRoutingModule
  ],
  declarations: [EventComponent]
})
export class EventModule { }
