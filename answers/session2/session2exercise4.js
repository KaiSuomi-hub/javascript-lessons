// Input from console
const inputString = process.argv[2];

// Trim empty spaces
const trimmedString  = inputString.trim();

// Separate string's first letter and lowercase it
const firstLetterToLower = trimmedString[0].toLowerCase();

// Sum the lowercase letter and rest of the original string
const loweredString = firstLetterToLower + trimmedString.substring(1);

// If a constant value is repeated (here twice), it is often a very good idea to assign it to a variable.
// This makes the code more readable and also potentially modifying the value much less cumbersome
const maxLen = 20;
// Conditional statement to get the first 20 letters if the string's length is greater than that
const finalString = (loweredString.length > maxLen) ? loweredString.substring(0, maxLen) : loweredString;

console.log(finalString);