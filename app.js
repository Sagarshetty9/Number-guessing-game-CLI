import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const target = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
let chance = 0;

const difficulty = {
  1: { label: "Easy", chances: 10 },
  2: { label: "Medium", chances: 5 },
  3: { label: "Hard", chances: 3 },
};

// Empty console logs to add empty lines.

console.log("\n");
console.log(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have to guess the correct number`);
console.log();

console.log(`Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)`);
console.log();

function difficulty0() {
  rl.question("Select your choice: ", (num) => {
    let selected = difficulty[Number(num)];

    if (!selected) {
      console.log("Please select a valid difficulty (1,2,3)");
    }

    console.log(
      `\nGreat! You have selected the ${selected.label} difficulty level.\nLet's start the game!\n`,
    );
    chance = selected.chances;
    return guessNum();
  });
}

function guessNum() {
  if (chance <= attempt) {
    console.log("You've ran out of chances");
    return rl.close();
  }

  rl.question("Enter your guess: ", (num) => {
    let guess = Number(num);
    attempt++;

    if (isNaN(guess)) {
      console.log(
        `Please enter a valid number.${chance - attempt} chances left`,
      );
      console.log();
      return guessNum();
    }

    if (guess > target) {
      console.log(
        `Incorrect! The number is lower than ${guess}. ${chance - attempt} chances left`,
      );
      console.log();
      return guessNum();
    }

    if (guess < target) {
      console.log(
        `Incorrect! The number is greater than ${guess}. ${chance - attempt} chances left`,
      );
      console.log();
      return guessNum();
    }

    if (guess === target) {
      console.log(
        `Congratulations 🎉!! You guessed the correct number in ${attempt} attempts!!`,
      );
      console.log();
      rl.close();
    }
  });
}

difficulty0();
