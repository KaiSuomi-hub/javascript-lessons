// ! we need this to get input, npm install
const prompt = require('prompt-sync')();

let a =  parseInt(prompt('Anna luku? '));
let b =  parseInt(prompt('Anna toinen luku? '));
// //** clean up string to number, int


console.log("Now we show the results for the sum, difference, fraction, product, modulo and exponent");

let sum = a + b;
let difference = a - b;
let fraction = a / b;
let product = a * b;
let modulo = a % b;
let exponent = a ** b;

console.log(sum, difference, fraction, product, modulo, exponent);
console.log(typeof (difference));


console.log("Now we show the average")
let average = sum / 2;
console.log(average);
