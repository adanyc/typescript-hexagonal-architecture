import { AuthRepository } from "../../application/auth-repository";

export class AuthAzureRepository implements AuthRepository {
  login(username: string, password: string): void {
    setTimeout(() => {
      console.log(`${username} logged with ${password} in Azure`);
    }, 1000);
  }
}