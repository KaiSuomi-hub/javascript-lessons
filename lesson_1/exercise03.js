// Create variables for price and discount.
// Calculate and console.log discounted price.
console.log('');
console.log('\x1b[31m%s\x1b[0m', 'Price');  //red
let price = 100;
let discount = 0.5;
console.log("Price is " + price + " and the discount in percentage is " + discount*100 + " and the total is " + price * discount +" euros");
console.log('');
console.log('\x1b[31m%s\x1b[0m', 'Travel');
let speed = 100;
let distance = 245;
console.log("Travel time is " + distance / speed + " hours");
console.log('');
console.log('\x1b[31m%s\x1b[0m', 'Seconds in a year');
let days = 365;
let hours = 24;
let seconds = 60;
let syear = days * hours * seconds;
console.log(syear + ' seconds in a year');
console.log('');
console.log('\x1b[31m%s\x1b[0m', 'Surface area');
const side = process.argv[2];
console.log( Number(side)**2 + ' m2');
