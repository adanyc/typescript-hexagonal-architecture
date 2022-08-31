import { AuthContext } from "./auth-context";
import { AuthStrategy } from "./strategies/auth-strategy";

export class Login {
  run(authStrategy: AuthStrategy, payload: { username: string, password: string }) {
    const authContext = new AuthContext(authStrategy);
    authContext.login(payload.username, payload.password);
  }
}