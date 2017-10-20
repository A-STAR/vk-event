import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/share';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {

  // private trigger: BehaviorSubject<any>;

  authorized = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  params: Object;

  constructor(private http: HttpClient, private token: TokenService) {
    // this.trigger = new BehaviorSubject(null);
  }

  authorize(params?: Params): Observable<Object> {

    this.params = params || this.params;

    console.log('AuthService#authorize called', this.params);

    // this.trigger
    //   .switchMap(() => this.http.post(`${environment.api}/init/`, params))
    return this.http
      .post(`${environment.api}/init/`, this.params)
      .do(response => {
        console.log('AuthService#authorize response', response);
        this.token.token = response['token'];
      })
      .share();

    // const test = true;

    // if (test) {
    //   return Observable
    //     .of(true)
    //     .delay(1000)
    //     .do(val => this.authorized = true);
    // } else {
    //   return Observable
    //     .of(false)
    //     .delay(1000)
    //     .do(val => this.authorized = false);
    // }
  }

  // update() {
  //   return this.http
  //     .post(`${environment.api}/init/`, this.params)
  //     .do(response => this.token.token(response['token']))
  //     .share();
  // }

  // update() {
  //   this.trigger.next(null);

  //   return this.authorize();
  // }

  // reauthorize(): void {
  //   this.authorized = false;
  // }

}
