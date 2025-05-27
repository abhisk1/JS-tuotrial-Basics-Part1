"use strict";
/* Types which are available in TS */
/*  ** Basic Types in TypeScript **
TypeScript provides several built-in types that can be used to define the type of a variable. Here are some of the most commonly used basic types:

1>. number: For all numbers (int, float, etc.)

2>. string:	Text or characters

3>. boolean:	true or false

// Special types.

4>. null:	Represents null(null is used to explicitly say: “this value is intentionally empty.”)

5>. undefined:	A variable that has not been assigned

6>. any: The any type is a special type that disables all type-checking for a variable.(It tells I know what I'm doing). it uses like plain JavaScript.

7>. unknown: similar to  any, but safer (type-check needed or But you can't use that value unless you first check its type.)

8>. void:	For functions that return nothing

9>. never: never return	value.(this is not allow us to return anything.)

10>. bigint:	Large integers beyond Number.MAX_SAFE_INTEGER

11>. symbol:	Unique and immutable identifiers
 */
/*
let ageNumber: number = 25;
console.log(ageNumber); // Output: 25

let userName: string = "Alice";
console.log(userName); // Output: Alice

let isActive: boolean = true;
console.log(isActive); // Output  : true

let userId: null = null;
console.log(userId); // Output: null

let userAge: undefined = undefined;
console.log(userAge); // Output: undefined

let value: any = "Hello";
value = 42; // value can be reassigned to any type
value = true; // value can be reassigned to any type
value(); // value can be reassigned to any type
console.log(value); // Output: Hello

let data: unknown = 10;
console.log(data); // Output: 10

function log(): void {}
console.log(log()); // Output: undefined

/* function fail(): never {
  throw new Error();
}
console.log(fail()); // Output: Error

let big: bigint = BigInt(123);
console.log(big); // Output: 123n

let sym: symbol = Symbol("id"); // Unique and immutable identifiers
console.log(sym); // Output: Symbol(id)
*/
/*   *** Object types: ***

  TypeScript also allows you to define object types. An object type can be defined using an interface or a type alias. Here are some examples:
  1>. object: For any non-primitive type (not string, number, boolean, etc.)
  2>. {}: 	Anonymous object structure
  3>. Arrays:	Collection of elements
  4>. Tuples:	Fixed-length array where each element has specific types and positions.
  5>. Enums:	Named constants
  */
/*
let obj: object = { name: "TS" };
console.log(obj); // Output: { name: 'TS' }
let user: { name: string } = { name: "A" };
console.log(user); // Output: { name: 'A' }
let nums: number[] = [1, 2, 3];
console.log(nums); // Output: [ 1, 2, 3 ]
let person: [string, number] = ["Alice", 30];
console.log(person); // Output: [ 'Alice', 30 ]
enum Color {
  Red,
  Green,
}
// let color: Color = Color.Red;
let color: Color = Color.Green;
console.log(color); // Output: 0
 */
/*  *** Advance type utility types: ***

1>. union:	Value can be one of many types
2>. intersection:	Combines multiple types
3>. literal:	Specific value types
4>. type / interface:	Define custom types
5>. readonly:	Prevent reassignment	(this is used to make properties of an object immutable and it is usd inside interface and class)
6>. Record:	Create object with keys of specific type. (Syntax:	Record<string, number>)
7>. Partial, Pick, Omit, etc.	Utility types for modifying types

*/
/*

let val: string | number = 5;
console.log(val); // Output: 5

type A = { a: string } & { b: number }

let dir: "left" | "right" = "left";
console.log(dir); // Output: left

type user = {
  name : string;
  age : number;
}

// readonly name: string = "John"; // Prevent reassignment
class Person {
  readonly name : string = "John"; // Prevent reassignment

  constructor() {
    this.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property
  }
}
const person = new Person();
console.log(person.name); // Output: John



const scores: Record<string, number> = {
  math : 90,
  social: 80,
  english: 85,
}
console.log(scores); // Output: { math: 90, social: 80, english: 85 }
 */
