import net from "node:net";

const server = net.createServer((socket) => {
  socket.on("data", (chunk) => {
    console.log(chunk.toString());
    socket.write("HTTP\n\nGot your message.");
    socket.end();
  });

  socket.on("error", () => {
    console.log("Client Lost: ");
  });

  socket.on("close", (hadError) => {
    if (hadError) {
      console.log("Client disconneted due to an error");
    }

    console.log("client disconnected");
  });

  console.log("Client connected");
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});
