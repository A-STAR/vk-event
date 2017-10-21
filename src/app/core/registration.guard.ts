import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class RegistrationGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const params: Params = next.queryParams;

    const url: string = state.url;

    return this.authorized(params, url);
  }

  authorized(params: Params, url: string): Observable<boolean> {
    return this.auth
      .authorize(params)
      .do(response => {
        if (response['token'] && response['profile']) {
          // Navigate to the root page with extras
          this.router
            .navigate(['/'], { queryParams: params })
            .then(() => console.log('RegistrationGuard#authorized navigate /'));
        }
      })
      .map(response => {
        console.log('RegistrationGuard#authorized response', response);

        if (response['token'] && !response['profile']) {
          console.log('RegistrationGuard#authorized true');
          return true;
        }

        console.log('RegistrationGuard#authorized false');
        return false;
      });
  }

}
