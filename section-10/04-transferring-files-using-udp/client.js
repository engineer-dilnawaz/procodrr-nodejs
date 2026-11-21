import dgram from "node:dgram"; //UDP
import { createReadStream, statSync } from "node:fs";
// import { readFile } from "node:fs/promises";

const socket = dgram.createSocket("udp4");

const ipv4 = "192.168.0.153";
const filePath = "client/numbers.txt";

const { size: fileTotalSize } = statSync(filePath);

// socket.on("message", (message, remoteAddress) => {
//   console.log(message.toString());
//   console.log(remoteAddress);
//   socket.close();
// });

// const content = await readFile("client/numbers.txt", "utf-8");

// socket.send(content, 4000, ipv4);

const readStream = createReadStream(filePath, {
  highWaterMark: 1000,
});

let byteTransferred = 0;

readStream.on("data", (chunk) => {
  socket.send(chunk, 4000, ipv4, (error, btyes) => {
    if (error) {
      console.log("Oops! :", error);
    }
    byteTransferred += btyes;
    const percentage = ((byteTransferred / fileTotalSize) * 100).toFixed(1);
    console.log(`${percentage} %`);
  });
});

readStream.on("end", () => {
  socket.send("EOF", 4000, ipv4, () => {
    console.log("Message sent");
  });
});

socket.on("message", (meesage, remoteServer) => {
  console.log(meesage.toString());
});
