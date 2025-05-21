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








export {};
