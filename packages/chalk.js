console.clear();

const print = console.log;

import chalk from "chalk";

print(chalk.blue("Hello World"));
print(chalk.red("Hello World"));

print(chalk.blue("Hello ") + "world" + chalk.red("!"));

print(chalk.black.bgWhite(" omid to mitoni movafagh beshi ") + chalk.black.bgWhite.bold("MOTMAENAM ! "));

print(chalk.yellow(" Hello ") + chalk.yellowBright("World ! "));

print(`
    CPU: ${chalk.red("90%")}
    RAM: ${chalk.green("40%")}
    DISK: ${chalk.yellow("70%")}
`);

