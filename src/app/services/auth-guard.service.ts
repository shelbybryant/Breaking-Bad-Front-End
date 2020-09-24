/*
*The AuthGuardService implements the CanActivate interface. 
* By overriding the canActivate method we specify that a route should be 
* active only if the user is logged in.
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn())
      return true;
  
    this.router.navigate(['login']);
    return false;
    }
}
