import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
// import { switchMap, tap, share } from 'rxjs/operators';
import { tap, share } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {

  // private trigger: BehaviorSubject<any>;

  // authorized = false;

  // store the URL so we can redirect after logging in
  // redirectUrl: string;

  authorization$: Observable<Object>;

  settings: Object;
  event: Object;

  constructor(private http: HttpClient, private token: TokenService) {
    // this.trigger = new BehaviorSubject(null);
  }

  authorize(params?: Params): Observable<Object> {

    console.log('AuthService#authorize called', params);
    // console.log('AuthService#authorize authorization$', this.authorization$);

    if (this.authorization$) {
      // console.log('AuthService#authorize authorization$ exists', this.authorization$);
      return this.authorization$;
    }

    // console.log('AuthService#authorize authorization$ setting', this.authorization$);

    // return this.authorization$ || this.trigger
    //   .pipe(
    //     switchMap(() => this.http.post(`${environment.api}/init/`, params))
    //   )
    return this.authorization$ = this.http
      .post(`${environment.api}/init/`, params)
      .pipe(
        tap(response => {
          console.log('AuthService#authorize response', response);

          if (response['token']) {
            this.token.token = response['token'];
          }

          if (response['api_settings'] && !this.settings) {
            this.settings = response['api_settings'];
          }

          if (response['event'] && !this.event) {
            this.event = response['event'];
          }
        }),
        share()
      );
  }

  // update() {
  //   this.trigger.next(null);

  //   return this.authorize$;
  // }

  // reauthorize(): void {
  //   this.authorized = false;
  // }

}
