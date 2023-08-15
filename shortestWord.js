// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  const words = s.split(' ')
  let shortestLength = words[0].length
  
  for(let i = 1; i < words.length; i++) {
    const length = words[i].length
    if(length < shortestLength){
      shortestLength = length
    }
  }
  return shortestLength
}