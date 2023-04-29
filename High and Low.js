// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers) {
    // Convert the input string to an array of numbers
    const numArray = numbers.split(" ").map(Number);
  
    // Find the highest and lowest numbers in the array
    const highest = Math.max(...numArray);
    const lowest = Math.min(...numArray);
  
    // Return the highest and lowest numbers as a string
    return `${highest} ${lowest}`;
  }