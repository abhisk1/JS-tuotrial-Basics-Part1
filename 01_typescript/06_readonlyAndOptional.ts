/*  1.readonly keyword(used in syntax of TS to define properties that cannot be changed or reassigned after initialization)

** _id is property of type string but readonly means it cannot be changed or reassigned after initialization.

** readonly is used to make property read-only.The readonly is not property.
 */

// 2.optional (? or literal question mark)
/*
 ** ? means optional property. it means the property is optional. Ts will not throw an error if its missing.
 ** ? is used to make property optional. The ? is not property.
 */

// 3. useCase of type
/*
 ** Custom type Alias-define your own custom object structure that can be reused in multiple places.
 */

// 1.readonly keyword
type User = {
  readonly _id: string; // once the id is assigned, it cannot be changed or reassigned.
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number; //(? means optional) optional property
};

let myUser: User = {
  _id: "123",
  name: "John Doe",
  email: "jho@gmail,com",
  isActive: true,
  credCardDetails: 1234567890,
};

/* example of use case of type (custom type alias.) */
type cardNum = {
  cardNumber: string;
};
type cardDate = {
  carddate: string;
};

type cardDetails = cardNum &
  cardDate & {
    // combination of two types.
    cvv: number;
  };

const myCard: cardDetails = {
  cardNumber: "1234567890123456",
  carddate: "12/23",
  cvv: 123,
};

console.log(myCard); // this is how we can create an object
myUser.email = "jho@.com";
// myUser,_id = "456"; // error: cannot assign to 'id' because it is a read-only property
console.log(myUser);
