import fs from "fs";

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

// console.log(writeStream.writable);
// writeStream.end();
// console.log(writeStream.writable);

writeStream.cork();
writeStream.write("abv");
writeStream.write("abv");
writeStream.write("abv");
console.log(writeStream.writableCorked);

writeStream.uncork();
writeStream.end();

setTimeout(() => {
  console.log(writeStream.writableFinished);
}, 10);

// writeStream.destroy("Something went wrong");

// writeStream.on("error", (error) => {
//   console.log({ error });
// });
