import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';

@NgModule({
  imports: [
    SharedModule,
    PeopleRoutingModule
  ],
  declarations: [PeopleComponent]
})
export class PeopleModule { }
