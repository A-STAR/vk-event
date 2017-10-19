import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/share';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

const PARAMS = {
  access_token: 'b25bab7b1aae21fb2bd033712363e0ac8fbdec9e8499fd4f959f0edb26a7d66f230702caeb96393298e7a',
  api_id: '6164516',
  api_result: '{"response":[{"uid":9412624,"first_name":"Andrey","last_name":"Vorobey","photo_200":"https:\/\/pp.userapi.com\/c604624\/v604624624\/81e7\/i9VdP19-JN0.jpg"}]}',
  api_script: 'https://api.vk.com/api.php',
  api_settings: '0',
  api_url: 'https://api.vk.com/api.php',
  auth_key: 'cfc035d7bf1063b941e67521a07197f5',
  group_id: '152582937',
  hash: '',
  is_app_user: '0',
  is_secure: '1',
  language: '3',
  lc_name: '57d900da',
  parent_language: '3',
  secret: 'feec5e88c4',
  sid: '91605cd24f7bc65ba25e21fa7b1c721f6ad3eb0436f9f7ff34e8eeb9f299329057d234422b9b75e5713eb',
  sign: '56754822b63241945ab4bd6b805bfe6ec416885e2d8e931b8a2c7ce9dac8b4dd',
  viewer_id: '9412624',
  viewer_type: '0'
};

@Injectable()
export class AuthService {

  authorized = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: HttpClient, private token: TokenService) { }

  authorize(params?: Params): Observable<boolean> {

    if (!environment.production) {
      params = PARAMS;
    }

    console.log('AuthService#login called', params);

    this.http
      .post(`${environment.api}/init/`, params)
      .do(response => this.token.token(response['token']))
      .share();

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
