// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'



function solution(str){
    let newStr = ''
    for(let i = str.length-1; i >= 0; i--){
      
      newStr += str[i]
      console.log(newStr)
    }
    return newStr
  }

//   similar answer function solution(str){
//   return str.split('').reverse().join('');  
// }