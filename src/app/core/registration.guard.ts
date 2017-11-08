import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class RegistrationGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  private redirect(params, response) {
    if (response['token'] && response['profile']) {
      // Navigate to the root page with extras
      this.router
        .navigate(['/'], { queryParams: params })
        .then(() => console.log('RegistrationGuard#authorized navigate /'));
    }
  }

  private authorized(response) {
    console.log('RegistrationGuard#authorized response', response);

    if (response['token'] && !response['profile']) {
      console.log('RegistrationGuard#authorized true');
      return true;
    }

    console.log('RegistrationGuard#authorized false');
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

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const params: Params = next.queryParams;

    const url: string = state.url;

    return this.authorize(params, url);
  }

}
