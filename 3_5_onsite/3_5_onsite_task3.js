// 3.5.2022 Antti Suomi
let num = Number(process.argv[2]);
// let i = 1 ;
let g = 0;
let arr = [1];
const fact = (num) => {

	for (let i = 1; i <= num; i++) {
		num= num * (num - i);

	}
	// console.log((g));
		g = g + num;
		console.log((num));
		arr.push(num);
}
console.log(fact(num))

