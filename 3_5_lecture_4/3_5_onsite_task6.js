// 3.5.2022 Antti Suomi
//join arrays
let arr0 = [1, 2, 3, 4];
let arr1 = [3, 4, 5, 6];
let join = arr0.concat(arr1);
let ss = [...new Set([...arr0 ,...arr1])];
console.log(ss);
