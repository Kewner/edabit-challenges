// function takes 2 angles of a triangle, in degrees
// returns if the third angle is obtuse, acute or right

function missingAngle(angle1, angle2) {
  let twoAngles = 180 - (angle1 + angle2);

  if (twoAngles > 90) {
    return 'obtuse';
  } else if (twoAngles < 90) {
    return 'acute';
  } else {
    return 'right';
  }

  // A slower solution, performance-wise:
  // switch (true) {
  //   case (twoAngles > 90): return 'obtuse';
  //   case (twoAngles < 90): return 'acute';
  //   default: return 'right';
  // }
}

console.log(missingAngle(27, 59));
console.log(missingAngle(135, 11));
console.log(missingAngle(45, 45));