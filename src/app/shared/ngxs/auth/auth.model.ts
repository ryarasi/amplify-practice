export interface AuthStateModel {
  isLoggedIn: Boolean;
  username: String;
  name: String;
  groups: String[];
}

export const defaultAuthState: AuthStateModel = {
  isLoggedIn: false,
  username: '',
  name: '',
  groups: [],
};
