import readline from "readline-sync";

let commandCounter = 0;
let mBotName = "defaultName";

/* COMMANDS */
const printHelp = () => {
    commandCounter += 1;
    console.log("-----------------------------");
    console.log("Here´s a list of commands that I can execute!");
    console.log("help: Opens this dialog.");
    console.log("hello: I will say hello to you");
    console.log("botInfo: I will introduce myself");
    console.log("botName: I will tell my name");
    console.log("botRename: You can rename me");
    console.log("forecast: I will forecast tomorrows weather 100% accurately");
    console.log("quit: Quits the program.");
    console.log("-----------------------------");
};

const sayHello = () => {
    console.log("What\"s your name?");
    const name = readline.question(">>> ");
    commandCounter += 1;
    if (name) {
        console.log(`Hello there, ${name}!`);
    } else {
        console.log("You did not tell me your name, but hello there anyways!");
    }
};

const botInfo = () => {
    commandCounter += 1;
    console.log(`I am a dum bot. You can ask me almost anything.\
You have asked me ${commandCounter} questions`);
};

const botName = () => {
    commandCounter += 1;
    console.log(`My name is currently ${mBotName}.\
If you want to change it type command botRename`);
};

const botRename = () => {
    commandCounter += 1;
    console.log("Type my new name, please.");
    const newName = readline.question(">>> ");

    const verifyName = () => {
        console.log(`Are you happy with the new name ${newName}`);
        const answer = readline.question("(y/n) ");
        if (answer === "yes" || answer === "y") {
            mBotName = newName;
            console.log(`I was renamed to ${newName}`);
            return;
        } else if (answer === "no" || answer === "n") {
            console.log("My name was not changed");
            return;
        } else {
            console.log("please type yes or no");
            verifyName();
        }
    };

    verifyName();
};

const forecast = () => {
    commandCounter += 1;
    console.log("Tomorrows weather will be... \n");
    console.log(`Temperature: ${Math.round(Math.random() * 60) - 25}`);
    console.log(`Cloudy: ${Math.round(Math.random()) ? true : false}`);
    console.log(`Sunny: ${Math.round(Math.random()) ? true : false}`);
    console.log(`Wind: ${Math.round(Math.random()) ? true : false}`);
};
/* COMMAND SELECTION */
const selectCommand = (input) => {
    if (input.toLowerCase() === "help") printHelp();
    else if (input.toLowerCase() === "hello") sayHello();
    else if (input.toLowerCase() === "botinfo") botInfo();
    else if (input.toLowerCase() === "botname") botName();
    else if (input.toLowerCase() === "botrename") botRename();
    else if (input.toLowerCase() === "forecast") forecast();
    else printHelp();
};

/* MAIN PROGRAM */
let running = true;
console.log("Welcome to a weird chatbot!");
while (running) {
    const input = readline.question(">> ");
    if (input === "quit") {
        running = false;
    } else {
        selectCommand(input);
    }
}
