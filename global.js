
const print = console.log;

//print(global);

//global.setTimeout(() => print("hello"), 1000);

//setInterval(() => print("hello"), 1000);

print(process.versions);
print(process.platform);
print(process.arch);
print(process.pid);
print(process.cwd);
print(process.env.OLDPWD);
print(__dirname);
print(__filename);
print(process.argv);
//setInterval(() => print(process.pid), 2000);