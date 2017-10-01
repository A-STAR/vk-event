import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserItemComponent } from './user-item/user-item.component';
import { EventModalComponent } from './event-modal/event-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ToolbarComponent, UserItemComponent, EventModalComponent],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ToolbarComponent,
    UserItemComponent,
    EventModalComponent
  ]
})
export class SharedModule { }
