// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.
// Return value should be a string.

function formatDate(date) {
  return date.split('/').reverse().join('');
}

// Alternative solution:
// const formatDate = date => {
//   const [m, d, y] = date.split('/');
//   return y + d + m;
// }

console.log(formatDate("11/12/2019")) // "20191211"
console.log(formatDate("12/31/2019")) // "20193112"
console.log(formatDate("01/15/2019")) // "20191501"