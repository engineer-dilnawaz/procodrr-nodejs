// import fs from "node:fs";

import fs from "node:fs/promises";

// readFileSync blocks main thread while reading a file and it should not be used to read a file
// this method is strictly prohibited until and unless there is a strong reason to

// const content = fs.readFileSync("./index.html", "utf-8");
// const content = contentBuffer.toString(); //since utf-8 is passed so it converts into string
// console.log(content);

// readFile is non-blockig method which runs file on different thread while ensuring main-thread
// is not blocked

// fs.readFile("./index.html", (err, data) => {
//   try {
//     if (err) {
//       throw new Error(err);
//     }
//     const content = data?.toString();
//     console.log(content);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

let i = 0;

setInterval(() => {
  console.log(i++);
}, 5);

const a = await fs.readFile("./test.txt");
console.log("Reading Done: ", a.toString().length);

console.log("End");
