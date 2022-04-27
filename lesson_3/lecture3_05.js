//Antti Suomi 27.4


let ind = 0;
let sum = 0;
let mod1 = ind % 3;
let mod2 = ind % 5;


while (ind <= 100) {
	if (ind % 3 === 0 && ind % 5 === 0) {
		console.log(ind + 'FizzBuzz');
	} else if (ind % 3 === 0) {
		console.log(ind + 'Fizz');
	}else if (ind % 5 === 0) {
		console.log(ind + 'Buzz');
	}
	ind = ind+1;
}
