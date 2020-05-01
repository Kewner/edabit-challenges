// https://edabit.com/challenge/cWvYKp8JTE9ozC6NF

// Create a function that determines whether a string is a valid hex code.

// A hex code must begin with a pound key # and is exactly 6 characters in
// length. Each character must be a digit from 0-9 or an alphabetic character
// from A-F. All alphabetic characters may be uppercase or lowercase.

function isValidHexCode(str) {
  if (str[0] !== '#' || str.length !== 7) return false;

  let validChars = ['#', 'a', 'b', 'c', 'd', 'e', 'f',
                    '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < str.length; i += 1) {
    if (validChars.includes(str[i].toLowerCase()) === false) return false;
  }

  return true;
}

console.log(isValidHexCode("#CD5C5C")) // true
console.log(isValidHexCode("#EAECEE")) // true
console.log(isValidHexCode("#eaecee")) // true
console.log(isValidHexCode("#CD5C58C")) // false - Length exceeds 6
console.log(isValidHexCode("#CD5C5Z")) // false - Not all alphabetic characters in A-F
console.log(isValidHexCode("#CD5C&C")) // false - Contains unacceptable character
console.log(isValidHexCode("CD5C5C")) // false - Missing #

// Alternative solution:
function isValidHexCode(str) {
	return /^#(\d|[a-f]){6}$/i.test(str)
}