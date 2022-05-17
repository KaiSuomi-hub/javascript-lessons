let myArgs = process.argv[2];
myArgs = myArgs.trim(); // remove spaces
myArgs = myArgs.substring(0, 19); // 20 characters
myArgs = myArgs.toLowerCase(); //first to lower case
console.log(myArgs);
