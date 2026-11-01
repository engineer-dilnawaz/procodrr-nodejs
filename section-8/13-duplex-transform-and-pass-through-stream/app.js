import fs from "fs";
import { pipeline } from "stream";

console.time();
const readStream = fs.createReadStream(
  "/Users/dilnawazkhan/Downloads/nature.mp4",
);

const writeStream = fs.createWriteStream("nature.mp4");

// readStream.pipe(writeStream);

// setTimeout(() => {
//   readStream.destroy('Something went wrong')
// }, 100);

// readStream.on('error', (error)=>{
//   console.log('Error: ', error)
// })

pipeline(readStream, writeStream, (error) => {
  console.log({ error });
});

readStream.on("end", () => {
  console.timeEnd();
});
