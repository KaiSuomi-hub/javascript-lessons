//Antti Suomi 27.4
// Count sheeps
let inputNum = process.argv[2];
let log = '';
for (let i = 1; i <= inputNum; i++) {
	log = log + `${i} bottles of beer on the wall...`;
    }
console.log(log);