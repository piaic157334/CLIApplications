import inquirer from "inquirer";
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
            console.log(Math.sin((parseInt(angleInDegrees.angle) * Math.PI) / 180));
            break;
        default:
            break;
    }
};
export { trigonometricCalculator };
