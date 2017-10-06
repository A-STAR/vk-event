import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegistrationGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const params: Params = next
      .queryParams;

    const url: string = state.url;

    return this.checkLogin(params, url);
  }

  checkLogin(params: Params, url: string): Observable<boolean> {
    return this.authService
      .login(params)
      .map(response => {
        console.log(response);
        if (!response) {
          // Get the redirect URL
          // If no redirect has been set, use the default
          const redirect = url ?
            url :
            '/registration';

          // Redirect the user
          // this.router
          //   .navigate([redirect]);

          return true;
        }

        // Navigate to the registration page with extras
        this.router
          .navigate(['/']);

        return false;
      });
  }

}
