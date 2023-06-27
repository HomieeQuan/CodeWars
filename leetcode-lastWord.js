// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    // gets rid of spaces
    s = s.trim()

    let strings = 0
    for(let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ' ') {
      break;
      }
      strings++
    }

    return strings


  

};

