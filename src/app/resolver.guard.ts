import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverGuard implements Resolve<any> {
  
  // We'll have a service call from an API here in real time.
  // Suppose we'e collected the data in this object from our API. 
  userObj = {
    name : 'Super-mario',
    age : 5
  }
  // Whenever a call to resolve interface is made, it'll return the data.

   resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
      return this.userObj
    }
}
