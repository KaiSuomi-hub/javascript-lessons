//Antti Suomi 27.4
let a = process.argv[2];

let teht = 1;
console.log('\x1b[31m%s\x1b[0m', teht);
teht = teht + 1;

let ind = 0;
let sum = 0;

while (ind <= a) {
	sum = sum + ind;
	ind = ind + 1;
}
console.log(sum);


console.log('\x1b[31m%s\x1b[0m', teht);
teht = teht + 1;

sum = 0;
for (let ind = 0; ind <= a; ind++) {
 sum = sum + ind;
}
console.log(sum);