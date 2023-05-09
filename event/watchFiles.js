import fs from "fs";

const watch = fs.watchFile("1.json", (curr, prev) => {
    console.clear;
    const print =console.log;
    print(curr);
    print(prev);
});