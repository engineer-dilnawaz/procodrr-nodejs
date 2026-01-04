here is explanation Behind the scenes, Node.js wraps your code in a hidden function(Module Wrapper Function).

This is done so that each file has its own private scope and doesn’t mess with other files. if your code is console.log("Hello, World!");

Module Wrapper Function wrap it like that :-

(function (exports, require, module, **filename, **dirname) {
console.log("Hello, World!");
});

here is explanation what happening inside wrapper funtion :-  
exports: Helps you share (export) variables or functions with other files.
require: Lets you bring (import) code from other files or modules.
module: Represents the current file/module. It also includes exports.

**filename: The full path of the current file.
**dirname: The full path of the folder containing the current file.
