// ! we need this to get input, npm install
console.log('\x1b[31m%s\x1b[0m', 'Give a year to check if it is a leap year');
const prompt = require('prompt-sync')();

let a =  parseInt(prompt('Gib yr? '));

if ((a%4!==0 )||(a%100 && a%400!==0)) {
	console.log('it is a leap year');
} else {
	console.log('not a leap year');
}