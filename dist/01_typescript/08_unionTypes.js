"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let score = 33;
score = 44;
score = "55";
let abc = {
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
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//arrays
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["Quick", "Brown", "Fox", 1, 2, 3];
let seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"; // Error: Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.
seatAllotment = "middle";
