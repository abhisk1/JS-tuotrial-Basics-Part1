/* class is blueprint for creating an objects with specific properties and methods. */
//  use class by creating an object.
// this- keyword in class which is usually refers to the instance of class or object.

class Person {
  name: string;//or
  // readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const user = new Person("Ab", 23);
user.greet();

export {};
