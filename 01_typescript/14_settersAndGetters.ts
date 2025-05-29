class User {
  private _courseCount = 1;
  readonly city: string = "Bengaluru";
  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }
  /* set courseCount(courseNum): void{ //  explicitly mentioning the any return types is not allowed according to the standards.
  //The setter function automatically has implements the return type of void.

  } */

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}
const Ab = new User("sk@gmail.com", "sk", 11);
console.log(Ab);

export {};
