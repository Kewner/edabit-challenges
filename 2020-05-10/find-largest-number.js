// Create a function that takes an array of arrays with numbers.
// Return a new (single) array with the largest numbers of each.
// Watch out for negative integers (numbers).

function findLargestNums(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i].sort((a, b) => a - b)[arr[i].length - 1]);
  }
  return result;
}

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])) // [7, 90, 2]
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])) // [-34, -2, 7]
console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])) // [0.7634, 9.32, 9]

// Alternative solution:
function findLargestNums(arr) {
  return arr.map(x => Math.max(...x));
}