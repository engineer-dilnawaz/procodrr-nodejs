// const a = new ArrayBuffer(4);
// const uint8Array = new uint8Array(a);

// const uint8Array = new Uint8Array(4);

// uint8Array[0] = 0xfe;
// uint8Array[1] = 0xee;
// uint8Array[2] = 0x3a;
// uint8Array[3] = 0x8a;

const uint8Array = new Uint8Array([0xfe, 0xee, 0, 0x8a]);

console.log(uint8Array.buffer);
