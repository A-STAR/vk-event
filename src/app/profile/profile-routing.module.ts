import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { InfoComponent } from './info/info.component';
import { SearchComponent } from './search/search.component';
import { TimeComponent } from './time/time.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: InfoComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'time',
        component: TimeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
