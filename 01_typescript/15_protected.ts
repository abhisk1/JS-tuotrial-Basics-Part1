class User {
  protected _courseCount = 1;
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
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class subUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 5;
  }
}

const Ab = new User("sk@gmail.com", "sk", 11);
console.log(Ab);

export {};

/* protected is access modifiers which can access within class and inherited class */