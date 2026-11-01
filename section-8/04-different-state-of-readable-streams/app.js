// import fs from "fs/promises";
import fs from "fs";

const readStream = fs.createReadStream("chars.txt", {
  highWaterMark: 4,
});

// readStream.on("data", (chunkBuffer) => {
//   fs.writeFileSync("abc.txt", chunkBuffer);
//   readStream.pause();
// });

//  writing in file should be shown
// readStream.on("data", (chunkBuffer) => {
//   fs.appendFileSync("abc.txt", chunkBuffer);
//   readStream.pause();
//   setTimeout(() => {
//     readStream.resume();
//   }, 500);
// });

// always clear content before appending

// readStream.on("open", (fd) => {
//   console.log(fd);
//   fs.writeFileSync("abc.txt", "");
// });

// let readCount = 0;

readStream.on("data", (chunkBuffer) => {
  // readCount++;
  // if (readCount === 1) {

  if (readStream.bytesRead === readStream.readableHighWaterMark) {
    fs.writeFileSync("abc.txt", chunkBuffer);
  } else {
    fs.appendFileSync("abc.txt", chunkBuffer);
  }
  readStream.pause();
  setTimeout(() => {
    readStream.resume();
  }, 100);
});

readStream.on("resume", () => {
  console.log("Stream resumed");
});

readStream.on("pause", () => {
  console.log("Stream paused");
});
