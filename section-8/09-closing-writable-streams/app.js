import fs from "fs";

const writeStream = fs.createWriteStream("text.txt", { highWaterMark: 4 });

writeStream.on("open", (fd) => {
  console.log("Opned FD: ", fd);
});

writeStream.write("a");
writeStream.write("a");
writeStream.write("a");
writeStream.write("a");

writeStream.end("Writing something at last");

//! writeStream.end("Writing something at last"); //ERR_STREAM_WRITE_AFTER_END
//! writeStream.write("a"); //ERR_STREAM_WRITE_AFTER_END

writeStream.on("finish", () => {
  console.log("Finished");
});

writeStream.on("close", () => {
  console.log("Closed");
});
