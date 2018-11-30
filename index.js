var chalk = require("chalk");
var message = "Hello " + chalk.yellow("World");
var message2 = "Hello, " + chalk.bgMagenta.underline("what's your name?");
var message3 = "Nice" + chalk.bgRed("to ") + chalk.yellow("meet ") + chalk.bgBlue.green("you!");

console.log(message);
console.log(message2);
console.log(message3);