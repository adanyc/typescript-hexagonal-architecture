export interface AuthStrategy {
  login(email: string, password: string): void;
}
