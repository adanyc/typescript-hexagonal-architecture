export interface AuthRepository {
  login(username: string, password: string): void;
}
