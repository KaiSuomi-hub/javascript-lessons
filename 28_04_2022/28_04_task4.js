//Antti Suomi 27.4
//  Range within
let input = process.argv[2];
let input2 = process.argv[3];
let msg = [];
if (input < input2) {

	for (let i = input; i <= input2; i++) {
		;
		// msg.push(+i); //unary operator fucks negative numbers
		msg.push(Number(i)); //unary operator

	}

}
else {
	for (let i = input2-1; i <= input; i++) {

		msg.push(Number(i));
		msg.reverse(); //doh, reverse the array
	}
}
	console.log(msg);
