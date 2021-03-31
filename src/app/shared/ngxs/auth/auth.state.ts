import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AuthStateModel, defaultAuthState } from './auth.model';
import {
  LoginAction,
  AuthenticationCheckAction,
  LogoutAction,
} from './auth.actions';
import { Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

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

  @Selector()
  static getIsLoggedIn(state: AuthStateModel) {
    console.log('from getIsLoggedIn selector =>', state);
    return state.isLoggedIn;
  }

  @Action(LoginAction)
  login() {
    window.location.assign(this.loginurl);
  }

  @Action(AuthenticationCheckAction)
  checkLogin({ getState, patchState }: StateContext<AuthStateModel>) {
    const state = getState();
    Auth.currentAuthenticatedUser()
      .then((currentUser) => {
        const isLoggedIn = true;
        const username = currentUser?.attributes?.name;
        patchState({ isLoggedIn, username });
      })
      .catch((err) => console.log(err));
    return;
  }

  @Action(LogoutAction)
  logout({ patchState }: StateContext<AuthStateModel>) {
    Auth.signOut()
      .then((data) => {
        console.log(data);
        patchState(defaultAuthState);
      })
      .catch((err) => console.log(err));

    return;
  }
}
