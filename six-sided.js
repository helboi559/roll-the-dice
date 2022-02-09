//input: six-sided die
//output: logs random numbers between 1-6


const prompt = require('prompt-sync')();

//global is outside function
const randomNum = Math.floor(Math.random()*6) + 1

const guess = prompt('roll the die(type "roll"): ')

if (guess === 'roll' ) {
    console.log(`you rolled a ${randomNum}`)
}