import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthenticationCheckAction } from './shared/ngxs/auth/auth.actions';
import { AuthState } from './shared/ngxs/auth/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'amplify-angular-auth';
  @Select(AuthState.getIsLoggedIn)
  isLoggedIn$: Observable<Boolean>;
  isLoggedIn: Boolean;

  constructor(private store: Store) {
    this.isLoggedIn$.subscribe((val) => {
      this.isLoggedIn = val;
    });
  }

  ngOnInit(): void {
    this.checkAuthentication();
  }

  checkAuthentication() {
    this.store.dispatch(new AuthenticationCheckAction());
  }

  ngOnDestroy() {}
}
