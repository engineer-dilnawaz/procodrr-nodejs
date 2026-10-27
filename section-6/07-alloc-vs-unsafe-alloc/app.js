import { Buffer } from "buffer";

console.log("Buffer.alloc");
console.time("Buffer.alloc");

for (let i = 0; i < 100_000; i++) {
  Buffer.alloc(1024);
}

console.timeEnd("Buffer.alloc");

console.log("Buffer.allocUnsafe");
console.time("Buffer.allocUnsafe");

for (let i = 0; i < 100_000; i++) {
  Buffer.allocUnsafe(1024);
}

console.timeEnd("Buffer.allocUnsafe");
