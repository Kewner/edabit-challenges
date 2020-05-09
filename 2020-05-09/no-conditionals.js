// Write a function that returns 0 if the input is 1, and returns 1 if
// the input is 0.

// Try completing this challenge without using any:
// Conditionals
// Ternary operators
// Negations
// Bit operators

function flip(y) {
  return y * -1 + 1;
}

console.log(flip(1)) // 0
console.log(flip(0)) // 1

// Alternatives:
function flip(y) {
	return 1-y;
}

//
function flip(y) {
	return [1,0][y];
}

//
function flip(y) {
	return Math.abs(y-1);
}