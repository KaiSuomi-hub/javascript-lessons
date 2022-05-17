const arr = ["banaani", "omena", "mandariini", "appelsiini", "kurkku", "tomaatti", "peruna"];

console.log(arr[2], arr[4], arr.length);

arr.forEach(element => console.log(element));
console.log("*******");

arr.forEach(element => {
    if (element.includes("r")) {
        console.log(element);
    }
});
console.log("*******");

const sortedArr = arr.sort();
sortedArr.forEach(element => console.log(element));
console.log("*******");

// IMPORTANT: shift() method modifiest the ORIGINAL array while returning the first element
const firstElement = sortedArr.shift();
sortedArr.forEach(element => console.log(element));
console.log("*******");

sortedArr.push("sipuli");
sortedArr.forEach(element => console.log(element));
