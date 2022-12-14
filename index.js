const { WORDS_TO_GUESS, HANGMAN_PICS } = require("./constants");
// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require("prompt-sync")();

let usedLetters = [];
let rightGuess = 0;
let life = 6;
let figure = HANGMAN_PICS.reverse();
let diff = prompt(
  "Welcome to the Geo-Hangman! Please select the difficulty by typing 0 for normal, and 1 for hard."
);

// creates an array with the answer split into each letter as an element
let wordsInDiff = WORDS_TO_GUESS[parseInt(diff)];
let randomIdx = Math.floor(Math.random() * wordsInDiff.length);
let randomWord = wordsInDiff[randomIdx];
let answer = Array.from(randomWord);

// function for creating an array of underscore equal to the number of letters in the answer
const underScore = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push("_");
  }
  return result;
};

// calls the underScore function with the randomly selected answer word
let spaces = underScore(answer);

//hangman game function
function matchFunc() {
  console.log(diff);

  console.log(figure[life]);
  console.log(spaces);

  //variables act as counters that determine result of the letter after the guess exits the loop. these have to be within the function because they need to reset each time//
  let correct = 0;
  let incorrect = 0;
  let invalid = 0;

  let guess = prompt("Please choose a letter!").toUpperCase();
  if (guess === "QUIT") {
    process.exit(0);
  }
  if (!(guess.length === 1 && guess.toLowerCase() !== guess.toUpperCase())) {
    console.log("That is not a valid answer. Please try again!");
    invalid++;
    return;
  }

  /*
  the first if statement allows player to exit the game
  the second if statement was created to then prevent invalid responses - was put second so it prevents loop from happening
  correct and incorrect checks for validity and presence of letters in useLetters
  */
  for (let i = 0; i < answer.length; i++) {
    if (guess === answer[i] && !usedLetters.includes(guess)) {
      correct++;
      spaces.splice(i, 1, guess);
    } else if (guess !== answer[i] && !usedLetters.includes(guess)) {
      incorrect++;
    }
  }

  //checks if there a guess is incorrect. the loop increments 'incorecct' by one every time there is no match, so if 'incorrect' equals the length, the guess was wrong//
  let lifesToSubstract = diff === "0" ? 1 : 2;
  if (incorrect === answer.length) {
    life = life - lifesToSubstract;
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
    console.log("Hmmm. I think this letter has already been guessed.");
  }

  //functions for winning and losing based on rightGuess that increments by one and life that decreases by one in the above if statements//
  if (rightGuess === answer.length) {
    console.log(spaces);
    console.log(`That's right, it's ${answer.join("")}! You win!`);
  }

  if (life === 0) {
    console.log(figure[life]);
    console.log(spaces);
    console.log(`GAME OVER! The answer was ${answer.join("")}.`);
    process.exit(0);
  }
}

while (rightGuess !== answer.length) {
  matchFunc();
}

// Here you see an example how to get your
// constants from constants.js
// for(let figure of constants.HANGMAN_PICS)
// {
//     console.log(figure);
// }
