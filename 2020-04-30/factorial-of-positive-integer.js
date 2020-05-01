// https://edabit.com/challenge/Ju7AK9rAGjz86hjxo

// Write a function that takes a positive integer and return its factorial.
// The factorial of 0 is 1.

function factorial(z) {
  let result = 1;

  for (let i = z; i > 0; i -= 1) {
    result = result * i;
  }

  return result;
}

console.log(factorial(4)) // 24
console.log(factorial(0)) // 1
console.log(factorial(9)) // 362880

// Alternative solution:
function factorial(z) {
	return z ? (z * factorial(z - 1)) : 1
}