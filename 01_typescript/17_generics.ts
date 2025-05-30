/* 01.Generics allow you to write reusable code, flexible, and type-safe code that works with different data types without losing the benefits of typescript type checking. */

const score: Array<number> = [];
const names: Array<String> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
} // not good

function identityTwo(val: any): any {
  return val;
} // not good

function identityThree<Type>(vale: Type): Type {
  return vale;
}

// identityThree(true)

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({
  brand: "Nike",
  type: 1,
});

/* more about generics in arrray */

function getSearchProduct<T>(products: T[]): T {
  //do some DB operations.
  const myIndex = 3;
  return products[3];
}

// OR Arrow functions

const getMoreSearchProducts = <T>(products: T[]): T => {
  //do some DB operations.
  const myIndex = 4;
  return products[myIndex];
};
