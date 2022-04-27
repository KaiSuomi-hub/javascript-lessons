//Create variables balance , isActive , checkBalance
//Antti Suomi 26.4

let balance = 666;
let checkBalance = true;
let isActive = false;

if (checkBalance === true) {
	if (balance > 0 && isActive === true) {
		console.log('Balance: ' + balance);
	} else if (isActive === false) {
		console.log('"Your account is not active"');
	} else if (balance === 0) {
		console.log('Your account is empty');
	} else {
		console.log('Your account balance is negative');
	}
} else {
	console.log('Have a nice day!');
}