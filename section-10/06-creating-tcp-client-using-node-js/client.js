import net from "node:net";

const socket = net.createConnection({ host: "192.168.0.153", port: 4000 });

setTimeout(() => {
  socket.write("Hiii");
  socket.end();
}, 2000);

socket.on("error", (error) => {
  console.log("Server Lost: ", error);
});

socket.on("data", (chunk) => {
  console.log("Data received: ", chunk.toString());
});
