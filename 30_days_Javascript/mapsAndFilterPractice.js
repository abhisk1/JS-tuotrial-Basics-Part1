/* map = Transforms each element and returns a new array */

var map = function (arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
};

function pushI(n, i) {
  return n + 1;
}

let store = map([1, 2, 3], pushI);
console.log(store);

// map returns same length of array as original array
// map returns a new array
// map does not mutate the original array or it does not change the original array



/* filter = Returns a new array with all elements that pass the test implemented by the provided function. */

var filter = function (arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

function filteredArr(n, i) {
  return n > 10;
}

let result = filter([0, 10, 20, 30], filteredArr);
console.log(result);

// filter returns a new array
// filter does not mutate the original array or it does not change the original array
// filter returns a new array with all elements that pass the test implemented by the provided function