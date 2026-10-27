const arrayBuffer = new ArrayBuffer(4);
const uintArray = new Uint8Array(arrayBuffer);

uintArray[0] = 100;
uintArray[1] = 98;
uintArray[2] = 99;
uintArray[3] = 100;

fetch(" http://localhost:3000", {
  method: "POST",
  body: uintArray,
});
