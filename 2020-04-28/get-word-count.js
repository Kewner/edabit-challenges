// Create a function that takes a string and returns the word count.
// The string will be a sentence.

function countWords(string) {
  return string.split(' ').length;
}

console.log(countWords("Just an example here move along")) // 6
console.log(countWords("This is a test")) // 4
console.log(countWords("What an easy task, right")) // 5