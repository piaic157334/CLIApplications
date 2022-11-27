import inquirer from "inquirer";
const simpleCalculator = async () => {
  let values = await inquirer.prompt([
    {
      name: "question",
      message: "Enter the values you want to solve(e.g.: 6*9/3+4-2)",
    },
  ]);
  console.log(eval(values.question));
};

export { simpleCalculator };
