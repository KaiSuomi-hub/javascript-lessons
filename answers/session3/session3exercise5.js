// This task is used very commonly as a part of job interviews (live coding).
// It's meant to prove that the applicant has grasped the basics of programming.
// Remember this task well, as you never know when you might have to prove yourself!
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}