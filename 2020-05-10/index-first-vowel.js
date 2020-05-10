// Create a function that returns the index of the first vowel in a string.

// - Input will be single words.
// - Characters in words will be upper or lower case.
// - "y" is not considered a vowel.
// - Input always contains a vowel.

function firstVowel(str) {
  return str.search(/[aeiouAEIOU]/);
}

console.log(firstVowel("apple")) // 0
console.log(firstVowel("hello")) // 1
console.log(firstVowel("STRAWBERRY")) // 3
console.log(firstVowel("pInEaPPLe")) // 1

// Alternative solution:
const firstVowel = str => str.search(/[aeiou]/i);

// the /i modifier makes it a case insensitive search