"use strict";
/*  1.readonly keyword(used in syntax of TS to define properties that cannot be changed or reassigned after initialization)

** _id is property of type string but readonly means it cannot be changed or reassigned after initialization.

** readonly is used to make property read-only.The readonly is not property.
 */
let myUser = {
    _id: "123",
    name: "John Doe",
    email: "jho@gmail,com",
    isActive: true,
    credCardDetails: 1234567890,
};
const myCard = {
    cardNumber: "1234567890123456",
    carddate: "12/23",
    cvv: 123,
};
console.log(myCard); // this is how we can create an object
myUser.email = "jho@.com";
// myUser,_id = "456"; // error: cannot assign to 'id' because it is a read-only property
console.log(myUser);
