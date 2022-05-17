//Antti Suomi 27.4
// Index of alphabets
let input = process.argv[2];

const charIndex = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
	g: 7,
	h: 8,
	i: 9,
	j: 10,
	k: 11,
	l: 12,
	m: 13,
	n: 14,
	o: 15,
	p: 16,
	q: 17,
	r: 18,
	s: 19,
	t: 20,
	u: 21,
	v: 22,
	w: 23,
	x: 24,
	y: 25,
	z: 26
};
const arrayCharIndex = Object.entries(charIndex); //transform to array

let strL = input.length;

let textConverted = '';
for (let j = 0; j < strL; j++) {
	let ltr = input.charAt(j);
	let gg = Array.from(arrayCharIndex).find(element => element[0] === ltr);
	textConverted = gg[1] + textConverted;
}

console.log(textConverted);