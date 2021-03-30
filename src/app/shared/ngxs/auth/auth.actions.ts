import { AuthStateModel } from './auth.model';

export class LoginAction {
  static readonly type = '[AUTH] Login';

  constructor() {}
}

export class AuthenticationCheckAction {
  static readonly type = '[AUTH] User Authentication Check';

  constructor() {}
}

export class LogoutAction {
  static readonly type = '[AUTH] Logout';

  constructor() {}
}
