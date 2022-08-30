export interface AuthRepository {
  login(email: string, password: string): void;
}
