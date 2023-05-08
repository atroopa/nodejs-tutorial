console.clear();

const print = console.log;

import EventEmitter from "events";
const emitter = new EventEmitter();

// this in  Event 1 =============================
emitter.on("event1", function() {
    print(this === emitter); // true
});

emitter.emit("event1");

// 