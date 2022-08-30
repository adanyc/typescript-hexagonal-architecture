import { AuthRepository } from "../../application/auth-repository";

export class AuthAzureRepository implements AuthRepository {
  login(email: string, password: string): void {
    setTimeout(() => {
      console.log(`${email} logged with ${password} in Azure`);
    }, 1000);
  }
}