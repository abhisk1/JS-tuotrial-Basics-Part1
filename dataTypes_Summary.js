// Primitive Data Types

// 7 primitive data types: Strings, Numbers, Booleans, Undefined, Null, BigInt, Symbol(it used to create unique identifiers)

const id = Symbol('123'); // Symbol is a unique and immutable data type that can be used as an identifier for object properties. It is often used to create private properties or to avoid name clashes in objects.
const anotherId = Symbol('123'); // Symbol is unique, even if the description is the same.
console.log(id === anotherId); // false, because each Symbol is unique, even if they have the same description.

const bigIntValue = 1234567890123456789012345678901234567890n; // BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1. It is used for very large integers that cannot be represented by the Number data type.

/* JS is Dynamically typed Language */
const score = 100;
const scoreValue = 100.5;
const isPassed = true;
const outsideTemperature = null;
const outsideTemperatureValue = undefined;  
//  JS is a dynamically typed language, meaning you don't have to specify the data type of a variable when you declare it. The type is determined automatically at runtime based on the value assigned to the variable.




//  Reference Data Types(Non-primitive)

// Arrays, Objects, Functions

const heros = ['spiderman', 'batman', 'superman'];

const myObject = {
    name: 'spiderman',
    age: 30,
    isAvenger: true
};

const herosFunction = function() {
    console.log('hello');
};
//  Reference data types are more complex data types that can hold multiple values and can be modified. They are stored in memory as a reference to the location where the data is stored, rather than the actual value itself. This means that when you assign a reference data type to a new variable, you are actually assigning a reference to the same object in memory, not a copy of the object itself.



console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof bigIntValue); // bigint
console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isPassed); // boolean
console.log(typeof outsideTemperature); // object
console.log(typeof outsideTemperatureValue); // undefined
console.log(typeof heros); // object  
console.log(typeof myObject); // object
console.log(typeof herosFunction); // function
