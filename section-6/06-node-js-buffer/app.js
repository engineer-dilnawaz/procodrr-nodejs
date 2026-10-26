import { Buffer } from "node:buffer";

const nodeBuffer = Buffer.from([97, 98, 99, 100]);
const nodeBuffer2 = Buffer.alloc(4);
const nodeBuffer3 = Buffer.allocUnsafe(4);

console.log(nodeBuffer.buffer.byteLength);
console.log(nodeBuffer2.buffer.byteLength);
console.log(nodeBuffer3.buffer.byteLength);
console.log("-----");
console.log(nodeBuffer.byteLength);
console.log(nodeBuffer2.byteLength);
console.log(nodeBuffer3.byteLength);
