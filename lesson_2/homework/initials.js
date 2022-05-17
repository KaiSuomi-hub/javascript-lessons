//Create a program that takes in 3 names and outputs only initial letters of those name separated with .
//Antti Suomi 26.4

let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];

a = a.substring(0,1);
b = b.substring(0,1);
c = c.substring(0,1);

console.log(a+"."+b+"."+c);
