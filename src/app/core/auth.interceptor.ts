import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.token.token) {
      // const request = request
      //   .clone({ headers: request.headers.set('Authorization', `Bearer ${this.token.token}`) });

      request = request
        .clone({ setHeaders: { Authorization: `Bearer ${this.token.token}` } });
    }

    return next
      .handle(request);
  }

}