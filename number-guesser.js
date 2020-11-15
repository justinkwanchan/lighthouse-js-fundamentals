// Could not figure out how to add a newline between the prompt and the user input

// Chooses a random number between 0 and 999 inclusive
const randomNum = Math.floor(Math.random() * 1000);
const guessArray = new Array(randomNum);
let attempts = 0;

// Initializes the array of guesses to false
// Each index represents a possible number
for (let value of guessArray) {
  value = false;
}
let prompt = require("prompt-sync")();

let answer;
// console.log(`Random Num: ${randomNum}`); // Temporary
while (answer !== randomNum) {
  // Prompt user for input and assign to 'answer'
  answer = Number(prompt("Guess a number: "));
  console.log("");
  // Error message for non-numbers
  if (!Number.isInteger(answer)) {
    console.log('Not a number! Try again!\n');
    continue;
  }
  // Guessing an already guessed number does not increment 'attempts' count
  if (guessArray[answer]) {
    console.log('Already Guessed!\n');
    continue;
  }
  // Guess is too low
  if (answer < randomNum) {
    attempts++;
    guessArray[answer] = true;
    console.log('Too Low!\n');
    continue;
  }
  // Guess is too high
  if (answer > randomNum) {
    attempts++;
    guessArray[answer] = true;
    console.log('Too High!\n');
    continue;
  }
  break;
}
attempts++; // Successful attempt
console.log(`You got it! You took ${attempts} attempts!`);