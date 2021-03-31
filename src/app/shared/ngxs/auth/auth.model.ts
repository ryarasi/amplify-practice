export interface AuthStateModel {
  isLoggedIn: Boolean;
  username: String;
}

export const defaultAuthState: AuthStateModel = {
  isLoggedIn: false,
  username: '',
};
