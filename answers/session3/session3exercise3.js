const inputNum = process.argv[2];

let forSum = 0;
for (let i = 1; i <= inputNum; i++) {
    forSum += i;
}
console.log(`for loop sum: ${forSum}`);
console.log("*******");

let i = 1;
let whileSum = 0;
while (i <= inputNum) {
    whileSum += i;
    i++;
}
console.log(`while loop sum: ${whileSum}`);
