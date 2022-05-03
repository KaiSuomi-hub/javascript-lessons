// 3.5.2022 Antti Suomi
// check this
let num = Number(process.argv[2]);
let num2 = 1;
let f = function (num) {
	if (num >=  1) {
		num2 = num * num2;
	return f(num - 1); // calling itself
	} else {
			console.log(num2); //stops calling itself
	}

}
tmp = f(num);

console.log(tmp); //
