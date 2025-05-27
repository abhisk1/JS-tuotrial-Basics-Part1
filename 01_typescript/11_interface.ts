/* interface is  blueprint of an object-  it defines properties and methods(behavior) of objects.*/

interface User {
  readonly dbId: number; // readonly property
  email: string;
  userId: number;
  googleId?: string; // optional property
  startTrail: () => string; // or
  // startTrail(): string; // method signature
  getCoupon(couponName: string, value: number): number; // method signature with parameter
}

// example of reopening of an interface.
interface User {
  gitHubToken: string; // new property added
}

// extends is keyword to inherit properties from another interface or parent interface.
interface Admin extends User {
  role: "admin" | "ta" | "learner"; // union type for role
}

const Ab: User = {
  dbId: 22,
  email: "ab@ab.com",
  userId: 123,
  gitHubToken: "gh_12345",
  startTrail: () => {
    return "Trail started";
  },
  getCoupon: (name: "Ab10", off: 10) => {
    return 10;
  },
};
Ab.email = "rj@gmail.com";
//Ab.dbId = 33;// Error: Cannot assign to 'dbId' because it is a read-only property.

/* Difference between type aliases and interfaces*/

// 1. Type aliases can define primitive types, union types, and intersection types, while interfaces cannot.
type bankEmployee = "Manager" | "staff" | "casher"; // type alias

// 2. Interfaces can be extended using the extends keyword, while type aliases cannot be extended.
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;

  function getBear(): Bear {
    return {
      name: "Yogi",
      honey: true,
    };
  }

  export {};

