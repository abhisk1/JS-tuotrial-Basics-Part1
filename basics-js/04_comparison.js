// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

/* null */
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // true because Comparisons convert null to number, treating it as 0. thats why null >= 0 is true and null > 0 is false.

// comparison and equality operator are different in js.
// comparison operator (>, <, >=, <=) converts the operands to numbers before comparing them.
// equality operator (==, !=) does not convert the operands to numbers before comparing them.
// So, null is not equal to 0, but it is less than or equal to 0.

// The above problem reason is that an equality operator (==) does not perform type coercion, so null is not equal to 0. and comparisons > < >= <= works with type coercion...

/* undefined */
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// undefined is not equal to 0, and undefined is not greater than or equal to 0. So, all the comparisons are false.



/* strict check */
// === it will check the value strictly. and it didn't perform any conversion just it checks equality.

// == it will check the value loosely. and it will perform type conversion before checking equality.

// != it will check the value loosely. and it will perform type conversion before checking equality.

// !== it will check the value strictly. and it didn't perform any conversion just it checks equality.

// === and !== are strict equality operators, which means they do not perform type coercion before comparing values.