// ************************** //
// Set 1: Array Manipulation

// Challenge 1: Remove First and Last Character
// Write a function that takes a string as input and returns the string without the first and last characters.

/*
P: str
R: return a string with the first and last character removed
E: 'apple', 'ppl'
P:  use the the method slice to remove the first and last character 
        str = 'hello' str.slice(1,-1) removes the fi
*/
function firstLast(str) {
    let newStr = str.slice(1, -1);
    return newStr;
  }
  
  console.log(firstLast('hello')); 

// Challenge 2: Find the Difference in Age
// Write a function that takes an array of ages (2 elements) and returns the difference between the maximum and minimum ages.
/*
P: ages
R: return the difference between maximum and minimum ages
E: [20,40] //output 20
P:  maxium age use Math.max
    minimum age use Math.min
        use spread syntax for ages
            return differnece between ages

*/
function ageDifference(ages) {
    let minAge = Math.min(...ages);
    let maxAge = Math.max(...ages);
    let difference = maxAge - minAge;
    return difference;
  }
  
  let ages = [20, 35];
  console.log(ageDifference(ages)); // Output: 15
  

// Challenge 3: Reversing Words in a String
// Write a function that takes a sentence as input and returns the sentence with the words reversed.
/*
P: str
R: return reverse string
E: 'hello' 'olleh'
P:  use the method split to split the characters
        use the reverse method to reverse the characters
            use the join method to join the characters back together to have a reverse sentence
*/
function reverseStr (str) {
    return str.split(' ').reverse().join(' ')
  }
  console.log(reverseStr('Hello what time is it'))
// Challenge 4: Count the Monkeys
// Write a function that takes a number as input and returns an array containing all numbers from 1 to that number.
/*
P:
R:
E:
P:
*/
function monkeyCount(n) {
let monkeys = []
    for(let i = 1; i <= n; i++){
        monkeys.push(i)
    }
      return monkeys
}

// Challenge 5: Find the Average
// Write a function that takes an array of numbers as input and returns the average of those numbers.
/*
P:
R:
E:
P:
*/



// ************************** //
// Set 2: String Manipulation

// Challenge 1: Remove Vowels
// Write a function that takes a string as input and returns the string with all vowels removed.

// Challenge 2: Reverse the Case
// Write a function that takes a string as input and returns the string with the case of each character reversed.

// Challenge 3: Count the Characters
// Write a function that takes a string as input and returns an object with each character as a key and its count as the value.

// Challenge 4: Capitalize First Letter
// Write a function that takes a string as input and returns the string with the first letter of each word capitalized.

// Challenge 5: Is Palindrome
// Write a function that takes a string as input and returns true if the string is a palindrome, and false otherwise.


// ************************** //
// Set 3: Math Operations

// Challenge 1: Simple Calculator
// Write a function that takes two numbers and a string representing a mathematical operator (+, -, *, /) and returns the result of the operation.

// Challenge 2: Factorial
// Write a function that takes a number as input and returns its factorial (the product of all positive integers less than or equal to the number).

// Challenge 3: Fibonacci Sequence
// Write a function that takes a number as input and returns an array containing the Fibonacci sequence up to that number of elements.

// Challenge 4: Prime Number Check
// Write a function that takes a number as input and returns true if the number is prime, and false otherwise.

// Challenge 5: Greatest Common Divisor
// Write a function that takes two numbers as input and returns their greatest common divisor (GCD).

// ************************** //
// Set 4: Sorting and Searching

// Challenge 1: Sort Numbers
// Write a function that takes an array of numbers as input and returns the array sorted in ascending order.

// Challenge 2: Find the Smallest
// Write a function that takes an array of numbers as input and returns the smallest number in the array.

// Challenge 3: Binary Search
// Write a function that takes a sorted array of numbers and a target number as input and returns the index of the target number in the array, or -1 if it is not found.

// Challenge 4: Remove Duplicates
// Write a function that takes an array of numbers as input and returns a new array with duplicate numbers removed.

// Challenge 5: Sort Characters in a String
// Write a function that takes a string as input and returns the string with its characters sorted in alphabetical order.

// ************************** //
// Set 5: Loops and Conditions

// Challenge 1: FizzBuzz
// Write a function that takes a number as input and returns "Fizz" if the number is divisible by 3, "Buzz" if it is divisible by 5, "FizzBuzz" if it is divisible by both 3 and 5, or the number itself otherwise.

// Challenge 2: Factorial using Loop
// Write a function that takes a number as input and returns its factorial using a loop instead of recursion.

// Challenge 3: Sum of Multiples
// Write a function that takes a number as input and returns the sum of all the multiples of 3 or 5 below that number.

// Challenge 4: Count Characters in a String
// Write a function that takes a string as input and returns an object with each character as a key and its count as the value. Use a loop instead of array methods.

// Challenge 5: Count Digits in a Number
// Write a function that takes a number as input and returns the count of digits in that number using a loop.