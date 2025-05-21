//type interface is not good in case of functions and large codebases. So any is not allowed in strict mode.

function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean) {
  return {
    name,
    email,
    isPaid,
  };
}

addTwo(5); // 7
getUpper("Hello"); // "HELLO"

const result = signUp("John", "jhon@gmail.com", true);
console.log(result); // { name: 'John', email: '
export {};
