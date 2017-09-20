import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
      },
      {
        path: 'events',
        loadChildren: 'app/events/events.module#EventsModule'
      },
      {
        path: 'people',
        loadChildren: 'app/people/people.module#PeopleModule'
      },
      {
        path: 'profile',
        loadChildren: 'app/profile/profile.module#ProfileModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
