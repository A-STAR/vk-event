import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
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
      .map(response => {
        console.log('RegistrationGuard#authorized response', response);

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
