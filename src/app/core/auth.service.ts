import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/take';
import { HttpService } from './http.service';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {

  authorized = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: HttpService, private token: TokenService) { }

  authorize(params: Params): Observable<boolean> {

    console.log('AuthService#login called', params);

    this.http
      .post('/init/', params)
      // .share()
      // .take(3)
      .subscribe();

    if (this.token.token) {
      return Observable
        .of(true)
        .delay(1000)
        .do(val => this.authorized = true);
    } else {
      return Observable
        .of(false)
        .delay(1000)
        .do(val => this.authorized = false);
    }
  }

  reauthorize(): void {
    this.authorized = false;
  }

}
