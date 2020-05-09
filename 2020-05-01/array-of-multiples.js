// https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

// Create a function that takes two numbers as arguments (num, length)
// and returns an array of multiples of num up to length.
// Notice that num is also included in the returned array.

// Using a for loop
function arrayOfMultiples(num, length) {
  let array = [num];

  for (let i = 1; i < length; i += 1) {
    array.push(array[i - 1] + num);
  }

  return array;
}

// Alternative solution:
// const arrayOfMultiples = (num, length) => {
// 	return Array.from({length: length}, (_, i) => num * (i + 1));
// }

console.log(arrayOfMultiples(7, 5)) // [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)) // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)) // [17, 34, 51, 68, 85, 102]