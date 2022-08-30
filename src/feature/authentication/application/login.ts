import { AuthContext } from "./auth-context";
import { AuthStrategy } from "./strategies/auth-strategy";

export class Login {
  run(authStrategy: AuthStrategy, payload: { email: string, password: string }) {
    const authContext = new AuthContext(authStrategy);
    authContext.login(payload.email, payload.password);
  }
}