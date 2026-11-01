import fs from "fs";

const reasStream = fs.createReadStream(
  "/Users/dilnawazkhan/Downloads/nature.mp4",
  {
    highWaterMark: 1 * 1024 * 1024,
  },
);

// const writeStream = fs.createWriteStream("text.txt");

// console.log(writeStream.writableHighWaterMark);

console.time();
const writeStream = fs.createWriteStream("nature.mp4");

reasStream.on("data", (chunkBuffer) => {
  const hasSpace = writeStream.write(chunkBuffer);
  if (!hasSpace) {
    reasStream.pause();
  }
});

writeStream.on("drain", () => {
  reasStream.resume();
});

reasStream.on("end", () => {
  console.timeEnd();
});
