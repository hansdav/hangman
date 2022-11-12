const { WORDS_TO_GUESS } = require('./constants');
const constants = require('./constants');
// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require('prompt-sync')();

let spaces = [];
let usedLetters = [];
let rightGuess = 0;
let life = 5;

//creates an array with the answer split into each letter as an element//
const answer = WORDS_TO_GUESS[Math.floor(Math.random() * WORDS_TO_GUESS.length)]
  .toString()
  .split('');

//function for creating an array of underscore equal to the number of letters in the answer//
const underScore = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    spaces.push('_');
  }
};

//calls the underScore function with the randomly selected answer word//
underScore(answer);

//matching function
const matchFunc = () => {
  let guess = prompt('Please choose a letter!').toUpperCase();

  let correct = 0;
  let incorrect = 0;
  let invalid = 0;

  for (let i = 0; i < answer.length; i++) {
    if (guess === 'QUIT') {
      process.exit(0);
    } else if (
      guess.length != 1 ||
      guess === null ||
      guess === '' ||
      Number.isInteger(parseInt(guess.toString())) === true
    ) {
      console.log('That is not a valid answer. Please try again!');
      invalid++;
      break;
    } else if (guess === answer[i] && !usedLetters.includes(guess)) {
      correct++;
      spaces.splice(i, 1, guess);
    } else if (guess !== answer[i] && !usedLetters.includes(guess)) {
      incorrect++;
    }
  }

  //checks if there a guess is incorrect. the loop increments 'incorecct' by one every time there is no match, so if 'incorrect' equals the length, the guess was wrong//
  if (incorrect === answer.length) {
    life--;
    console.log(
      `Oops. That was not the right letter. You now have ${life} life remaining.`
    );
    usedLetters.push(guess);
    console.log(`You have so far guessed ${usedLetters}`);
  }

  //checks if a guess was correct with similar logic to above.//
  if (correct > 0) {
    usedLetters.push(guess);
    console.log(`Yes, ${guess} was correct!`);
    console.log(`You have so far guessed ${usedLetters}`);
    rightGuess += correct;
  }

  //checks if a guess was simply repeated. if the guess fails to trigger the two conditions, the guess must already be an element in the usedLetter array//
  if (correct === 0 && incorrect === 0 && invalid !== 1) {
    console.log('Hmmm. I think this letter has already been guessed.');
  }

  //functions for winning and losing//
  if (rightGuess === answer.length) {
    console.log('You win!');
  }

  if (life === 0) {
    console.log('GAME OVER');
    process.exit(0);
  }

  console.log(spaces);
};

while (rightGuess !== answer.length) {
  matchFunc();
}

// Here you see an example how to get your
// constants from constants.js
// for(let figure of constants.HANGMAN_PICS)
// {
//     console.log(figure);
// }
