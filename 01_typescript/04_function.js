"use strict";
//type interface is not good in case of functions and large codebases. So any is not allowed in strict mode.
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) {
    return {
        name: name,
        email: email,
        isPaid: isPaid,
    };
}
addTwo(5); // 7
getUpper("Hello"); // "HELLO"
var result = signUp("John", "jhon@gmail.com", true);
console.log(result); // { name: 'John', email: '
