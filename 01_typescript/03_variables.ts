// syntax: let variableName: type = value;

let greeting: string = "Hello, World!";

console.log(greeting); // Output: Hello, World!

// number

// let userId: nhumber = 13456.6;

/* Type Inference = means that TypeScript automatically figures out the type of a variable, return value, or expression without you needing to write the type explicitly. */

let userId = 13456.6;

// boolean

// let isLoggedIn: boolean = true;

let isLoggedIn = true;
console.log(isLoggedIn); // Output: true

//any

let hero: string;

function getHero() {
  return "Superman";
}

hero = getHero();
console.log(hero); // Output: true
