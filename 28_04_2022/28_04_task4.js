//Antti Suomi 27.4
//  Range within
let input = process.argv[2];
let input2 = process.argv[3];
let msg = "";
if (input > input2) {
    for (let i = input; i <= input2; i++) {
        msg = msg + i + " ";
	}

}
	console.log(msg);
