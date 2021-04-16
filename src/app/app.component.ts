import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthenticationCheckAction } from './shared/state/auth/auth.actions';
import { AuthState } from './shared/state/auth/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'amplify-angular-auth';

  @Select(AuthState.getIsLoggedIn)
  isLoggedIn$: Observable<Boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.checkAuthentication();
  }

  checkAuthentication() {
    this.store.dispatch(new AuthenticationCheckAction());
  }

  ngOnDestroy() {}
}
