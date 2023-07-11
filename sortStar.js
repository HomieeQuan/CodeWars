// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
  // Sort the array alphabetically
  s.sort();

  // Take the first string from the sorted array
  const firstString = s[0];

  // Convert the first string to an array of characters
  const characters = firstString.split('');

  // Join the characters with "***" in between
  const result = characters.join('***');

  return result;
}
