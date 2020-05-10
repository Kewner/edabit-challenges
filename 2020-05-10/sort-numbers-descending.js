// https://edabit.com/challenge/yaXQvCzAXJLe37Qie

// Create a function that takes any non-negative number as an argument
// and return it with it's digits in descending order. Descending order is
// when you sort from highest to lowest.
// You can expect non-negative numbers for all test cases.

function sortDescending(num) {
  return Number(num.toString().split('').sort().reverse().join(''));
}

console.log(sortDescending(123))// 321
console.log(sortDescending(1254859723)) // 9875543221
console.log(sortDescending(73065)) // 76530