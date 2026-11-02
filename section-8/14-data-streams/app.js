import { spawn } from "node:child_process";
import fs, { createWriteStream } from "node:fs";

// console.log(process.stdin);
// console.log(process.stdout);
// console.log(process.stderr);

// process.stdin.write("Hello\n");

// process.stdout.setEncoding("utf-8");

// process.stdout.on("data", (chunk) => {
//   console.log("Received: ", chunk);
// });

// const writeStream = fs.createWriteStream("output.txt");

// process.stdout.pipe(writeStream);

const childProcess = spawn("node", ["childApp.js"]);

const writeStream = createWriteStream("snap.mp4");

childProcess.stdout.pipe(writeStream);
