import fs from "fs";

const fd = fs.openSync("text.txt", "a+");

const writeSync = fs.writeSync(fd, "abc");

const buffer = Buffer.alloc(10);

const readSync = fs.readSync(fd, buffer, {
  offset: 0,
  length: writeSync,
  position: 0,
});

console.log(buffer.toString());
console.log({
  writeSync,
  readSync,
});

// fs.read(fd, (err, bytesRead, buffer) => {
//   console.log(err);
//   console.log(bytesRead);
//   console.log(buffer.toString());
// });
