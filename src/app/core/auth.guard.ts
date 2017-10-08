import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard#canActivate called');

    const params: Params = next.queryParams;

    const url: string = state.url;

    return this.checkLogin(params, url);
  }

  checkLogin(params: Params, url: string): Observable<boolean> {
    return this.auth
      .login(params)
      .map(response => {
        console.log('AuthGuard#checkLogin response', response);
        if (response) {
          // Get the redirect URL
          // If no redirect has been set, use the default
          const redirect = url ?
            url :
            '/';

          // Redirect the user
          // this.router
          //   .navigate([redirect]);

          return true;
        }

        // Navigate to the registration page with extras
        this.router
          .navigate(['/registration']);

        return false;
      });
  }

  // checkLogin(url: string): boolean {
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
