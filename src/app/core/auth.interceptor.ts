import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { retryWhen, mergeMap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenService, private injector: Injector) { }

  private request(request) {
    if (this.token.token) {
      // return request
      //   .clone({ headers: request.headers.set('Authorization', `Bearer ${this.token.token}`) });

      return request
        .clone({ setHeaders: { Authorization: `Bearer ${this.token.token}` } });
    }

    // console.log('AuthInterceptor#intercept request', request);

    return request;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (this.token.token) {
    //   // request = request
    //   //   .clone({ headers: request.headers.set('Authorization', `Bearer ${this.token.token}`) });

    //   request = request
    //     .clone({ setHeaders: { Authorization: `Bearer ${this.token.token}` } });
    // }

    // // console.log('AuthInterceptor#intercept request', request);

    const auth = this.injector.get(AuthService);

    return next
      // .handle(request)
      .handle(this.request(request))
      .pipe(retryWhen(errors => errors.pipe(mergeMap(error => error === 401 ? auth.authorization$ : Observable.throw(error)))));
  }

}
