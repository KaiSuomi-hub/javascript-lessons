//Antti Suomi 27.4
const arr = [1, 4, 6, 32, 25, 16, 31, 15, 10, 2, 7];

for (let i = 1; i < arr.length; i++) //continue loop for until i equal arr amount
    for (let j = 0; j < i; j++) //continue loop for until j equal arr amount
        if (arr[i] < arr[j]) { // if
			// console.log(arr[i]);
			// console.log(arr[j]);
		let x = arr[i];
		arr[i] = arr[j];
		arr[j] = x;
	}
console.log(arr);