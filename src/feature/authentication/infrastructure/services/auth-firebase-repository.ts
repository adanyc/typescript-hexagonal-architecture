import { AuthRepository } from "../../application/auth-repository";

export class AuthFirebaseRepository implements AuthRepository {
  login(email: string, password: string): void {
    setTimeout(() => {
      console.log(`${email} logged with ${password} in Firebase`);
    }, 1000);
  }
}