"use strict";
//type interface is not good in case of functions and large codebases. So any is not allowed in strict mode.
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "Hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) {
    return {
        name,
        email,
        isPaid,
    };
}
let loginUser = (name, email, isPaid = false) => {
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
const getHEllo = (s) => {
    return s;
};
const hero = ["thor", "spider man", "iron man"];
hero.map((hero) => {
    return `hero is ${hero}`;
    // return 2;
});
function consoleError(err) {
    console.log(err);
}
consoleError("something went wrong");
