import { Login } from "../application/login";
import { AuthAzureStrategy } from "../application/strategies/auth-azure-strategy";
import { AuthFirebaseStrategy } from "../application/strategies/auth-firebase-strategy";
import { AuthAzureRepository } from "./services/auth-azure-repository";
import { AuthFirebaseRepository } from "./services/auth-firebase-repository";

const authMap = {
  azure: () => new AuthAzureStrategy(new AuthAzureRepository()),
  firebase: () => new AuthFirebaseStrategy(new AuthFirebaseRepository())
}

export class AuthClient {
  login(payload: { email: string, password: string }) {
    const login = new Login();
    login.run(authMap.azure(), payload);
  }
}