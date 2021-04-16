import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoginAction, LogoutAction } from '../../state/auth/auth.actions';
import { AuthState } from '../../state/auth/auth.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Select(AuthState.getIsLoggedIn)
  isLoggedIn$: Observable<Boolean>;
  isLoggedIn: Boolean;

  constructor(private store: Store) {
    this.isLoggedIn$.subscribe((val) => {
      this.isLoggedIn = val;
    });
  }

  login() {
    this.store.dispatch(new LoginAction());
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }
  ngOnInit(): void {}
}
