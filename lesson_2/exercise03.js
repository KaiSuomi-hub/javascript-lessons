console.log('\x1b[31m%s\x1b[0m', 'Strings!');

str1 = 'hello';
str2 = ' world';
//! combinations
console.log(str1 + str2);
//! lengths
let lstr1 = str1.length;
let lstr2 = str2.length;
console.log(str1.length +' and '+ str2.length);
let lstr_sum = lstr1 + lstr2;
const str_avg = ((lstr1 + lstr2) / 2);
console.log('this is the average ' + str_avg);
// ! length check against mean value
if (str_avg < str1 && str_avg < str2) {
	console.log('There is a long string ');
} else if (str_avg > lstr1) {
	console.log(lstr1);
} else if (str_avg > lstr2) {
	console.log(lstr2);
} else if (str_avg > lstr_sum) {
	console.log(lstr_sum);
}
