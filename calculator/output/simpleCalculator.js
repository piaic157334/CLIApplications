import inquirer from "inquirer";
import chalk from "chalk";
const simpleCalculator = async () => {
    let values = await inquirer.prompt([
        {
            name: "question",
            message: "Enter the values you want to solve(e.g.: 6*9/3+4-2)",
        },
    ]);
    console.log(chalk.white("Your answer is = "), chalk.bold.blue.underline(eval(values.question)));
};
export { simpleCalculator };
