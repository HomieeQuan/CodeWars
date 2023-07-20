// Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.
// Note! a and b are not ordered!
// sum = 0
// if a > b
//   loop i from a down to b
//   add i to sum
// else
//   loop i from a up to b
//   add i to sum
// return sum

function getSum (a,b) {
    let sum = 0
  
    if(a > b) {
      for(let i = a; i >= b; i--) {
        console.log(i)
        sum += i
      }
    }else {     
      for(let i = a; i <= b; i++) {
        console.log(i)
        sum += i
      }
    }
    return sum
  }
  console.log(getSum(5,5))
  