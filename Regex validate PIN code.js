// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


function validatePIN(pin) {
    // Check if the length of the PIN is either 4 or 6 digits
    if (pin.length === 4 || pin.length === 6) {
      // Iterate over each character of the PIN using a loop
      for (let i = 0; i < pin.length; i++) {
        // Check if the current character is a digit between 0 and 9
        if (pin[i] < '0' || pin[i] > '9') {
          // If it's not a digit, the PIN is invalid, so return false
          return false;
        }
      }
      // If all characters are digits, the PIN is valid, so return true
      return true;
    }
    // If the length is not 4 or 6 digits, the PIN is invalid, so return false
    return false;
  }

  





  // Needed serious help on this problem 