//type interface is not good in case of functions and large codebases. So any is not allowed in strict mode.

function addTwo(num: number): number {
  return num + 2;

  // return "Hello";
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean) {
  return {
    name,
    email,
    isPaid,
  };
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  return {
    name,
    email,
    isPaid,
  };
};

console.log(addTwo(5)); // 7
getUpper("Hello"); // "HELLO"

const result = signUp("John", "jhon@gmail.com", true);
// console.log(result); // { name: 'John', email: '

const login = loginUser("a", "a@gmail.com");
// console.log(login); // undefined

// part-2

const getHEllo = (s: string): string => {
  return s;
};

const hero = ["thor", "spider man", "iron man"];

hero.map((hero: string): string => {
  return `hero is ${hero}`;
  // return 2;
});

function consoleError(err: string): void {
  console.log(err);
}
consoleError("something went wrong");


// never is used when function will never return anything. It runs infinite loop or throw error.
/* function handleError(err: string): never {
  throw new Error(err);
}

console.log(handleError("something went wrong")); // Error: something went wrong

 */
export {};// export is used to avoid error in ts file. It is not used in js file.
