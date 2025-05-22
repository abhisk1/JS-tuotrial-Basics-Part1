let score: number | string = 33;

score = 44;
score = "55";
// score = true; // Error: Type 'true' is not assignable to type 'string | number'.

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let abc: User | Admin = {
  name: "John",
  id: 1,
};

abc = { userName: "Joo", id: 1 };
console.log(abc);

/* function getDbId(id: number | string) {
  // making API call
  console.log(`DB id is: ${id}`);
} */

getDbId(4);
getDbId("4");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//arrays
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["Quick", "Brown", "Fox", 1, 2, 3];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"; // Error: Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.
seatAllotment = "middle";

export {};
