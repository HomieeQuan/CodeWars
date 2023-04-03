// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  // Convert the number to a string and split it into an array of characters
  let arr = n.toString().split("");
  // Reverse the array and convert each character back to a number
  arr = arr.reverse().map(Number);
  return arr;
}


// return the digits of the array reversed



//most used answer
// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }
