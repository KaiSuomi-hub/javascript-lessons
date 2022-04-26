// Print out the names ordered so that the longest name is first.
//Antti Suomi 26.4

let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];

let arr = [a, b, c];

//here we pass string's length method as the sorting's parameter
console.log(arr.sort((a, b) => b.length - a.length));
