import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { tap, retryWhen, mergeMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  request(method: string, url: string, body?: any | null, options?: Object) {
    const request = new HttpRequest(method, `${environment.api}${url}`, body, options);

    return this.http
      .request(request)
      .pipe(
        tap(data => console.log('HttpService#request do', data)),
        retryWhen(errors => errors.pipe(mergeMap(error => error === 401 ? this.auth.authorization$ : Observable.throw(error))))
      );
  }

  get(url: string, options?: Object) {
    return this.request('GET', url, options);
  }

  post(url: string, body: any | null, options?: Object) {
    return this.request('POST', url, body, options);
  }

  put(url: string, body: any | null, options?: Object) {
    return this.request('PUT', url, body, options);
  }

  delete(url: string, options?: Object) {
    return this.request('DELETE', url, options);
  }

}
