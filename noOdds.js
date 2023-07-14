function noOdds( values ){
  let nonOdds = []
  
  for(let i = 0; i < values.length; i++) {
    if(values[i] % 2 === 0){
      nonOdds.push(values[i])
    }
  }
  return nonOdds
}
// P: array of integers
// R: return an array of values that are not odd
// E: [0,1,2,3] ), [0,2],  [0,1] ), [0]
// P: 
/*
  create a empty array called nonOdds 
  For x in values 
    If x is not odd 
      push x into nonOdds
    End if 
  End loop
  return nonOdds
  
integer  integer % 2
5         1
6         0
7         1
8         0
     
*/
