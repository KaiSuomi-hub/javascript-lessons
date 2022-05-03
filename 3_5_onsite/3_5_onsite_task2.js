// 3.5.2022 Antti Suomi
let lo = Number(process.argv[2]);
let hi = Number(process.argv[3]);

let rand = (lo, hi) => Math.floor(Math.random() * (hi-lo+1)) + lo;
// we subtract the lo from the hi and 1 so we multiply a 0.x random with the number
// i.e. 10 - 5 + 1 = 6 * 0.51 = 3.6
// then we floor it to 3
// and add lo + 3 = 8

console.log(rand(lo, hi));