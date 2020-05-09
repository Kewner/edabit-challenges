// Given an array of scrabble tiles, create a function that outputs the
// maximum possible score a player can achieve by summing up the total number
// of points for all the tiles in their hand. Each hand contains 7 scrabble
// tiles.

// Here, each tile is represented as an object with two keys: tile andscore.

function maximumScore(tileHand) {
  let totalScore = 0;

  for (let i = 0; i < tileHand.length; i += 1) {
    totalScore += tileHand[i].score;
  }

  return totalScore;
}

console.log(maximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
])) // 28

console.log(maximumScore([
  { tile: "B", score: 2 },
  { tile: "V", score: 4 },
  { tile: "F", score: 4 },
  { tile: "U", score: 1 },
  { tile: "D", score: 2 },
  { tile: "O", score: 1 },
  { tile: "U", score: 1 }
])) // 15

// Alternative solution:
function maximumScore(tileHand) {
	return tileHand.reduce((p,c) => p + c.score, 0);
}

// p = accumulator (accumulates callback's return values)
// c = current value (c.score points to the score value)
// 0 = initialValue (accumulation starts at zero)

// So, in case of the second array:
// 0 + 2 returns 2, p becomes 2
// 2 + 4 returns 6, p becomes 6
// 6 + 4 returns 10, p becomes 10
// 10 + 1 returns 11, p becomes 11
// 11 + 2 returns 13, p becomes 13
// 13 + 1 returns 14, p becomes 14
// 14 + 1 returns 15, p becomes 15

// the reduce method returns 15, so the function returns 15.