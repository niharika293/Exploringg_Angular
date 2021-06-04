import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import  {SearchComponent} from './search/search.component'

@Injectable({
  providedIn: 'root'
})

export class UnsavedGuard implements CanDeactivate<SearchComponent> { //can deactivate is of type SearchComponent
  canDeactivate(component: SearchComponent){
    if(component.isDirty){
      return window.confirm("You have some unsaved data!! Are you sure you want to exit the page?");
    }
    return true;
  }
  
}
