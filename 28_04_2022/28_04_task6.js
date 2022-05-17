//Antti Suomi 27.4
//  randomize array
const array = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32];
// console.log(Math.random());

array.sort(() => Math.random() - 0.5); //0.5 actually seems to shuffle well
console.log(array);