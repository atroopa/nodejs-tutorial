console.clear();

const print = console.log;
import EventEmitter from 'events';

const emitter = new EventEmitter();

emitter.on("event1" , (...args) => {
    print(args);
});

emitter.emit("event1", 1,2,3,4);