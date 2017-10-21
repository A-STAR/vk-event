import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {

  // private trigger: BehaviorSubject<any>;

  // authorized = false;

  // store the URL so we can redirect after logging in
  // redirectUrl: string;

  authorization$: Observable<Object>;

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
    //   .switchMap(() => this.http.post(`${environment.api}/init/`, params))
    return this.authorization$ = this.http
      .post(`${environment.api}/init/`, params)
      .do(response => {
        console.log('AuthService#authorize response', response);
        this.token.token = response['token'];
      })
      .share();
  }

  // update() {
  //   this.trigger.next(null);

  //   return this.authorize$;
  // }

  // reauthorize(): void {
  //   this.authorized = false;
  // }

}
