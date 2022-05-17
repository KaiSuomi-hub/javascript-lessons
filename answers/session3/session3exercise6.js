const inputNum = process.argv[2];

console.log("for loop");
// Level 1
let forRow = "";
for (let i = 1; i <= inputNum; i++) {
    forRow += "&";
    console.log(forRow);
    // Empty the row string after each main loop
}
console.log("");

// Level 2
for (let i = 1; i <= inputNum; i++) {
    const fillNum = inputNum - i;
    let forFill = "";
    for (let j = 0; j < fillNum; j++) {
        forFill += " ";
    }
    // Better way:
    // const forFill = " ".repeat(fillNum);
    const forChars = "&" + "&".repeat(2 * (i - 1));
    console.log(forFill + forChars + forFill);
}

console.log("");
// Level 3
console.log("while loop");
let whileRow = "";
while (whileRow.length < inputNum) {
    whileRow += "&";
    console.log(whileRow);
}
console.log("");

let whileChars = "";
// Even in while loops, a running index is often very useful
let index = 1;
while (whileChars.length < 1 + 2 * (inputNum - 1)) {
    whileChars = "&" + "&".repeat(2 * (index - 1));
    let whileFill = "";
    while (whileFill.length < inputNum - index) {
        whileFill += " ";
    }
    console.log(whileFill + whileChars + whileFill);
    index++;
}