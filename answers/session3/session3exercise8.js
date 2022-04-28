const students = [
    {name: "markku", score: 99}, {name: "karoliina", score: 58},
    {name: "susanna", score: 69}, {name: "benjamin", score: 77},
    {name: "isak", score: 49}, {name: "liisa", score: 89},
];

let highestScore = {name: "", score: 0};
let lowestScore = {name: "", score: 0};
let sumOfScores = 0;
let avg = 0;

for (const student in students) {
    if (highestScore.score === 0) {
        // highestScore is an object of same "type" (all keys are same) as student,
        // so values can be assigned directly to it
        highestScore = students[student];
        lowestScore = students[student];
    } else if (students[student].score > highestScore.score) {
        highestScore = students[student];
    } else if (students[student].score < lowestScore.score) {
        lowestScore = students[student];
    }
    // Work on calculating the average score in the same loop
    sumOfScores += students[student].score;
}
avg = sumOfScores / students.length;

console.log(`Highest scorer is ${highestScore.name} with ${highestScore.score} points`);
console.log(`Lowest scorer is ${lowestScore.name} with ${lowestScore.score} points`);
console.log(`Average score was ${avg}`);

console.log("Students who scored higher than average are:");
for (const student in students) {
    if (students[student].score > avg) {
        console.log(students[student].name);
    }
}

// The if construct in this loop could easily be included in the earlier loop as well
for (const student in students) {
    const score = students[student].score;
    const name = students[student].name;
    if (score < 40) {
        console.log(`${name}'s grade with ${score} points is 1`);
    } else if (score >= 40 && score < 60) {
        console.log(`${name}'s grade with ${score} points is 2`);
    } else if (score >= 60 && score < 80) {
        console.log(`${name}'s grade with ${score} points is 3`);
    } else if (score >= 80 && score < 95) {
        console.log(`${name}'s grade with ${score} points is 4`);
    } else if (score >= 95) {
        console.log(`${name}'s grade with ${score} points is 5`);
    }
}