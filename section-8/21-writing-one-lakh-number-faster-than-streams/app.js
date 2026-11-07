import fs from "fs";

console.time();
const fd = fs.openSync("numbers.txt", "w");

const buff = Buffer.allocUnsafe(10);

for (let i = 1; i <= 10; i++) {
  const btyeWriten = buff.write(`${i}, `);
  console.log(btyeWriten);
  // buffer.write(`${i}, `, "utf-8");
}

console.log(buff.toString());

// let string = "";
//  167.721ms
// for (let i = 1; i <= 100_000; i++) {
// string += `${i}, `;
// fs.writeSync(fd, `${i}, `);
// }
// fs.writeSync(fd, string);
fs.closeSync(fd);
console.timeEnd();
