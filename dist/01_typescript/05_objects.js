"use strict";
//use case of object trough "Functions": pass on the objects as parameters into the function or return some objects from the function
Object.defineProperty(exports, "__esModule", { value: true });
/*   Don't use the objects as a type because it is not a good practice
const user = {
  name: "John Doe",
  email: "jhon@gmail.com",
  isActive: true,
};

function createUser({ name: string, isActive: boolean }) {
  // this function takes an object as a parameter
  // and returns an object
  // return { name, isPaid };
}

let newUser = { name: "John Doe", isPaid: true, email: "jhon@gmail.com" }; // this is how we can create an object

createUser(newUser); // this is how we can pass the object to the function

 */
//Functions return type annotations. but this is not a good practice
function createCourse() {
    return { name: "React", price: 499 };
}
const course = createCourse();
console.log(course); // this is how we can create an object
// function createCar(car: Car){} or function createCar(car: Car): Car{}
function createCar() {
    //functions that return objects
    return {
        type: "Toyota",
        model: "Corolla",
        price: 20000,
        isAvailable: true,
    };
}
const car = createCar();
console.log(car);
