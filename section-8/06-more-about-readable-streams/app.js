import fs from "fs";

const readStream = fs.createReadStream("chars.txt", {
  highWaterMark: 4,
  encoding: "utf-8",
  start: 3,
  end: 5,
  // autoClose: true,
});
readStream.setEncoding("utf-8");
readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.on("close", () => {
  console.log("Stream close");
});
