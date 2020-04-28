// Write a function that returns the largest number in an array.

let array = [1000, 1001, 857, 1];

array.sort(function(a, b) {
  return a - b;
});

console.log(array);

// How does this work?

let numbers = [4, 8, 2, 9, 1];

numbers.sort((a, b) => a - b);

console.log(numbers);

// if the function returns less than 0, a is sorted to an index lower than b.
// if the function returns 0, a and b are left unchanged to each other, but sorted
// with respect to all different elements.
// if the function returns greater than 0, b is sorted to an index lower than a.

[4, 8, 2, 9, 1] // compare 4 to 8:
[4, 8, 2, 9, 1] // compare 4 to 2:
[2, 4, 8, 9, 1] // compare 2 to 9:
[2, 4, 8, 9, 1] // compare 2 to 1:
[1, 2, 4, 8, 9] // sorted array