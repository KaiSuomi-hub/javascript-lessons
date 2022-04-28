// Add 100
for (let i = 0; i <= 1000; i += 100) {
    console.log(i);
}
console.log("******");
/*
Alternatively:

let val = 0;
for (let i = 0; val <= 1000; i += 100) {
    console.log(val);
    val += 100;
}
*/

// Multiply by 2
for (let i = 1; i <= 128; i *= 2) {
    console.log(i);
}
console.log("******");

// Add 3
for (let i = 3; i <= 15; i += 3) {
    console.log(i);
}
console.log("******");

// Substract 1, note that < is flipped to >
for (let i = 9; i >= 0; i -= 1) {
    console.log(i);
}
console.log("******");

// Repeat each number thrice
let val = 1;
for (let i = 9; val <= 4; i++) {
    console.log(val);

    // Modulo is your best friend, when it comes to loops! Do not forget it!
    val = ((i + 1) % 3 === 0) ? val + 1 : val;
}
console.log("******");


// Repeat each set thrice
let set = 1;
for (let i = 0; set <= 3; i++) {
    console.log(i);

    if (i === 4) {
        // i = -1, because 1 is automatically added to it after this if block (at the end of the loop)
        i = -1;
        set++;
    }
}
console.log("******");