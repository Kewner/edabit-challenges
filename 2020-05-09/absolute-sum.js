// Take an array of integers (positive or negative or both) and return the sum
// of the absolute value of each element. The term "absolute value" means to
// remove any negative sign in front of a number, and to think of all numbers
// as positive (or zero).

// Using a for loop:

// function getAbsSum(arr) {
//   let absSum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     absSum += Math.abs(arr[i]);
//   }
//   return absSum;
// }

// Using the reduce method:
function getAbsSum(arr) {
  return arr.reduce((acc, cur) => acc + Math.abs(cur), 0);
}

console.log(getAbsSum([2, -1, 4, 8, 10])) // 25
console.log(getAbsSum([-3, -4, -10, -2, -3])) // 22
console.log(getAbsSum([2, 4, 6, 8, 10])) // 30
console.log(getAbsSum([-1])) // 1