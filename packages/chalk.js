console.clear();

const print = console.log;

import chalk from "chalk";

print(chalk.blue("Hello World"));
print(chalk.red("Hello World"));

print(chalk.blue("Hello ") + "world" + chalk.red("!"));

print(chalk.black.bgWhite("omid to mitoni movafagh beshi"));