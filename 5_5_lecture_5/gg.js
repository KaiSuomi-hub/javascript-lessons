import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const greeting =
    "> Hi! I am a dumb chat bot \n> You can check all the things I can do by typing 'help'.\n";

const help =
    "Here´s a list of commands that I can execute!\nhelp: Opens this dialog.\nhello: I will say hello to you\nbotInfo: I will introduce myself\nbotName: I will tell my name\nbotRename: You can rename me\nforecast: I will forecast tomorrows weather 100% accurately\nquit: Quits the program.";
// const answer = ">>");
let whatName = rl.question("What is your name?");

// let helloName = `Hello there ${whatName}`;

var recursiveAsyncReadLine = function () {
    console.log(greeting);

    rl.question(">>", function (line) {
        switch (line) {
            case "he":
                console.log(help);
                break;
            case "h":
				let whatName = "dd";
                break;
            case "bi":
                console.log("this is option 2");
                break;
            case "bn":
                console.log("this is option 2");
                break;
            case "br":
                console.log("this is option 2");
                break;
            case "f":
                console.log("this is option 2");
                break;
            case "q":
                return rl.close();
                break;
            default:
                console.log("No such option. Please enter another: ");
        }
        recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};

recursiveAsyncReadLine();
