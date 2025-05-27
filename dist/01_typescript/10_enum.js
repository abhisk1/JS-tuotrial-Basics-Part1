"use strict";
//  Enums in typescript is a special "class" that represents a group of constants (unchangeable variables).
//Enums with default values alwasy start with 0 and sequentially increase by 1
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["UNKNOWN"] = 3] = "UNKNOWN";
})(SeatChoice || (SeatChoice = {}));
const abSeat = SeatChoice.AISLE;
console.log(abSeat); // 1
//Enums with custom values
var SeatChoice2;
(function (SeatChoice2) {
    SeatChoice2[SeatChoice2["AISLE"] = 10] = "AISLE";
    SeatChoice2[SeatChoice2["MIDDLE"] = 20] = "MIDDLE";
    SeatChoice2[SeatChoice2["WINDOW"] = 30] = "WINDOW";
    SeatChoice2[SeatChoice2["UNKNOWN"] = 40] = "UNKNOWN";
})(SeatChoice2 || (SeatChoice2 = {}));
//Enums with string values
var SeatChoice3;
(function (SeatChoice3) {
    SeatChoice3["AISLE"] = "aisle";
    SeatChoice3["MIDDLE"] = "middle";
    SeatChoice3["WINDOW"] = "window";
    SeatChoice3["UNKNOWN"] = "unknown";
})(SeatChoice3 || (SeatChoice3 = {}));
// Enums with mixed values
var SeatChoice4;
(function (SeatChoice4) {
    SeatChoice4["AISLE"] = "aisle";
    SeatChoice4[SeatChoice4["MIDDLE"] = 20] = "MIDDLE";
    SeatChoice4[SeatChoice4["WINDOW"] = 21] = "WINDOW";
    SeatChoice4[SeatChoice4["UNKNOWN"] = 22] = "UNKNOWN";
})(SeatChoice4 || (SeatChoice4 = {}));
let seat = SeatChoice4.AISLE;
//Enums with computed values
var SeatChoice5;
(function (SeatChoice5) {
    SeatChoice5["AISLE"] = "aisle";
    SeatChoice5[SeatChoice5["MIDDLE"] = 20] = "MIDDLE";
    SeatChoice5[SeatChoice5["WINDOW"] = 21] = "WINDOW";
    SeatChoice5["UNKNOWN"] = "unknown";
})(SeatChoice5 || (SeatChoice5 = {}));
let seat2 = SeatChoice5.WINDOW;
console.log(seat2); // 21
