// Create a function that takes a string and returns the number (count)
// of vowels contained within it.

// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.

function countVowels(str) {
  let counter = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i += 1) {
    if (vowels.includes(str[i])) counter += 1;
  }

  return counter;
}

console.log(countVowels("Celebration")) // 5
console.log(countVowels("Palm")) // 1
console.log(countVowels("Prediction")) // 4

// Alternative solution:
function countVowels(str) {
  return str.match(/[aeiou]/g).length;
}

// str.match(/[aeiou]/g) returns an array containing all vowels found in the string
// without /g it would return an array containing:
//    - the first vowel it encountered
//    - its index
//    - the input: the complete string