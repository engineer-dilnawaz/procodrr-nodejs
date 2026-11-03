import fs from "node:fs";

console.time();

const writeStream = fs.createWriteStream("streamNumbers.txt", {
  encoding: "utf-8",
});

// time taken:  6.315ms
for (let i = 1; i <= 100_000; i++) {
  writeStream.write(`${i}, `);
}
writeStream.end();
writeStream.on("finish", () => {
  console.timeEnd();
});
