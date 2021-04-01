import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { AuthStateModel, defaultAuthState } from './auth.model';
import {
  LoginAction,
  AuthenticationCheckAction,
  LogoutAction,
} from './auth.actions';
import { Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ShowNotificationAction } from '../notifications/notification.actions';
import { ToggleLoadingScreen } from '../loading/loading.actions';

@State<AuthStateModel>({
  name: 'authState',
  defaults: defaultAuthState,
})
@Injectable()
export class AuthState {
  cognitoClientId = environment.cognitoClientId;
  cognitoCallbackURL = environment.cognitoCallbackURL;
  cognitoDomainName = environment.cognitoDomainName;
  loginurl = `https://${this.cognitoDomainName}/login?response_type=code&client_id=${this.cognitoClientId}&redirect_uri=${this.cognitoCallbackURL}`;

  constructor(private store: Store) {}

  @Selector()
  static getIsLoggedIn(state: AuthStateModel) {
    return state.isLoggedIn;
  }

  @Action(LoginAction)
  login() {
    this.store.dispatch(
      new ToggleLoadingScreen({
        showLoadingScreen: true,
        message: 'Redirecting to login page...',
      })
    );
    window.location.assign(this.loginurl);
  }

  @Action(AuthenticationCheckAction)
  checkLogin({ getState, patchState }: StateContext<AuthStateModel>) {
    console.log('check login action initiated...');
    const state = getState();
    this.store.dispatch(
      new ToggleLoadingScreen({
        showLoadingScreen: true,
        message: 'Authenticating...',
      })
    );
    Auth.currentAuthenticatedUser()
      .then((currentUser) => {
        const isLoggedIn = true;
        const username = currentUser?.attributes?.name;
        patchState({ isLoggedIn, username });
        this.store.dispatch(
          new ShowNotificationAction({
            message: 'Login Successful!',
          })
        );
        this.store.dispatch(
          new ToggleLoadingScreen({
            showLoadingScreen: false,
            message: 'Authenticated...',
          })
        );
      })
      .catch((err) => {
        console.log(err);
        this.store.dispatch(
          new ToggleLoadingScreen({
            showLoadingScreen: false,
            message: 'Authenticated!',
          })
        );
      });
    return;
  }

  @Action(LogoutAction)
  logout({ patchState }: StateContext<AuthStateModel>) {
    this.store.dispatch(
      new ToggleLoadingScreen({
        showLoadingScreen: true,
        message: 'Logging out...',
      })
    );

    this.store.dispatch(
      new ShowNotificationAction({
        message: 'Logout Successful!',
      })
    );
    Auth.signOut()
      .then((data) => {
        console.log(data);
        patchState(defaultAuthState);

        this.store.dispatch(
          new ToggleLoadingScreen({
            showLoadingScreen: false,
            message: 'Logged out!',
          })
        );
      })

      .catch((err) => {
        console.log(err);

        this.store.dispatch(
          new ToggleLoadingScreen({
            showLoadingScreen: false,
            message: 'Logged out!',
          })
        );
      });

    return;
  }
}
