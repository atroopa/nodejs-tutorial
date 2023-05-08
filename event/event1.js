console.clear();

const print = console.log;
import EventEmitter from 'events';

const emitter = new EventEmitter();

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


emitter.once("event3", () => {
    print("EVENT3");
});

emitter.emit("event3");