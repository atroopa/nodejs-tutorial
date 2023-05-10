console.clear();

const print = console.log;

import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

print(process.env.NUMBER);

print(process.env.DB_USER);
print(process.env.DB_PASS);

print(chalk.yellow.inverse(process.env.COURSE));
print(chalk.red.inverse(process.env.FULLNAME));