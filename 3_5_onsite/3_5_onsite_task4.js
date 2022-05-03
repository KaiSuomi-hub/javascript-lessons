// 3.5.2022 Antti Suomi
// 1. create a new array with only the numbers that are divisible by three.
// 2. Create a new array from original array (arr), where each number is
// multiplied by 2
// 3. Sum all of the values in the array using the array method reduce
let teht = 1;
console.log('\x1b[31m%s\x1b[0m', 'task nr ' + teht + ':');
teht = teht + 1;

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
let divThree = arr.filter((three) => three%3==0);

console.log(divThree);
