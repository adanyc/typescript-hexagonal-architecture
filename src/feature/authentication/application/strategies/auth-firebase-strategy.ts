import { AuthRepository } from "../auth-repository";
import { AuthStrategy } from "./auth-strategy";

export class AuthFirebaseStrategy implements AuthStrategy {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  login(username: string, password: string): void {
    this.authRepository.login(username, password);
  }
}