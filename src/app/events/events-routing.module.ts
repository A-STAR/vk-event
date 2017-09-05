import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { AcceptedComponent } from './accepted/accepted.component';
import { IncomingComponent } from './incoming/incoming.component';
import { OutgoingComponent } from './outgoing/outgoing.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      {
        path: '',
        component: AcceptedComponent
      },
      {
        path: 'incoming',
        component: IncomingComponent
      },
      {
        path: 'outgoing',
        component: OutgoingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
