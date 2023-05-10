console.clear()

const print = console.log;

import {URL} from "url";

const myURL = new URL('https://user:pass@sub.example.com:8080/default.htm?year=2017&month=february#hash');

print(myURL.href, "\n");
print(myURL.hash);
print(myURL.host);
print(myURL.hostname);
print(myURL.port);
print(myURL.origin);
print(myURL.username);
print(myURL.password);
print(myURL.pathname);
print(myURL.protocol);
print(myURL.search);