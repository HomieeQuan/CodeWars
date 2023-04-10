// Task
// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

function alienLanguage(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let lastLetter = word[word.length - 1].toLowerCase();
    let firstLetters = word.slice(0, word.length - 1).toUpperCase();
    result.push(firstLetters + lastLetter);
  }

  return result.join(" ");
}