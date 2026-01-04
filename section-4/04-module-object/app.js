const math = require("./math");

console.log(module);

// define gloable variable without gloable
// rember allways Function execute in gloable context.
Function("myGlobalVar = 123")();

/*
isPreloading via command: node --require preloading-file.js app.js
*/

module.exports = "app.js";
