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

print(myURL.searchParams); // URLSearchParams { 'year' => '2017', 'month' => 'february' }
print(myURL.searchParams.get("year"));
print(myURL.searchParams.has("month"));
myURL.searchParams.append("day", "26");
print(myURL.searchParams);
print(myURL.search);
print(myURL.href); // Ahsant

