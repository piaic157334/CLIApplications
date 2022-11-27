import inquirer from "inquirer";
import chalk from "chalk";

const trigonometricCalculator = async () => {
  let operation = await inquirer.prompt([
    {
      name: "trigonometricOperation",
      type: "list",
      choices: [
        "sin(x)",
        "cos(x)",
        "tan(x)",
        "arcsin(x)",
        "arccos(x)",
        "arctan(x)",
      ],
    },
  ]);
  let angleInDegrees = await inquirer.prompt([
    {
      name: "angle",
      type: "number",
      message: "Enter the angle in degrees : ",
    },
  ]);
  switch (operation.trigonometricOperation) {
    case "sin(x)":
      console.log(
        chalk.white("Your answer is = "),
        chalk.blue.bold(
          Math.sin((parseInt(angleInDegrees.angle) * Math.PI) / 180)
        )
      );
      break;

    default:
      console.log("It seems you have entered an invalid angle.");

      break;
  }
};

export { trigonometricCalculator };
