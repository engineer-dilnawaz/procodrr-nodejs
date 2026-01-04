const fs = require("fs");
const { exec } = require("child_process");

// Writing into file
// fs.writeFileSync("./text.txt", "Hello World written from NodeJS Program");

// Reading File Content
// const text = fs.readFileSync("./text.txt");
// console.log(text.toString());

//Re-naming file
// fs.renameSync("./text.txt", "./hello.txt");

//Opening an application using node js
// exec("open -a Safari");

// Kill app
// exec("killall Safari"); //killall Safari → force close (immediate)

// Graceful close (recommended)
// exec(`osascript -e 'tell application "Safari" to quit'`); //AppleScript quit → normal close (saves state)s

// console.log(global); // equal to window in browser
// console.log(globalThis); // node js and browser js have introduced this common keyword for accessing global variables
console.log("End");
