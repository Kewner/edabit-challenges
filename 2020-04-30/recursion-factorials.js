// https://edabit.com/challenge/rgXMMHEmbh2MCKSrM

// Write a function that calculates the factorial of a number recursively.

// Non-recursively:
function factorial(n) {
  if (n === 0) return 1;
  let result = n;

  for (let i = n; i > 1; i -= 1) {
    result = result * (i - 1);
  }

  return result;
}

console.log(factorial(5)) // 120
console.log(factorial(3)) // 6
console.log(factorial(1)) // 1
console.log(factorial(0)) // 1

// Recursively:
function factorialRec(n) {
  let result = 1;

  if (n > 1) {
    result = n * factorialRec(n - 1);
  }

  return result;
}

console.log(factorialRec(5)) // 120
console.log(factorialRec(3)) // 6
console.log(factorialRec(1)) // 1
console.log(factorialRec(0)) // 1

// Alternative solution 1:
let factorial1 = n => n ? n * factorial1(--n) : 1;

// Alternative solution 2:
function factorial2(n) {
	if( n > 1 ) {
		return n * factorial2(n-1);
	}
	return 1;
}