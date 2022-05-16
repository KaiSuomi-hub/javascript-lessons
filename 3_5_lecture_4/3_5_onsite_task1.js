// 3.5.2022 Antti Suomi
let string = process.argv[2];
let toUpper = (gg) => gg.charAt(0).toUpperCase() + gg.slice(1).toLowerCase();

console.log(toUpper(string));