import EventEmitter from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("abc", (x) => {
  console.log("Hello: ", x);
});

eventEmitter.once("x", () => {
  console.log("Fired once and then deleted");
});

eventEmitter.emit("abc", 10);
