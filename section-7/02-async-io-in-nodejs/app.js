import fsPromises from "fs/promises";
import fs from "fs";

// async io
const contentAsync = await fsPromises.readFile("file.txt", "utf8");

setTimeout(() => {
  console.log("Hello");
}, 0);

// sync io
const content = fs.readFileSync("file.txt", "utf-8");
console.log(content);
fs.readFile("file.txt", "utf-8", (error, data) => console.log(data));
