import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GuardiaService } from './guardia.service';

@Injectable({
  providedIn: 'root',
})
export class GuardiaGuard implements CanActivate{
  constructor(private guardiaSrv: GuardiaService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {


    return this.guardiaSrv.autenticato().then((res) => {
      if (res) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    });
  }
}

