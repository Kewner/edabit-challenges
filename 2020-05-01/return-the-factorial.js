// Create a function that takes an integer and returns the factorial of
// that integer. That is, the integer multiplied by all positive lower
// integers. Assume all inputs are greater than or equal to 0.

// Non-recursively:
function factorial(int) {
  let result = 1;

  for (let i = int; i > 0; i -= 1) {
    result = result * i;
  }
  return result;
}

// Recursively:
function factorial(int) {
  if (int < 0) {
    return -1;
  } else if (int === 0) {
    return 1;
  } else {
    return (int * factorial(int - 1));
  }
}

// test case: 5
// 1st call returns 5 * factorial(4)
// 2nd call returns 4 * factorial(3)
// 3rd call returns 3 * factorial(2)
// 4th call returns 2 * factorial(1)
// 5th call returns 1 * factorial(0)
// 6th call (factorial(0)) returns 1

// The function exits with the total value:
// 5th call returns (5 * (5 - 1)) ; int = 5 * 4
// 4th call returns (20 * (4 - 1)) ; int = 20 * 3
// 3th call returns (60 * (3 - 1)) ; int = 60 * 2
// 2nd call returns (120 * (2 - 1)) ; int = 120 * 1
// 1st call returns (120) ; int = 120

// Alternative solution:
const factorial = num => num === 1 ? num : num * factorial(num - 1);

console.log(factorial(3)) // 6
console.log(factorial(5)) // 120
console.log(factorial(13)) // 6227020800

