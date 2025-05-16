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
console.log(typeof isString); // string
console.log(isString); // "45"

