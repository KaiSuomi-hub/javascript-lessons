//Antti Suomi 27.4
// ● Find the highest, lowest scoring person.
// ● Then find the average score of the students.
// ● Then print out only the students who scored higher than the average.
// ● Assign grades 1-5 for each student based on their scores like this:

const students = [
	{ name: "markku", score: 99 },
	{ name: "karoliina", score: 58 },
	{ name: "susanna", score: 69 },
	{ name: "benjamin", score: 77 },
	{ name: "isak", score: 49 },
	{ name: "liisa", score: 89 },
];
let count = students.length;
let lowest = count-1;
let scores = 0;
students.sort((a, b) => b['score'] - a['score']);
console.log(`Highest score: ${students[0]['name']}`);
console.log(`Lowest score: ${students[lowest]['name']}`);


for (let i = 0; i < count; i++) {
	scores = scores + students[i].score;
}

let median = scores / count;

console.log(`Median score: ${median}`);
