import fs from "node:fs";

console.time();

const writeStream = fs.createWriteStream("streamNumbers.txt", {
  encoding: "utf-8",
  // highWaterMark: 16,
});

// time taken:  6.315ms
// for (let i = 1; i <= 100_000; i++) {
//   writeStream.write(`${i}, `);
// }
// writeStream.end();
// writeStream.on("finish", () => {
//   console.timeEnd();
// });

// backpressure version

//time taken: 32.665ms
let i = 1;
let bufferHit = 0;
function writeNumbers() {
  while (i <= 100_000) {
    const canContinue = writeStream.write(`${i}, `);
    i++;

    if (!canContinue) {
      bufferHit++;
      // console.log(bufferHit, ": Buffer full. Waiting for drain...");

      writeStream.once("drain", writeNumbers);
      return;
    }
  }

  writeStream.end();
}

writeNumbers();
writeStream.on("finish", () => {
  console.log("Total Buffer hit: ", bufferHit);
  console.timeEnd();
});
