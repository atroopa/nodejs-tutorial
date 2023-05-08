console.clear();

const print = console.log;
import EventEmitter from 'events';

const emitter = new EventEmitter();


// Event 1 ,2 =========================================
emitter.on("event1" , (...args) => {
    print(args);
});

emitter.on("event1", args => {
    print("Done...");
});

emitter.on("event2", (arg1, arg2) => {
    print(arg1, arg2);
});

emitter.emit("event1", 1,2,3,4);
emitter.emit("event2", 'sag', 'kir khar');

//Event 3 =======================================
emitter.once("event3", () => {
    print("EVENT3");
});

emitter.emit("event3");
 
// Event Error ==========================================
emitter.on("error", () => {
    print("returned error here .. !");
});

emitter.emit("error");