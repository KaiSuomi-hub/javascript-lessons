// 26.4.2022 Antti Suomi
//Replace characters
let fromThis = process.argv[2];
let toThis = process.argv[3];
let string = process.argv[4];

//here we create a new regexp object
let regObj = new RegExp(fromThis,"g");
//here we match the object
let result = string.replace(regObj, toThis);

console.log(result);