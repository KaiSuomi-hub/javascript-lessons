/* eslint-disable no-extra-semi */
/* eslint-disable indent */
const str1 = "Askarrella";
const str2 = "Paskarrella";

const str_sum = str1 + str2;
console.log(str_sum);

const str1len = str1.length;
const str2len = str2.length;
console.log(str1len);
console.log(str2len);

const str_avg = (str1len + str2len) / 2;
console.log(str_avg);

// Seperate if statements for each string
if (str1len < str_avg) {
    console.log(str1);
}
if (str2len < str_avg) {
    console.log(str2);
}
if (str_sum.length < str_avg) {
    console.log(str_sum);
}