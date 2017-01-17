/* Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
will only return "Yes" if num is between 6 and 9 (6 and 9 included). The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

You should use the && operator once
You should only have one if statement
testLogicalAnd(0) should return "No"
testLogicalAnd(24) should return "No"
testLogicalAnd(25) should return "Yes"
testLogicalAnd(30) should return "Yes"
testLogicalAnd(50) should return "Yes"
testLogicalAnd(51) should return "No"
testLogicalAnd(75) should return "No"
testLogicalAnd(80) should return "No"

Code by Milica Sucevic
milicasucevic@gmail.com
https://www.freecodecamp.com/millie91

*/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(24);
