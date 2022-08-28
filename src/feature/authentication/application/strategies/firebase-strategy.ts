import { AuthRepository } from "../../domain/repositories/auth-repository";

export class FirebaseStrategy implements AuthRepository {
  login(email: string, password: string): void {
    setTimeout(() => {
      return `${email} logged with ${password} in Firebase`;
    }, 1000);
  }
}
