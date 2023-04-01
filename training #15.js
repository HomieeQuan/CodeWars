// Task
// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

// The first mission: let all elements in the array keep two decimal places(No need to convert number n).

// The second mission: Traversal arr, count the number of the element which smaller than n and return it.


function howManySmaller(arr, n) {
 
    const newArr = arr.map(num => Number(num.toFixed(2)));
    
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] < n) {
        count++;
      }
    }
    
    return count;
  }
  
  // arr is a decimal array
  // n is a decmal
  // let all elemenets in the array keep two deciaml places
  //loop arr and count the number of the element which are smaller than 