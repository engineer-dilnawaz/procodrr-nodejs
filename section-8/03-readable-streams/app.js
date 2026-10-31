// import fs from "fs/promises";
import fs from "fs";

// '/Users/dilnawazkhan/Downloads/nature.mp4'

// const fileContent = await fs.readFile("chars.txt");
console.time();
let i = 0;
// const fileContent = await fs.readFile(
//   "/Users/dilnawazkhan/Downloads/nature.mp4",
// );
// await fs.writeFile("nature.mp4", fileContent);

const readStream = fs.createReadStream(
  "/Users/dilnawazkhan/Downloads/nature.mp4",
  {
    highWaterMark: 1 * 1024 * 1024,
  },
);

readStream.on("data", (chunkBuffer) => {
  i++;
  fs.appendFileSync("nature.mp4", chunkBuffer);
});

// const readStream = fs.createReadStream("chars.txt", {
//   highWaterMark: 4,
// });

// readStream.on("data", (chunkBuffer) => {
//   ++i;
//   console.log(`${i}: ${chunkBuffer.byteLength}`);
// });

readStream.on("end", () => {
  console.log("number of iterations: ", i);
  console.timeEnd();
});

// console.log(fileContent.toString());
// console.log(fileContent.byteLength);
