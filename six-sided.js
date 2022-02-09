const prompt = require("prompt-sync")();

const getRandomNumber = function (max) {
    const random = Math.random();
    const range = random * max;
    const result = Math.ceil(range)

    return result;
}

console.log((getRandomNumber(6)));

module.exports = getRandomNumber;