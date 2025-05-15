"use strict"; // Use strict mode to enforce stricter parsing and error handling. And also to avoid using undeclared variables. and treat all js code as ES6 or newer version

// alert("Hello World"); // alert is a function that displays an alert box with a specified message and an OK button. It is used to display information to the user. But now we are using node.js so we are not using alert. only in browser we can use alert.

console.log(3 + 4); // code readability should be good.

let name = "Abhishek"; // string
let age = 23; // number
let isStudent = true; // boolean

/* Data Types */
//numbers => 2 to power of 53
//bigint => 2 to power of 53
// string => "hello" or 'hello' or `hello`
// boolean => true or false
// null => empty value or standalone value.  null is object example: let x = null;
// undefined => variable is declared but not assigned any value. undefined is not an object. example: let x;
// let x = undefined;
//symbol => unique and immutable value. example: let x = Symbol("hello");
//object => collection of key-value pairs. example: let x = {name: "Abhishek", age: 23};

log(typeof undefined); // undefined
log(typeof null); // object
