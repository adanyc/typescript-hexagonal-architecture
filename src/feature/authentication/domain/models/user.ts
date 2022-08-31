export class User {
  readonly username: string;
  readonly name: string;
  readonly lastName: string;
  readonly email: string;
  readonly age: number;

  constructor(username: string, name: string, lastName: string, email: string, age: number) {
    this.username = username;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
  }
}