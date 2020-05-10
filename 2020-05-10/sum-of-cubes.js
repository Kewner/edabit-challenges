// Create a function that takes in an array of numbers and returns the sum of
// its cubes. If given an empty array, return 0.

function sumOfCubes(nums) {
  return nums.map(num => num ** 3).reduce((acc, cur) => acc + cur, 0);
  let arrayCubes = nums.map(num => num ** 3);
  return arrayCubes.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumOfCubes([1, 5, 9])) // 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log(sumOfCubes([3, 4, 5])) // 216
console.log(sumOfCubes([2])) // 8
console.log(sumOfCubes([])) // 0

// Alternative solution:
function sumOfCubes(nums) {
	return nums.reduce((p,c) => p + Math.pow(c, 3), 0);
}