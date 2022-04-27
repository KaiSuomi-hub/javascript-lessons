//Antti Suomi 27.4
let a = process.argv[2];

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