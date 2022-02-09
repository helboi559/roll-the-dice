//input prompts user how many sides die should have
//output: simulates roll for die with that many sides
const prompt = require('prompt-sync')();

//get number of sided die question
const sides = Number(prompt('How many sides does your die have?: '))
const guess = Math.floor(Math.random()* sides) + 1

//log  question mult by random
console.log(`Your guess is ${guess}`)
