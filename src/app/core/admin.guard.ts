import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanLoad, CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canLoad(route: Route, next?: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const params: Params = next.queryParams;

    const url: string = route.path;

    return this.authorized(params, url);
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const params: Params = next.queryParams;

    const url: string = state.url;

    return this.authorized(params, url);
  }

  authorized(params: Params, url: string): Observable<boolean> {
    return this.auth
      .authorize(params)
      .do(response => {
        if (response['token'] && !response['flags']['is_admin']) {
          // Navigate to the root page with extras
          this.router
            .navigate(['/'], { queryParams: params })
            .then(() => console.log('AdminGuard#authorized navigate /'));
        }
      })
      .map(response => {
        console.log('AdminGuard#authorized response', response);

        if (response['token'] && response['flags']['is_admin']) {
          console.log('AdminGuard#authorized true');
          return true;
        }

        console.log('AdminGuard#authorized false');
        return false;
      });
  }

}
