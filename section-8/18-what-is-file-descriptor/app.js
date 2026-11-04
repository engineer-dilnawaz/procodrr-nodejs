import fs from "fs";

console.log(process.stdin.fd); //0
console.log(process.stdout.fd); //1
console.log(process.stderr.fd); //2

// fs.open("text.txt", (err, fd) => {
//   console.log(fd);
// });

// fs.open("numb.txt", (err, fd) => {
//   console.log(fd);
// });

// fs.open("package.json", (err, fd) => {
//   console.log(fd);
// });

const fd1 = fs.openSync("text.txt");
const fd2 = fs.openSync("numb.txt");
const fd3 = fs.openSync("package.json");

console.log({ fd1, fd2, fd3 });
