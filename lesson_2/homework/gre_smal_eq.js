// antti suomi 24.4.
let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
let c = process.argv[4];

if (c !== "Hello World") {
	if (a === b) {
		console.log('A & B are equal');
	} else if (a > b) {
		console.log('A is greater');
	} else if (a < b) {
		console.log('B is greater');
	}
} else if (c === "Hello World") {
	if (a === b) {
		console.log('yay, you guessed the password');
	}
}
