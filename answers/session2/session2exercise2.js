// Get year as a command line argument
const inputYear = process.argv[2];

// If no argument is given, use a static value
const year = (inputYear !== undefined) ? inputYear : 2020;

// Modulo operator % is an irreplacable tool in programming when working 
// with matters where something happens on regular intervals!
if (year % 100 === 0) {
    if (year % 400 === 0) {
        console.log(`Year ${year} is a leap year`);
    } else {
        console.log(`Year ${year} is not a leap year`);
    }
} else if (year % 4 === 0) {
    console.log(`Year ${year} is a leap year`);
} else {
    console.log(`Year ${year} is not a leap year`);
}
// Here I've a thing called template literal to insert the value of 'year'
// into the printable string. This will be covered in the next section
// of lectures, so look forward to it!