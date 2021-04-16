import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import Auth from '@aws-amplify/auth';
import { Store } from '@ngxs/store';
import { ShowNotificationAction } from '../state/notifications/notification.actions';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private _router: Router, private store: Store) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return Auth.currentAuthenticatedUser()
      .then(() => {
        return true;
      })
      .catch(() => {
        this._router.navigateByUrl('/');
        this.store.dispatch(
          new ShowNotificationAction({
            message: 'You must to be logged in to do that!',
          })
        );
        return false;
      });
  }
}
