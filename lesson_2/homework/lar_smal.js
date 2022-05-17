// 26.4.2022 Antti Suomi
// read three numbers, number_1, number_2 and number_3.
let number_1 = Number(process.argv[2]);
let number_2 = Number(process.argv[3]);
let number_3 = Number(process.argv[4]);
let arr = [number_1, number_2, number_3]
if (number_1 === number_2 && number_3 === number_2) {
	console.log('All are equal');
} else {
	arr.sort(function (a, b) { return a - b });
	// Check smallest
	switch(arr[0]) {
	case number_1:
		console.log('Number_1')
		break;
	case number_2:
		console.log('Number_2')
		break;
	default:
		console.log('Number_3')
	}
	console.log('Smallest ' + arr[0]);
	// Check largest
	switch(arr[2]) {
	case number_1:
		console.log('Number_1')
		break;
	case number_2:
		console.log('Number_2')
		break;
	default:
		console.log('Number_3')
	}
	console.log('Largest ' + arr[2]);

}
