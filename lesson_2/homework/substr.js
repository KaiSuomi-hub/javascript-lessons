//drops off the last word
//Antti Suomi 26.4

let string = process.argv[2];
// check where the last space is
var idx = string.lastIndexOf(" ");
// print out from 0 to idx
console.log(string.substring(0, idx));
