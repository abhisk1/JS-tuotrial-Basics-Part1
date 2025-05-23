//  Enums in typescript is a special "class" that represents a group of constants (unchangeable variables).

//Enums with default values alwasy start with 0 and sequentially increase by 1
enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
  UNKNOWN,
}

const abSeat = SeatChoice.AISLE;

console.log(abSeat); // 1

//Enums with custom values
enum SeatChoice2 {
  AISLE = 10,
  MIDDLE = 20,
  WINDOW = 30,
  UNKNOWN = 40,
}

//Enums with string values
enum SeatChoice3 {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = "window",
  UNKNOWN = "unknown",
}

// Enums with mixed values
enum SeatChoice4 {
  AISLE = "aisle",
  MIDDLE = 20,
  WINDOW,
  UNKNOWN,
}

let seat = SeatChoice4.AISLE;

//Enums with computed values
enum SeatChoice5 {
  AISLE = "aisle",
  MIDDLE = 20,
  WINDOW = MIDDLE + 1,
  UNKNOWN = "unknown",
}

let seat2 = SeatChoice5.WINDOW;
console.log(seat2); // 21
