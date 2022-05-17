//Create a program that takes in a string, and modifies the case
// to upper case or lower case, depending on the input
//Antti Suomi 26.4

let a = process.argv[2];
let b = process.argv[3];

if (a === 'u') {
	console.log(b.toUpperCase());
} else {
	console.log(b.toLowerCase());
}