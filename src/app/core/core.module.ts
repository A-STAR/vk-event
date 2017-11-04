import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './http.service';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { PageNotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PageNotFoundComponent],
  providers: [
    HttpService,
    TokenService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [PageNotFoundComponent]
})
export class CoreModule { }
