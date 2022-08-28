// class AuthContext {
//   private strategy: Strategy;

// import { Context } from "./behavioral-patterns/strategy/application/context";
// import { FirebaseStrategy } from "./behavioral-patterns/strategy/application/strategies/firebase-strategy";

//   constructor(strategy: Strategy) {
//     this.strategy = strategy;
//   }

//   setStrategy(strategy: Strategy){
//     this.strategy = strategy;
//   }

//   login(user: string, password: string): void {
//     return this.strategy.login(user, password);
//   };
// }

// class DatabaseLoginStrategy implements Strategy {
//   login(user: string, password: string): void {
//     console.log(`Database login => user: ${user} / password: ${password}`);
//   }
// }

// class AzureLoginStrategy implements Strategy {
//   login(user: string, password: string): void {
//     console.log(`Azure login => user: ${user} / password: ${password}`);
//   }
// }

// const databaseLoginContext = new AuthContext(new DatabaseLoginStrategy());
// databaseLoginContext.login('adanyc-database', '12346-database');

// // Fácilmente podriamos instanciar nuevamente un AuthContext pero
// // también podríamos cambiar de estrategia en runtime.
// databaseLoginContext.setStrategy(new AzureLoginStrategy());
// databaseLoginContext.login('adanyc-azure', '12346-azure');

// const context = new Context(new FirebaseStrategy());
