/* Using type parameter in generic constarined */

//In TS, a type parameter is constrained means we can define a generic type where one type depends by another type.

function getProperty<Type, Key extends keyof Type>(
  products: Type,
  key: Key
): Type[Key] {
  return products[key];
}
// T is generic type of an object.
// k is another generic type constrained by keyof T(means K must of key of T)
// So K depends on or is constrained by T

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFuntion<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

const Db = anotherFuntion(3, {
  connection: "localhost",
  username: "admin",
  password: "secret",
});

console.log(Db);

/* Using class type in generics */

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
