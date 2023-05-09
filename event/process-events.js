console.clear();

const print = console.log;

import process from 'process';
import EventEmitter from 'events';

process.on("beforExit", () => {
    print("beforExit");
});

process.on("exit", (code) => {
    print("Exit: "+ code);
});

//process.exit(4);

process.exitCode = 3;

process.on("uncaughtException", (err) => {
    print("uncaught: " + err.message);
});

