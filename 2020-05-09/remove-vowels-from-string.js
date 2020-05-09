// https://edabit.com/challenge/DbLp2kHgwQbridSSy

// Create a function that takes a string and returns a new string with all
// vowels removed.

// My first solution:

// function removeVowels(string) {
//   let vowels = 'aeiouAEIOU';
//   let strArray = string.split('');
//   let newArray = [];

//   for (let i = 0; i < strArray.length; i += 1) {
//     if (!vowels.includes(strArray[i])) newArray.push(strArray[i])
//   }

//   return newArray.join('');
// }

// My second solution:
function removeVowels(string) {
  return string.split('').filter(char => !'aeiouAEIOU'.includes(char)).join('');
}

console.log(removeVowels("I have never seen a thin person drinking Diet Coke."));
// " hv nvr sn  thn prsn drnkng Dt Ck."

console.log(removeVowels("We're gonna build a wall!"));
// "W'r gnn bld  wll!"

console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"));
// "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"


// Alternative solution:
function removeVowels(str) {
  return str.replace(/[aeiou]/ig, '');
}