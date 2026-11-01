import fs from "fs";

console.time();
const readStream = fs.createReadStream(
  "/Users/dilnawazkhan/Downloads/nature.mp4",
);

const writeStream = fs.createWriteStream("nature.mp4");

// readStream.on("data", (chunkBuffer) => {
//   const hasSpace = writeStream.write(chunkBuffer);

//   if (!hasSpace) {
//     readStream.pause();
//   }
// });

// writeStream.on("drain", () => {
//   readStream.resume();
// });

// above can be reduced using pipe method like below
readStream.pipe(writeStream); // it does the same thing as above

// unpipe means stop the data transfer
// setTimeout(() => {
//   readStream.unpipe(writeStream);
// }, 100);

readStream.on("end", () => {
  console.timeEnd();
});
