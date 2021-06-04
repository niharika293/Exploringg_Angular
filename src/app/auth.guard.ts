import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // a = 0; b= 0;
  userToken = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    // this.a = 2;
    // this.b = 10;

    // if(this.a > this.b)
    //   return true;
    // else
    //   return false;

    // Famous use case - Call an HTTP call to the backend API & get the auth token for the user.

    this.userToken = true;

    if(this.userToken)
      return true;
    else
      return false;




   
      // return true; //custom logic which allows the user to return true. 
      // return false;s
  }
  
}
