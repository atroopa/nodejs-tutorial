console.clear();

const print = console.log;

import process from 'process';
import EventEmitter from 'events';

print(process instanceof EventEmitter);
print(process.constructor.name);
print(process.cwd());
print(process.chdir("/home/atroopa"));
print(process.cwd());

process.env.test = 33;
print(process.env.test);
