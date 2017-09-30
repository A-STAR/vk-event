import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ToolbarComponent],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ToolbarComponent
  ]
})
export class SharedModule { }
