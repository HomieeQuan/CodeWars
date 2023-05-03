// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

function sum (numbers) {
    let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
     if (typeof numbers[i] === 'number') {
       sum += numbers[i];
     }
   }
   return sum;
     
 };

// 1
      function sum(numbers){
        let sum = 0
        for(let i = 0; i < numbers.length; i++){
          if(typeof numbers[i] === 'number'){
            sum += numbers[i];
          }
        }
        return sum
      }
// 2
      function sum(numbers){
        let sum = 0
        for(let i = 0; i < numbers.length; i++){
          if(typeof numbers[i] === 'number'){
            sum += numbers[i]
          }
        }
        return sum
      }
// 3
      function sum(numbers){
        let sum = 0
        for(let i = 0; i < numbers.length; i++){
          if(typeof numbers[i] === 'number'){
            sum += numbers[i]
          }
        }
        return sum
      }
// 4
      function sum(numbers){
        let sum = 0
        for(let i = 0; i < numbers.length; i++){
          if(typeof numbers[i] === 'number'){
            sum += numbers[i]
          }
        }
        return numbers
      }
// 5
      function sum(numbers){
        let sum = 0
        for(let i = 0; i < numbers.length; i++){
          if(typeof numbers[i] === 'number'){
            sum += numbers[i]
          }
        }
        return sum
      }
// 6
      function sum(numbers){
        let sum = 0
        for(let i = 0; i < numbers.length; i++){
          if(typeof numbers[i] === 'number'){
            sum += numbers[i]
          }
        }
        return sum
      }
// 7
      function sum(numbers){
        let sum = 0
        for(let i = 0; i < numbers.length; i++){
          if(typeof numbers[i] === 'number'){
           sum += numbers[i]
        }
      }
      return sum
    } 
// 8
    function sum(numbers){
      let sum = 0
      for(let i = 0; i < numbers.length; i++){
        if(typeof numbers[i] === 'number'){
          sum += numbers[i]
        }
      }
      return sum
    }
// 9
    function sum(numbers){
      let sum = 0
      for(let i = 0; i < numbers.length; i++){
        if(typeof numbers[i] === 'number'){
          sum += numbers[i]
        }
      }
      return sum
    }
    
// 10

    function sum(numbers){
      let sum = 0
      for(let i = 0; i < numbers.length; i++){
        if(typeof numbers[i] === 'number'){
          sum += numbers[i]
        }
      }
      return sum
    }