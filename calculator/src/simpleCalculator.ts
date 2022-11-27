import inquirer from "inquirer";
import chalk from "chalk";
/**
 * It asks the user to enter a math problem, then it evaluates the problem and prints the answer.
 */
const simpleCalculator = async () => {
  let values = await inquirer.prompt([
    {
      name: "question",
      message: "Enter the values you want to solve(e.g.: 6*9/3+4-2)",
    },
  ]);
  console.log(
    chalk.white("Your answer is = "),
    chalk.bold.blue(eval(values.question))
  );
};

export { simpleCalculator };
