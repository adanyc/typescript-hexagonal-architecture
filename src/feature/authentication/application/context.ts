import { Strategy } from "./strategy";

export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(email: string, password: string) {
    return this.strategy.login(email, password);
  };
}
