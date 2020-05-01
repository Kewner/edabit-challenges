// https://edabit.com/challenge/Y8vbWzFb2GcyQ3hMm

// Given a number n, write a function that returns PI to n decimal places.

// n will not be above 15, to keep this challenge simple.
// Round up the last digit if the next digit in PI is greater or equal to 5.
// The return value must be a number, not a string.

function myPi(n) {
  let stringResult = Math.PI.toFixed(n);
  return Number.parseFloat(stringResult);
}

console.log(myPi(5)) // 3.14159
console.log(myPi(4)) // 3.1416
console.log(myPi(15)) // 3.141592653589793

// Alternative solution:
function myPi(n) {
	return Number(Math.PI.toFixed(n));
}