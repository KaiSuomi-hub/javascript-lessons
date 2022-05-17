//Antti Suomi 27.4
// ● Find the highest, lowest scoring person.
// ● Then find the average score of the students.
// ● Then print out only the students who scored higher than the average.
// ● Assign grades 1-5 for each student based on their scores like this:
// "1": "1-39",
//  "2": "40-59",
//  "3": "60-79",
//  "4": "80-94",
//  "5": "95-100"

const students = [
	{ name: "markku", score: 99 },
	{ name: "karoliina", score: 58 },
	{ name: "susanna", score: 69 },
	{ name: "benjamin", score: 77 },
	{ name: "isak", score: 49 },
	{ name: "liisa", score: 89 },
];

// const grades = [
// 	{ grade: "1", range: 1-39 },
// 	{ grade: "2",  range: 40..59},
// 	{ grade: "3",  range: 60..79 },
// 	{ grade: "4",  range: 80..94 },
// 	{ grade: "5",  range: 95..100 }
// ]

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

for (let i = 0; i < count; i++) {
	if (students[i].score > median) {
		console.log(`Higher than median scored by: ${students[i].name}`);
		//* check out how the name is different. you can use students[0].name to get the name
		//* instead of students[0][1]
	}
}



for (let i = 0; i < count; i++) {
	if (students[i].score < 39 ) {
		students.push(students[i].grade="1");
	} else if (students[i].score < 59 && students[i].score < 39 ) {

	}
}
console.log(students);