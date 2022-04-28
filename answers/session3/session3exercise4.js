const inputNum = process.argv[2];

let forSum = 0;
for (let i = 1; i <= inputNum; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        forSum += i;
    }
}
console.log(`for loop sum: ${forSum}`);
console.log("*******");

let i = 1;
let whileSum = 0;
while (i <= inputNum) {
    if (i % 3 === 0 || i % 5 === 0) {
        whileSum += i;
    }
    i++;
}
console.log(`while loop sum: ${whileSum}`);
