import net from "node:net";

const connectionList = [];

const server = net.createServer((socket) => {
  connectionList.push(socket);

  socket.on("data", (chunk) => {
    connectionList.forEach((_socket) => {
      if (socket.remotePort !== _socket.remotePort)
        _socket.write("We got new user: " + chunk.toString());
    });
  });

  socket.on("close", (hadError) => {
    if (hadError) {
      console.log("Client disconneted due to an error");
    }

    console.log("client disconnected");
  });

  socket.write("What is your name");

  process.stdin.on("data", (chunk) => {
    socket.write(chunk);
  });
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});
