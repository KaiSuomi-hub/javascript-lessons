//Antti Suomi 27.4

const arr = ["banaani", "omena", "mandariini", "appelsiini", "kurkku",
	"tomaatti", "peruna"];

console.log(arr);

let str = "r";
const found = arr.filter(v => v.includes(str));
// find returns only first and filter returns all

console.log(found);

let alp = arr.sort();

console.log(alp);
alp.shift();
//remove first
console.log(alp);

alp.push("sipuli");

console.log(alp);
