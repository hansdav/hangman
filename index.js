const { WORDS_TO_GUESS } = require('./constants');
const constants = require('./constants');
// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require("prompt-sync")();

let spaces = [];
let usedLetters = [];
let rightGuess = 0;

//creates an array with the answer split into each letter as an element//
const answer = WORDS_TO_GUESS[Math.floor(Math.random() * 3)].toString().split('');

//function for creating an array of underscore equal to the number of letters in the answer//
const underScore = (arr) => {
 
  for (let i = 0; i < arr.length; i++) {
    spaces.push('_');
  }

  }

//calls the underScore function with the randomly selected answer word//
underScore(answer);

//matching function
const matchFunc = () => {

let guess = prompt('Please choose a letter!');

let correct = 0;
let incorrect = 0;

for (let i = 0; i < answer.length; i++) {
  if (guess === answer[i] && !usedLetters.includes(guess)) {
    correct++;
    spaces.splice(i,1,guess);
  } else if (guess !== answer[i] && !usedLetters.includes(guess)) {
    incorrect++;
  } else if (guess === 0) {
    process.exit(0);
  }

}

//checks if there are no matches//
if (incorrect === answer.length) {
  console.log('oops! no correct answers')
  usedLetters.push(guess);
  console.log(`You have so far guessed ${usedLetters}`)
}

//check if a guess was correct//
if (correct > 0) {
  usedLetters.push(guess);
  // console.log(usedLetters);
  console.log(`yes, ${guess} was correct!`);
  console.log(`You have so far guessed ${usedLetters}`)
  rightGuess += correct;
}

if (rightGuess === answer.length) {
  console.log('You win!')
}

console.log(spaces);
// console.log(rightGuess)

}

while (rightGuess !== answer.length) {
  matchFunc();
}

console.log(answer);

// Here you see an example how to get your
// constants from constants.js
// for(let figure of constants.HANGMAN_PICS)
// {
//     console.log(figure);
// }

