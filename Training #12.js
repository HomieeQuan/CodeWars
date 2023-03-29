// Task
// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.


function giveMeFive(obj){
    //Create an array
    const arr=[]
    //loop the obj checking each key and value  FOR IN LOOP
    
    for (let key in obj){
      console.log(key)
      //If the length of the key is equal to to 5 push the the key to the array
      if(key.length === 5){
        arr.push(key)
      } 
       // If the length of the value is equal to to 5 push the the value to the array
      if(obj[key].length === 5){
        arr.push(obj[key])
      }
   
    }
    //return the array
    return arr
  }
  
  