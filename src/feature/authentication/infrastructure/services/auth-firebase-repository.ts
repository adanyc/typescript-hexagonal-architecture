import { AuthRepository } from "../../application/auth-repository";

export class AuthFirebaseRepository implements AuthRepository {
  login(username: string, password: string): void {
    setTimeout(() => {
      console.log(`${username} logged with ${password} in Firebase`);
    }, 1000);
  }
}