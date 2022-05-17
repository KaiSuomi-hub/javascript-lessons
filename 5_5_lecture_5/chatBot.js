//Antti Suomi 5.5.2022 Antti Suomi

import readline from "readline-sync"; //this works if packages.json contains type:module
// const readline = require("readline-sync");

const greeting ="> Hi! I am a dumb chat bot \n> You can check all the things I can do by typing 'help'.\n";
const answer = readline.question(greeting);
const help ="Here´s a list of commands that I can execute!\nhelp: Opens this dialog.\nhello: I will say hello to you\nbotInfo: I will introduce myself\nbotName: I will tell my name\nbotRename: You can rename me\nforecast: I will forecast tomorrows weather 100% accurately\nquit: Quits the program.";
const whatName = "What is your name?";

const username = readline.question(whatName);
const helloName = `Hello there ${username}`;

let running = true;
console.log(greeting);
while (running) {
	const command = readline.question(">>")
	if (command === 'quit') {
		running = false;
	} else {
		sel

	}
}
