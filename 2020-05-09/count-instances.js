// https://edabit.com/challenge/kbFhwaDyrd79JrgeB

// Create a function that takes two strings as arguments and returns the
// number of times the first string (the single character) is found in the
// second string. Your output must be case-sensitive (see second example).

function charCount(myChar, str) {
  return str.split('').filter(char => char === myChar).length;
}

console.log(charCount("a", "edabit")); // 1
console.log(charCount("c", "Chamber of secrets")); // 1
console.log(charCount("b", "big fat bubble")); // 4