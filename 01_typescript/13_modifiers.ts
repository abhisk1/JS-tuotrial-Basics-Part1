/* class User {
  public email: string;
  name: string;
  private readonly city: string = "Bengaluru";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
const Ab = new User("sk@gmail.com", "sk");
console.log(Ab); */

// The above code is used in production time.
class User {
  readonly city: string = "Bengaluru";
  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {}
}
const Ab = new User("sk@gmail.com", "sk", 11);
console.log(Ab);

export {};

/* Access modifiers in TS are: public, private, protected */
// public(default)- allows access to the class members from anywhere
// private- allows access to the class members only within the class.
// protected- allows access to the class members within the class and its child classes.
