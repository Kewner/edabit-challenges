// Write a function that adds up a number with all lower numbers.

function addUp(num) {
  let result = 0;

  for (let i = num; i > 0; i -= 1) {
    result += i;
  }

  return result;
}

console.log(addUp(3));  // 6
console.log(addUp(4));  // 10
console.log(addUp(13)); // 91