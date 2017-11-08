import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  private redirect(params, response) {
    console.log('RESPONSE', response);
    if (response['token']) {

      if (!response['flags']['has_event']) {
        if (response['flags']['is_admin']) {
          // Navigate to the admin page with extras
          this.router
            .navigate(['/admin'], { queryParams: params })
            .then(() => console.log('AuthGuard#authorized navigate /admin'));
          } else {
            // Navigate to the fallback page with extras
            // this.router
            //   .navigate(['/fallback'], { queryParams: params })
            //   .then(() => console.log('AuthGuard#authorized navigate /fallback'));
        }
        return;
      }

      if (!response['profile']) {
        // Navigate to the registration page with extras
        this.router
          .navigate(['/registration'], { queryParams: params })
          .then(() => console.log('AuthGuard#authorized navigate /registration'));
      }

    }
  }

  private authorized(response) {
    console.log('AuthGuard#authorized response', response);

    if (response['token'] && response['profile'] && response['flags']['has_event']) {
      // Get the redirect URL
      // If no redirect has been set, use the default
      // const redirect = url ?
      //   url :
      //   '/';

      // Redirect the user
      // this.router
      //   .navigate([redirect]);

      console.log('AuthGuard#authorized response true');
      return true;
    }

    console.log('AuthGuard#authorized response false');
    return false;
  }

  authorize(params: Params, url: string): Observable<boolean> {
    return this.auth
      .authorize(params)
      .pipe(
        tap(this.redirect.bind(this, params)), // this.redirect(params, response)
        map(this.authorized)
      );
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard#canActivate called');

    const params: Params = next.queryParams;

    const url: string = state.url;

    return this.authorize(params, url);
  }

  // authorize(url: string): boolean {
  //   if (this.auth.isLoggedIn) {
  //     return true;
  //   }

  //   // Store the attempted URL for redirecting
  //   this.auth.redirectUrl = url;

  //   // Navigate to the registration page with extras
  //   this.router
  //     .navigate(['/registration']);

  //   return false;
  // }

}
