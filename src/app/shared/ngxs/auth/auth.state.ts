import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AuthStateModel, defaultAuthState } from './auth.model';
import {
  LoginAction,
  AuthenticationCheckAction,
  LogoutAction,
} from './auth.actions';
import { Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';

@State<AuthStateModel>({
  name: 'authState',
  defaults: defaultAuthState,
})
export class AuthState {
  cognitoClientId = environment.cognitoClientId;
  cognitoCallbackURL = environment.cognitoCallbackURL;
  cognitoDomainName = environment.cognitoDomainName;
  loginurl = `https://${this.cognitoDomainName}/login?response_type=code&client_id=${this.cognitoClientId}&redirect_uri=${this.cognitoCallbackURL}`;

  @Selector()
  static getIsUserLoggedIn(state: AuthStateModel) {
    return state.isLoggedIn;
  }

  @Action(LoginAction)
  login() {
    window.location.assign(this.loginurl);
  }

  @Action(AuthenticationCheckAction)
  checkLogin({ getState, patchState }): StateContext<AuthStateModel> {
    const state = getState();
    Auth.currentAuthenticatedUser()
      .then((currentUser) => {
        const isUserLoggedIn = true;
        const userName = currentUser?.attributes?.name;
        patchState({
          currentUser,
          isUserLoggedIn,
          userName,
        });
      })
      .catch((err) => console.log(err));
    return;
  }

  @Action(LogoutAction)
  logout({ patchState }): StateContext<AuthStateModel> {
    const isUserLoggedIn = false;
    Auth.signOut()
      .then((data) => {
        console.log(data);
        patchState(defaultAuthState);
      })
      .catch((err) => console.log(err));

    return;
  }
}
