//Antti Suomi 27.4
//  isPalindrome
let input = process.argv[2];
let arr = input.split("");
arr2 = [...arr].reverse(""); //... = array spreader Array.prototype.concat.
arr = JSON.stringify(arr); // can't compare arrays without the result being false
arr2 = JSON.stringify(arr2);

if (arr === arr2) {
    console.log("Palindrome detected!");
} else {
    console.log("Not a palindrome uwu ; _ ;");
}
