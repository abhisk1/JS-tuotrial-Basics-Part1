let score = "33"; // "33" => 33
//let score = "33abc"; // "33abc " => Not A Number(NAN)
// let score = null; //
// let score = undefined; // string
//let score = true; // true => 1; false => 0;

// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score); // convert string to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 33

let isLoggedIn = 0; // boolean

let booleanIsLoggedIn = Boolean(isLoggedIn); // convert number to boolean
// console.log(booleanIsLoggedIn); // boolean

// 1 => true; 0 => false;
// "" => false;
// " " => true;
// "0" => true;
// "1" => true;
// "abc" => true;

let setNumber = 45;

let isString = String(setNumber); // convert number to string
// console.log(typeof isString); // string
// console.log(isString); // "45"

// ******************** Operations ********************

let value = 3;
let negValue = -value;
//console.log(negValue); // -3

// console.log(2 + 3); // 5
// console.log(2 - 3); // -1
// console.log(2 * 3); // 6
// console.log(2 / 3); // 0.6666666666666666
// console.log(2 % 3); // 2
// console.log(2 ** 3); // 8

let str1 = "Hello";
let str2 = " World";

let str3 = str1 + str2; // string concatenation
// console.log(str3); // Hello World

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log(1 + 2 + "3"); // 33
// console.log(1 + "2" + 3); // 123

// console.log(((3 + 4) * 5) % 3); // 35

/* Don't do this  */
// console.log(+true); // 1
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 10 + 10; // 20

/* Increments */
let gameCounter = 100;
++gameCounter; // 101
// console.log(gameCounter); // 101

/* Postfix Increment */
let x = 3;
const y = x++;
// x is 4; y is 3

/* Prefix increment */
let a = 3;
const b = ++a;
// a is 4;  is 4

