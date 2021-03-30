import { Component, Input, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoginAction, LogoutAction } from '../shared/ngxs/auth/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn$: Observable<Boolean>;
  isUserLoggedIn: Boolean;

  constructor(private store: Store) {
    this.isUserLoggedIn$ = this.store.select((state) => state.isUserLoggedIn);
    this.isUserLoggedIn$.subscribe((val) => (this.isUserLoggedIn = val));
  }

  login() {
    this.store.dispatch(new LoginAction());
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }
  ngOnInit(): void {}
}
