//Antti Suomi 27.4
let a = process.argv[2];

let teht = 1;
console.log('\x1b[31m%s\x1b[0m', teht);
teht = teht + 1;

let ind = 0;
let sum = 0;
let sum2 = 0;


while (ind <= a) {
	if (ind % 3 === 0 ) {
		sum2 = sum2 + ind;
	} else if (ind % 5 === 0) {
		sum2 = sum2 + ind;
	}
	ind = ind+1;
}
console.log(sum2);
