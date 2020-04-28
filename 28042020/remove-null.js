// Create a function to remove all null values from an array.

function removeNull(array) {
  return array.filter(value => value !== null);
}

// Alternative solution:

// function removeNull(arr) {
// 	return arr.filter(Boolean);
// }

// Boolean is an object wrapper. This gets used behind the scenes in JavaScript
// all the time. Basically, you pass it a value and it returns true (a boolean
// primitive) if it’s a truthy value and false if it’s falsey.

console.log(removeNull(["a", null, "b", null])); // ["a", "b"]
console.log(removeNull([null, null, null, null, null])); // []
console.log(removeNull([7, 8, null, 9])); // [7, 8, 9]