import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { InfoComponent } from './info/info.component';
import { SearchComponent } from './search/search.component';
import { TimeComponent } from './time/time.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent, InfoComponent, SearchComponent, TimeComponent]
})
export class ProfileModule { }
