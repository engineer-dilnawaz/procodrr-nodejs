import { createReadStream, createWriteStream, read } from "node:fs";
import net from "node:net";

const clientsList = [];

let excludedClientPort = "";

const server = net.createServer((socket) => {
  clientsList.push(socket);
  console.log(clientsList.length);

  console.log(socket.remotePort, excludedClientPort);
  if (excludedClientPort === "") {
    excludedClientPort = socket.remotePort;
  }

  if (excludedClientPort !== socket.remotePort) {
    console.log("reading started");
    const readStream = createReadStream("r1.txt");
    readStream.pipe(socket);
  } else {
    const writeStream = createWriteStream("r1.txt");
    socket.pipe(writeStream);
  }

  socket.on("close", () => {
    console.log(socket.remoteAddress, ": Client disconnected");
  });

  socket.on("error", () => {
    console.log("Client Lost");
  });
  console.log("Client Connected", socket.remoteAddress);
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});
