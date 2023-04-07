// Task
// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

function splitAndMerge(string, separator) {
    // split the string into words
    let words = string.split(' ');
    // split each word into characters and join them with the separator
    let newWords = words.map(word => word.split('').join(separator));
    // join all the words back into a sentence with spaces
    let newString = newWords.join(' ');
    return newString;
  }
  
  
  // make a function that accepts a string and seperator
  // spilt the string into words by spaces
  // split each word into seperate characters join them back with a seperator
  // join all words back into a sentence with spaces