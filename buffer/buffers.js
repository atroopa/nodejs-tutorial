import {Buffer} from "buffer";

const print = console.log;

let buf1 = Buffer.from("abcd");
print(buf1);

buf1 = Buffer.from("abcd", "utf-8");
print(buf1);