import inquirer from "inquirer";
import chalk from "chalk";
const logCalculator = async () => {
    let value = await inquirer.prompt([
        {
            name: "val",
            type: "number",
            message: "Enter the value to calculate the natural log function :",
        },
    ]);
    console.log(chalk.white("Your answer is = "), chalk.bold.blue(Math.log(value.val)));
};
export { logCalculator };
