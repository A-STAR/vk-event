import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventEditComponent } from './event-edit/event-edit.component';

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule
  ],
  declarations: [EventComponent, EventEditComponent]
})
export class EventModule { }
