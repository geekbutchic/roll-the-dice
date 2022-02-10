const getRandomNumber = require("./six-sided");
const prompt = require("prompt-sync")();

let choice = Number(prompt("Choose how many sides the dice should have: "));

console.log(getRandomNumber(choice));