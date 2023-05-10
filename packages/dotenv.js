console.clear();

const print = console.log;

import dotenv from "dotenv";
dotenv.config();

print(process.env.NUMBER);

print(process.env.DB_USER);
print(process.env.DB_PASS);

