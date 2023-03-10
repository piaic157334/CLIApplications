#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
//types defining for objects
interface User {
  username: string;
  pin: string;
  balance: number | undefined;
}
interface Amount {
  amount: number | string;
}
// dummy data and other variable initialization
let bankRecord: Array<User> = [
  { username: "ziaKhan", pin: "1234", balance: 122000000 },
  { username: "daniyalNagori", pin: "1234", balance: 14000000 },
  { username: "aliRazzaq", pin: "1234", balance: 1000000 },
  { username: "abuhurairah", pin: "1234", balance: 1270000000000000 },
  { username: "ahmadJajja", pin: "1234", balance: 17000000 },
  { username: "jawadAhmad", pin: "1234", balance: 187000000 },
];
let userInfo: User,
  user: User | undefined = { username: "", pin: "", balance: 0 },
  amountToBeWithDraw: Amount;
//   printing welcome message
console.log(
  "  ......  ...   ....  ...........  ......       .......     .......    .....       .....  ............  "
);
console.log(
  "  .....  .....  ..... ..........   .....      ..........   ..........  ......     ......  .......... "
);
console.log(
  "    ...  ......  ...  ...          ...       ....     ... ...      ... ......     ......  ...  "
);
console.log(
  "    ... ... ... ...   ........     ...      ....          ...      ... ... ...   ... ...  ......... "
);
console.log(
  "     .....  .....     ...          ...       .....     .. ...     ...  ...   .....   ...  ...  "
);
console.log(
  "     .....   .....    ..........   .......... ..........   ..........  ....  .....  ....  .......... "
);
console.log(
  "      ...     ...     ...........  ..........   ........    ........   ...... ...  .....  ........... \n"
);

//function to ask user info
const atm = async () => {
  do {
    userInfo = await inquirer.prompt([
      {
        name: "username",
        type: "input",
        message: "Enter your user ID: ",
      },
      {
        name: "pin",
        type: "password",
        message: "Enter your 4 digit pin: ",
      },
    ]);
  } while (userInfo?.pin.length !== 4 || userInfo?.username.length < 3);
  //   checking user's credentials if it is true or not
  if (bankRecord.find((data) => data.username === userInfo.username)) {
    if (bankRecord.find((data) => data.pin === userInfo.pin)) {
      user = bankRecord.find((data) => data.username === userInfo.username);
      console.log("Your account balance is", chalk.yellow(user?.balance));
      //   asking to how much money customer wants to with draw
      do {
        amountToBeWithDraw = await inquirer.prompt([
          {
            name: "amount",
            type: "number",
            message: "How much money you want to withdraw?",
          },
        ]);
      } while (isNaN(Number(amountToBeWithDraw?.amount)));
      //checking if the user has sufficient balance or not
      if (user?.balance) {
        if (user.balance >= Number(amountToBeWithDraw.amount)) {
          console.log(
            `The remaining amount is ${
              user.balance - Number(amountToBeWithDraw.amount)
            }`
          );
        } else {
          console.log(chalk.bgRed("You have in sufficient balance."));
        }
      }
    } else {
      console.log(chalk.red("You have entered your pin wrong.Please retry!"));
    }
  } else {
    console.log(chalk.red("You have entered wrong user name.Please retry!"));
  }
};

await atm();
