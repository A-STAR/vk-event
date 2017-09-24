import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event.component';
import { EventEditComponent } from './event-edit/event-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
    children: [
      {
        path: ':id',
        component: EventEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
