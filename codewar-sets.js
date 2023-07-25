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
P: an array of numbers
R: return the average of numbers
E:  [1,1,1], => 1;
P: declare a variable sum, initialize to 0
    for each element 
*/
function findAverage(array) {
  
  let sum = 0
  
  for(let i = 0; i < array.length; i++) {
    sum += array[i]  
  }
  console.log(sum / array.length)
  
  return sum / array.length;
}


// ************************** //
// Set 2: String Manipulation

// Challenge 1: Remove Vowels
// Write a function that takes a string as input and returns the string with all vowels removed.
/*
P: string
R:  return string with vowels removed
E: "hello"     -->  "hll"
P: 

declare an array variable called arr, initialize arr to the characters inside of string
declare an empty array varibable called noVowels
for each element x in arr 
  if x is not a vowel
    push x into noVowels
return all the characters in novowels as a string
*/
function shortcut(string) {
  let result = [];
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (!vowels.includes(char)) {
      result.push(string[i]);
    }
  }
  
  return result.join('');
}

// Challenge 2: Reverse the Case
// Write a function that takes a string as input and returns the string with the case of each character reversed.
/*
P:str
R:return a string with the case of each character reversed
E: ("Hello, World!"));  // Output: "hELLO, wORLD!"
P:  Declare a variable to input a string
    loop through each character in the string
      if each character is equal to each other
        change it to a lowerCase or uppercase letter
    return the string
*/
function reverseCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }

  return result;
}

console.log(reverseCase('Hello World'));  

// Challenge 3: Count the Characters
// Write a function that takes a string as input and returns an object with each character as a key and its count as the value.
/*
P:
R:
E:
P:
*/

// Challenge 4: Capitalize First Letter
// Write a function that takes a string as input and returns the string with the first letter of each word capitalized.
/*
P: str
R: return the string with each first letter capitalized
E: ("hello world" => "Hello World");
P: declare a variable called arrwords use split method
      For each element in str loop through 
        have the loop check each first letter 
        capitalized each first letter
    return arrWords and use the join the method
        
*/

function capLetter(str) {
  let arrWords = str.split(' ');

  for (let i = 0; i < arrWords.length; i++) {
    let firstLetter = arrWords[i][0].toUpperCase();
    let finishWords = arrWords[i].slice(1);
    arrWords[i] = firstLetter + finishWords;
  }

  return arrWords.join(' ');
}
console.log(capLetter('hello world'))

// Challenge 5: Is Palindrome
// Write a function that takes a string as input and returns true if the string is a palindrome, and false otherwise.
/*
P:str
R:return a string if it is a palindrome
E:('racecar') => 'racecar' ('dog') => 'god'
P:  turn string into palindrome 
      use the split, reverse, join methods
        if the string is a palindrome return true
        else return false
*/
function reverseWord (str) {
  let palindrome = str.split('').reverse().join('')

  return str === palindrome
}
console.log(reverseWord('racecar'))
console.log(reverseWord('dog'))


// ************************** //
// Set 3: Math Operations

// Challenge 1: Simple Calculator
// Write a function that takes two numbers and a string representing a mathematical operator (+, -, *, /) and returns the result of the operation.
/*
P:
R:
E:
P:
*/
// Challenge 2: Factorial
// Write a function that takes a number as input and returns its factorial (the product of all positive integers less than or equal to the number).
/*
P:
R:
E:
P:
*/

// Challenge 3: Fibonacci Sequence
// Write a function that takes a number as input and returns an array containing the Fibonacci sequence up to that number of elements.
/*
P:
R:
E:
P:
*/
// Challenge 4: Prime Number Check
// Write a function that takes a number as input and returns true if the number is prime, and false otherwise.
/*
P:
R:
E:
P:
*/
// Challenge 5: Greatest Common Divisor
// Write a function that takes two numbers as input and returns their greatest common divisor (GCD).
/*
P:
R:
E:
P:
*/
// ************************** //
// Set 4: Sorting and Searching

// Challenge 1: Sort Numbers
// Write a function that takes an array of numbers as input and returns the array sorted in ascending order.
/*
P: nums
R: return an array of numbers in ascending order
E:[20, 2, 10]), [2,10,20]
P: sort the array of numbers
    return the array in ascending order
*/
function sortNumbers (n) {
  return n.sort((a,b) => a-b)
}
console.log(sortNumbers([8,2,6,4]))
// Challenge 2: Find the Smallest
// Write a function that takes an array of numbers as input and returns the smallest number in the array.
/*
P:int
R: return the smallest number in the array
E:[2,4,1,6] => 1
P: 
*/

function smallestNum (num) {
  return Math.min(...num)
}
console.log(smallestNum([3,6,4,8]))
// Challenge 3: Binary Search
// Write a function that takes a sorted array of numbers and a target number as input and returns the index of the target number in the array, or -1 if it is not found.
/*
P:
R:
E:
P:
*/
// Challenge 4: Remove Duplicates
// Write a function that takes an array of numbers as input and returns a new array with duplicate numbers removed.
/*
P:arr
R: return an array of numbers with duplicates removed
E:[1,1,2,3,4] => [1,2,3,4]
P: check each element in the array for duplicates
    if a duplicate is found remove it
      return array without duplicates
*/
function duplicateNum (arr) {
  let newArr = []

  for(let i = 0; i < arr.length; i++) {
    if(newArr.indexOf(arr[i]) === -1){
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(duplicateNum([1,1,2,3,4]))
// Challenge 5: Sort Characters in a String
// Write a function that takes a string as input and returns the string with its characters sorted in alphabetical order.
/*
P:arr
R: return an array strings in alphabet order
E: ['b','d','a'] => ['a','b','d']
P: sort the array
    return strings in order
*/
function alphabetArr (arr) {
  return arr.sort()
}
console.log(alphabetArr(['z','a','e','f']))
// ************************** //
// Set 5: Loops and Conditions

// Challenge 1: FizzBuzz
// Write a function that takes a number as input and returns "Fizz" if the number is divisible by 3, "Buzz" if it is divisible by 5, "FizzBuzz" if it is divisible by both 3 and 5, or the number itself otherwise.
/*
P:number
R: return 'fizz' if the number is divisible by 3 'buzz' if it is divisible by 5 and 'fizzBuzz' if it is divisible by 3 and 5
E:1,2,Fizz,4,Buzz,Fizz
P: return 'fizz' if the number is divisible by 3 'buzz' if it is divisible by 5 and 'fizzBuzz' if it is divisible by 3 and 5
*/
function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}
// Challenge 2: Factorial using Loop
// Write a function that takes a number as input and returns its factorial using a loop instead of recursion.
/*
P: num
R: return the factorial of num
E: 3! returns 1*2*3 = 6
P: 
  declare a variable called fact = 1
  loop i from 1 to num 
    fact *= i
  return fact 

*/
/*
i  i < num  num
1  true      3
2  true      3
3  false     3
*/

/*
i  i <= num  num
1  true      3
2  true      3
3  true      3
4  false     3
*/
function factorial(num) {
  let fact = 1

  for(let i = 1; i <= num; i++) {
    fact *= i
    console.log(i,fact)
  }
  return fact
}
console.log(factorial(10))
// Challenge 3: Sum of Multiples
// Write a function that takes a number as input and returns the sum of all the multiples of 3 or 5 below that number.
/*
P: num
R: return the sum if multiples of 3 or 5
E:
P:
    declare a variable 
*/
function sumMulti(num) {
  let sum = 0
  for(let i = 1; i < num; i++){
    if(i % 3 === 0 || i % 5 === 0) {
      console.log(i)
      sum += i
    }
  }
  return sum
}
console.log(sumMulti(20))
// Challenge 4: Count Characters in a String
// Write a function that takes a string as input and returns an object with each character as a key and its count as the value. Use a loop instead of array methods.
/*
P:
R:
E:
P:
*/

// Challenge 5: Count Digits in a Number
// Write a function that takes a number as input and returns the count of digits in that number using a loop.
/*
P:
R:
E:
P:
*/