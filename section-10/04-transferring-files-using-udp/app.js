import dgram from "node:dgram"; //UDP
import { createWriteStream } from "node:fs";
// import { writeFile } from "node:fs/promises";

const socket = dgram.createSocket("udp4");

const writeStream = createWriteStream("server/numbers.txt");
socket.on("message", async (message, remoteAddress) => {
  if (message.toString() === "EOF") {
    socket.send(
      "File Uploaded Successfully on the Server",
      remoteAddress.port,
      remoteAddress.address,
    );
  } else {
    writeStream.write(message);
  }
});

// socket.on("message", (message, remoteAddress) => {
//   writeFile("server/numbers.txt", message);
//   console.log(remoteAddress);

//   socket.send(
//     "Message Received Successfully on Server.",
//     remoteAddress.port,
//     remoteAddress.address,
//   );
// });

socket.bind({ port: 4000 }, () => {
  console.log(socket.address());
  const address = socket.address();
  console.log(`Listening on port ${address.port}`);
});
