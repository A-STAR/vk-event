import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PageNotFoundComponent],
  providers: [AuthGuard, AuthService],
  exports: [PageNotFoundComponent]
})
export class CoreModule { }
