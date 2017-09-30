import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ToolbarComponent, UserItemComponent],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ToolbarComponent,
    UserItemComponent
  ]
})
export class SharedModule { }
