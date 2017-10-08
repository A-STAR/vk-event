import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the token from the service.
    const token = this.token.getToken() || 'FFFF70it7tzNsHddEiq0BZ0i-OU8S3xV';

    console.log('AuthInterceptor#intercept token', token);

    // Get the auth header from the service.
    // const authHeader = this.auth.getAuthorizationHeader();
    const header = `Bearer ${token}`;

    // Clone the request to add the new header.
    const request = req
      .clone({ headers: req.headers.set('Authorization', header) });

    // Pass on the cloned request instead of the original request.
    return next
      .handle(request);
  }

}
