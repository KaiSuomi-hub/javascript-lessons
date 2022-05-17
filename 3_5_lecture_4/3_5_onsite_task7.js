// 3.5.2022 Antti Suomi
// Create a program that generates 7 random numbers from 1
// to 40. Numbers must be unique.


let num = [];
const rand = () => Math.floor(Math.random() * (40 - 1 + 1)) + 1;
const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
const lotto = () => {
	for (let i = 1; i <= 7; i++) {
		num.push(rand());
	}
	// console.log(num);
	// if (findDuplicates(num) == findDuplicates(num)) {
	// 	console.log('ss');
	// }
	let test = findDuplicates(num);
	test = Number(test.join())
	// console.log(test);
	if (test !== 0) {
		console.log('dupes');
		num = [];
		i = 1;
		lotto();
	} else {
		console.log(num);
	}

}

lotto();