import { AuthRepository } from "../../domain/repositories/auth-repository";

export class AzureStrategy implements AuthRepository {
  login(email: string, password: string): void {
    setTimeout(() => {
      return `${email} logged with ${password} in Azure`;
    }, 1000);
  }
}
