//Antti Suomi 27.4
// Ordinal numbers
const competitors = ["Julia", "Mark", "Spencer", "Ann", "John", "Joe"];
const ordinals = ["st", "nd", "rd", "th"];

let compLength = competitors.length;
let msg = "";
let arrFix = "";

for (let j = 1; j <= compLength; j++) {
    arrFix = j - 1;
    if (j === 1) {
        msg = competitors[arrFix];
        msg2 = j + ordinals[arrFix];
        msg3 = `${msg2} competitor was ${msg}`;
    } else if (j === 2) {
        msg = competitors[arrFix];
        msg2 = j + ordinals[arrFix];
        msg3 = `${msg3}, ${msg2} competitor was ${msg}`;
    } else if (j === 3) {
        msg = competitors[arrFix];
        msg2 = j + ordinals[arrFix];
        msg3 = `${msg3}, ${msg2} competitor was ${msg}`;
    } else {
        msg = competitors[arrFix];
        msg2 = j + ordinals[3];
        msg3 = `${msg3}, ${msg2} competitor was ${msg}`;
    }
}
console.log(msg3);
