import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('AuthGuard#canActivate called');
    // console.log(state);

    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): Observable<boolean> {
    return this.authService
      .login()
      .map(response => {
        console.log(response);
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
      // .subscribe(() => {
      //   if (this.authService.isLoggedIn) {
      //     // Redirect the user
      //     this.router
      //       .navigate([url]);

      //     return true;
      //   } else {
      //     // Navigate to the registration page with extras
      //     this.router
      //       .navigate(['/registration']);

      //     return false;
      //   }
      // });
  }

  // checkLogin(url: string): boolean {
  //   if (this.authService.isLoggedIn) {
  //     return true;
  //   }

  //   // Store the attempted URL for redirecting
  //   this.authService.redirectUrl = url;

  //   // Navigate to the registration page with extras
  //   this.router
  //     .navigate(['/registration']);

  //   return false;
  // }

}
