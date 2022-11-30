import chalk from "chalk";
import inquirer from "inquirer";
// Variable Declarations
type UserGuess = {
  userGuessedNumber?: number | string;
};
let userGuess: UserGuess = {},
  numberToBeGuessed: number = 0,
  numberToBeGuessedExtension: string,
  score: number = -1,
  stage: number = 0;
const askANumber = async () => {
  //   Logic to increase the difficulty level of the game
  numberToBeGuessedExtension = "1";
  for (let i = 0; i < stage; i++) {
    numberToBeGuessedExtension = numberToBeGuessedExtension.concat("0");
  }
  numberToBeGuessed = Math.random() * Number(numberToBeGuessedExtension);
  numberToBeGuessed = Number(numberToBeGuessed.toFixed());
  console.log("The number to be Guessed is 👉🏻👉🏻", numberToBeGuessed);
  // Asking user the number to be guessed
  do {
    userGuess = await inquirer.prompt([
      {
        name: "userGuessedNumber",
        type: "number",
        message: `Guess a number or write 'h' for hint :`,
      },
    ]);
  } while (isNaN(Number(userGuess.userGuessedNumber)));
};
//Logic to increase level and score if the user guesses the right number
do {
  stage++, score++;
  console.log(chalk.yellow("Stage: ", stage, "\t", "Score: ", score));
  await askANumber();
} while (userGuess?.userGuessedNumber === numberToBeGuessed);
