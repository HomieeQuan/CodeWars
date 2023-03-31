// Task
// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

function colorOf(r, g, b) {
  // Convert each color component to a two-digit hexadecimal string
  let red = r.toString(16);
  let green = g.toString(16);
  let blue = b.toString(16);

  // Add a leading zero if the hexadecimal string has only one digit
  if (red.length === 1) {
    red = "0" + red;
  }
  if (green.length === 1) {
    green = "0" + green;
  }
  if (blue.length === 1) {
    blue = "0" + blue;
  }

  // Combine the hexadecimal strings into a web color code
  const colorCode = "#" + red + green + blue;

  // Return the web color code
  return colorCode;
}

