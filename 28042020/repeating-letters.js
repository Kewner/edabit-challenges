// Create a function that takes a string and returns a string in which each
// character is repeated once.

// All test cases contain valid strings. Don't worry about spaces, special
// characters or numbers. They're all considered valid characters.

// function doubleChar(str) {
//   let arr = str.split('');
//   let doubleArr = [];
  
//   for (let i = 0; i < arr.length; i += 1) {
//     doubleArr.push(arr[i] + arr[i]);
//   }

//   return doubleArr.join('');
// }

function doubleChar(str) {
  return str.split('').map(x => x + x).join('');
}

console.log(doubleChar("String")) // "SSttrriinngg"
console.log(doubleChar("Hello World!")) // "HHeelllloo  WWoorrlldd!!"
console.log(doubleChar("1234!_ ")) // "11223344!!__  "