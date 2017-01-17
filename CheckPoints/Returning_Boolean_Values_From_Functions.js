/* You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

A common anti-pattern is to use an if/else statement to do a comparison and then return true/false:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
Since === returns true or false, we can return the result of the comparison:

function isEqual(a,b) {
  return a === b;
}

isLess(10,15) should return true
isLess(15,10) should return false
You should not use any if or else statements

Code by Milica Sucevic
milicasucevic@gmail.com
https://www.freecodecamp.com/millie91

*/

function isLess(a, b) {
  // Fix this code
  return a < b;
}

// Change these values to test
isLess(10, 15);
