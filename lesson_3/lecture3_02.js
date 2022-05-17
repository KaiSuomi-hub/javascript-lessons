//Antti Suomi 27.4
let teht = 1;
console.log('\x1b[31m%s\x1b[0m', teht);
teht = teht + 1;
for (let ind = 0; ind <= 1001; ind = ind + 100) {
	console.log(ind);
}
console.log('\x1b[31m%s\x1b[0m', teht);
teht = teht + 1;
for (let ind = 1; ind <= 131; ind = ind * 2 ) {
	console.log(ind);
}
console.log('\x1b[31m%s\x1b[0m', teht);
teht = teht + 1;
for (let ind = 3; ind <= 16; ind = ind + 3 ) {
	console.log(ind);
}
console.log('\x1b[31m%s\x1b[0m', teht);
teht = teht + 1;
for (let ind = 10; ind >= 0; ind = ind-1 ) {
	console.log(ind);
}
console.log('\x1b[31m%s\x1b[0m', teht);
teht = teht + 1;
for (let ind = 1; ind <= 4; ind = ind + 1) {
	console.log(ind);
	console.log(ind);
	console.log(ind);
}
console.log('\x1b[31m%s\x1b[0m', teht);
teht = teht + 1;
for (let ind = 0; ind <= 3; ind = ind + 1) {
	for (let ind = 0; ind <= 4; ind = ind + 1) {
		console.log(ind);
	}
}