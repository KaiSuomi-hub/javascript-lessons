const arr = [1, 4, 6, 32, 25, 16, 31, 15, 10, 2, 7];

let largest = arr[0];
// i = 1 is okay here, because there is no need to evaluate the 1st value
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(`Largest value: ${largest}`);
console.log("**********");
// Level 2

let largest2 = arr[0];
let secondLargest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest2) {
        // Previous largest value becomes 2nd largest before reassignment! 
        secondLargest = largest2;
        largest2 = arr[i];
    } else if (arr[i] > secondLargest) {
        secondLargest = arr[i];
    }
}

console.log(`Largest value: ${largest2}`);
console.log(`2nd largest value: ${secondLargest}`);