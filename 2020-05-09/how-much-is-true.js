// https://edabit.com/challenge/GLbuMfTtDWwDv2F73

// Create a function which returns the number of true values there are
// in an array. Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
  if (arr.length === 0) return 0;
  let counter = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i]) counter += 1;
  }

  return counter;
}

console.log(countTrue([true, false, false, true, false])) // 2
console.log(countTrue([false, false, false, false])) // 0
console.log(countTrue([])) // 0

// Alternative solution

const count_true = r => r.filter(Boolean).length

console.log(count_true([true, false, false, true, false])) // 2
console.log(count_true([false, false, false, false])) // 0
console.log(count_true([])) // 0