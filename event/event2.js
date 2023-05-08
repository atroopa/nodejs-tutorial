console.clear();

const print = console.log;

import EventEmitter from "events";
const emitter = new EventEmitter();

// this in  Event 1 =============================
emitter.on("event1", function() {
    print(this === emitter); // true
});

emitter.emit("event1");


// removeAllListeners Event 2  =======================================
emitter.on("event2", () => {
    print("Event 2");
});

emitter.emit("event2");

//emitter.removeAllListeners("event1");

emitter.emit("event1"); // not work !
emitter.emit("event2"); 

// Handler in event 1 =====================================
 const handler = () => {
    print("this is handler function");
 }

emitter.on("event1", handler);
emitter.emit("event1");

