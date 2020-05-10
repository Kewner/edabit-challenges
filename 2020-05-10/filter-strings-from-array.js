// Create a function that takes an array of non-negative integers and
// strings and return a new array without the strings.
// Zero is a non-negative integer.

function filterArray(arr) {
  return arr.filter(value => (typeof value !== 'string' || value === 0));
}

console.log(filterArray([1, 2, "a", "b"])) // [1, 2]
console.log(filterArray([1, "a", "b", 0, 15])) // [1, 0, 15]
console.log(filterArray([1, 2, "aasf", "1", "123", 123])) // [1, 2, 123]

// Alternative solution:
function filterArray(arr) {
  return arr.filter(n => typeof n === 'number');
}