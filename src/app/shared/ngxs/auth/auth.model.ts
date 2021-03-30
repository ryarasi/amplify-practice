export interface AuthStateModel {
  isLoggedIn: Boolean;
  currentUser: any;
  username: String;
}

export const defaultAuthState: AuthStateModel = {
  isLoggedIn: false,
  currentUser: {},
  username: '',
};
