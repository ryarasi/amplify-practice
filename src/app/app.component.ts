import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthenticationCheckAction } from './shared/ngxs/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'amplify-angular-auth';
  isUserLoggedIn$: Observable<Boolean>;
  isUserLoggedIn: Boolean;

  constructor(private store: Store) {
    this.isUserLoggedIn$ = this.store.select((state) => state.isUserLoggedIn);
    this.isUserLoggedIn$.subscribe((val) => (this.isUserLoggedIn = val));
  }

  ngOnInit(): void {
    this.checkAuthentication();
  }

  checkAuthentication() {
    this.store.dispatch(new AuthenticationCheckAction());
  }

  ngOnDestroy() {}
}
