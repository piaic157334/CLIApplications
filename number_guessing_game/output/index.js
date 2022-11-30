import inquirer from "inquirer";
// Variable Declarations
let userGuess, numberToBeGuessed, numberToBeGuessedExtension = "1", score = -1, stage = 0;
//   Logic to increase the difficulty level of the game
for (let i = 0; i < stage; i++) {
    numberToBeGuessedExtension = numberToBeGuessedExtension.concat("0");
    console.log(numberToBeGuessedExtension);
}
numberToBeGuessed = Math.random() * parseInt(numberToBeGuessedExtension);
numberToBeGuessed = Number(numberToBeGuessed.toFixed());
const askANumber = async () => {
    userGuess = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: `Guess a number between `,
        },
    ]);
    console.log(userGuess);
};
do {
    stage++, score++;
    askANumber();
} while (userGuess === null || userGuess === void 0 ? void 0 : userGuess.userGuessedNumber);
