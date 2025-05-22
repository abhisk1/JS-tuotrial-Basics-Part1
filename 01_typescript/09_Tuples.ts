// const user: (string | number)[] = ["Ab", 1];

let tupleUser: [number, string, boolean];
tupleUser = [1, "ab", false]; // maintain order of the tuple data types.

// tupleUser = ['hi', 2, true]; // Error: Type 'string' is not assignable to type 'number'.

let rgb: [number, number, number] = [69, 69, 69];

type User = [number, string];

const newUser: User = [222, "AB@gmail.com"];

newUser[1] = "ab@c.com"; // valid

// newUser.push(true)

export {};
