import net from "node:net";

const server = net.createServer();

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});
// server.on("listening", () => {
//   console.log("Server started on port 4000");
// });

server.on("connection", (socket) => {
  socket.on("data", (chunk) => {
    console.log(chunk.toString());
    socket.write("HTTP\n\nGot your message.");
    socket.end();
  });

  socket.on("close", (hadError) => {
    if (hadError) {
      console.log("Client disconneted due to an error");
    }

    console.log(socket.remoteAddress, " client disconnected");
  });

  console.log(socket.address()); //server
  console.log({
    address: socket.remoteAddress,
    family: socket.remoteFamily,
    port: socket.remotePort,
  }); //client
  console.log("Client connected");
});
