import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanLoad, CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  private redirect(params, response) {
    if (response['token'] && !response['flags']['is_admin']) {
      // Navigate to the root page with extras
      this.router
        .navigate(['/'], { queryParams: params })
        .then(() => console.log('AdminGuard#authorized navigate /'));
    }
  }

  private authorized(response) {
    console.log('AdminGuard#authorized response', response);

    if (response['token'] && response['flags']['is_admin']) {
      console.log('AdminGuard#authorized true');
      return true;
    }

    console.log('AdminGuard#authorized false');
    return false;
  }

  authorize(params: Params, url: string): Observable<boolean> {
    return this.auth
      .authorize(params)
      .pipe(
        tap(this.redirect.bind(this, params)),
        map(this.authorized)
      );
  }

  canLoad(route: Route, next?: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const params: Params = next.queryParams;

    const url: string = route.path;

    return this.authorize(params, url);
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const params: Params = next.queryParams;

    const url: string = state.url;

    return this.authorize(params, url);
  }

}
