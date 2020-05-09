// Create a function that takes an array of strings and returns an array,
// sorted from shortest to longest.

// All test cases contain arrays with strings of different lengths, so you
// won't have to deal with multiple strings of the same length.

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Google", "Apple", "Microsoft"]))
// ["Apple", "Google", "Microsoft"]

console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]))
// ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

console.log(sortByLength(["Turing", "Einstein", "Jung"]))
// ["Jung", "Turing", "Einstein"]

// (Possible) explanation of the compare function:

// ["Leonardo", "Michelangelo", "Raphael", "Donatello"]
// the sort function first compares 'Leonardo' to 'Michelangelo'
// a.length - b.length now means 8 - 9, which equals -1
// if compareFunction(a, b) returns < 0, it sorts a to an index lower than b

// ["Leonardo", "Michelangelo", "Raphael", "Donatello"]
// now the function compares 'Michelangelo' to 'Raphael'
// a.length - b.length now means 12 - 7, which equals 5
// if compareFunction(a, b) returns > 0, it sorts b to an index lower than a

// ["Leonardo", "Raphael", "Michelangelo", "Donatello"]
// now the function compares 'Michelangelo' to 'Donatello'
// a.length - b.length now means 12 - 9, which equals 3
// if compareFunction(a, b) returns > 0, it sorts b to an index lower than a

// ["Leonardo", "Raphael", "Donatello", "Michelangelo"]
// now the function returns to the start of the array:
// it compares 'Leonardo' to 'Raphael'

// etc..