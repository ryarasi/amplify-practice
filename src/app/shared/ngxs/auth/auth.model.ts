export interface AuthStateModel {
  isLoggedIn: Boolean;
  username: String;
  groups: String[];
}

export const defaultAuthState: AuthStateModel = {
  isLoggedIn: false,
  username: '',
  groups: [],
};
