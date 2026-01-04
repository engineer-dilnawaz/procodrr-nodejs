// console.log(this) // cjs => points to module.exports
// console.log(this) // mjs => points to undefined

// console.log("root file running");

// import timer from "./timer.js";
// const timer = require("./timer.js");

// console.log("root file running");

const response = await fetch("https://jsonplaceholder.typicode.com/todos");
console.log(response);
