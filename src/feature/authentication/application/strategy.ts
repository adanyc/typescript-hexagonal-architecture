export interface Strategy {
  login(email: string, password: string): void;
}
