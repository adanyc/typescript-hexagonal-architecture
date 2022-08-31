import { AuthStrategy } from "./strategies/auth-strategy";

export class AuthContext {
  private authStrategy: AuthStrategy;

  constructor(authStrategy: AuthStrategy) {
    this.authStrategy = authStrategy;
  }

  setStrategy(authStrategy: AuthStrategy) {
    this.authStrategy = authStrategy;
  }

  login(username: string, password: string) {
    return this.authStrategy.login(username, password);
  };
}
