import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  // res.setHeader("Content-Type", "text/txt");
  res.setHeader("Content-Type", "image/webp");

  const readFileHandle = await fs.open("river.webp");
  const readStream = readFileHandle.createReadStream({
    highWaterMark: 1024,
  });

  readStream.on("data", (chunk) => {
    res.write(chunk);
    readStream.pause();

    setInterval(() => {
      readStream.resume();
    }, 500);
  });

  readStream.on("end", () => {
    res.end();
  });
});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
});
