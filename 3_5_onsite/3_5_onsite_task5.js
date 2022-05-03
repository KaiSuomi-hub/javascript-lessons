// 3.5.2022 Antti Suomi
// Exercise 5: find non-repeating character

function nonRep(string) {
    for (let i = 0; i < string.length; i++) {
		let c = string.charAt(i);
		// console.log(string.indexOf(c));
		// console.log(string.indexOf(c, i + 1));
		if (string.indexOf(c) == i  && string.indexOf(c, i + 1) == -1)
		{
            return c;
        }
    }
    return null;
}

var someString = 'aabbc';
console.log(nonRep(someString));
