# Number Guessing Game (CLI)

A simple command-line number guessing game built with Node.js. The game picks a random number between 1 and 100, and you have to guess it within a limited number of chances based on the difficulty you select.

## Features

- Three difficulty levels: Easy (10 chances), Medium (5 chances), Hard (3 chances)
- Random number generation between 1–100
- Feedback on whether your guess is too high or too low
- Tracks number of attempts and shows a win message on success
- Handles invalid input gracefully

## Requirements

- Node.js v18 or higher (for native ES module support)

## Installation

1. Clone or download this repository
2. Navigate to the project folder:
   ```bash
   cd number-guessing-game
   ```
3. No dependencies to install — this project only uses Node's built-in `readline` module.

> **Note:** This project uses ES modules (`import`/`export` syntax). Make sure your `package.json` includes:
> ```json
> {
>   "type": "module"
> }
> ```

## Usage

Run the game with:

```bash
node index.js
```

(Replace `index.js` with your actual filename if different.)

### How to Play

1. When prompted, choose a difficulty level:
   ```
   1. Easy (10 chances)
   2. Medium (5 chances)
   3. Hard (3 chances)
   ```
2. Enter your guess when prompted.
3. The game will tell you if your guess is too high or too low.
4. Keep guessing until you find the correct number or run out of chances.

### Example

```
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have to guess the correct number

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Select your choice: 2

Great! You have selected the Medium difficulty level.
Let's start the game!

Enter your guess: 50
Incorrect! The number is lower than 50.

Enter your guess: 25
Incorrect! The number is greater than 25.

Enter your guess: 37
Congratulations 🎉!! You guessed the correct number in 3 attempts!!
```

## Project Structure

```
.
├── index.js       # Main game logic
└── README.md
```

## Known Limitations / Possible Improvements

- Remaining chances aren't displayed after each guess
- No option to replay without restarting the script
- No input range validation (e.g., guessing 500 is accepted as a valid number, just incorrect)
- Could be extended with `process.argv` support for custom ranges or non-interactive difficulty selection

## License

MIT
