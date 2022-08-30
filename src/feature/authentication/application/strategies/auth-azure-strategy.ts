import { AuthRepository } from "../auth-repository";
import { AuthStrategy } from "./auth-strategy";

export class AuthAzureStrategy implements AuthStrategy {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  login(email: string, password: string): void {
    this.authRepository.login(email, password);
  }
}