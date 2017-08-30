import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    TabsRoutingModule
  ],
  declarations: [TabsComponent, InfoComponent]
})
export class TabsModule { }
