// antti suomi 24.4.
let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
let c = String(process.argv[4]);

if (typeof c === 'string' && typeof b === 'number' && typeof a === 'number') {
	if (a === b && c === "s") {
		console.log('yay, you guessed the password');
	} else if (a === b) {
		console.log('they are equal');
	}




	// else if (a > b) {
	// 	console.log('A is greater');
	// } else if (a < b) {
	// 	console.log('B is greater');
	// }

	// console.log('a number is greater')

} else {
	console.log('string')
}