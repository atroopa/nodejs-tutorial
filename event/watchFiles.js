import fs from "fs";
import EventEmitter from 'events';

const print =console.log;

const watch = fs.watchFile("../1.json",{interval: 100} ,(curr, prev) => {
    // console.clear;

    // print(curr);
    // print(prev);
});

print(watch.eventNames());