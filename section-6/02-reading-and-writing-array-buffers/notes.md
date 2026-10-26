📘 Reading and Writing to ArrayBuffers

📦 What is ArrayBuffer?
A fixed-length binary data buffer.
It does not provide methods to read or write data directly.
To access or modify the content, we use:
DataView
or TypedArray (like Uint8Array, Int32Array, etc.)

🛠 Creating an ArrayBuffer
const a = new ArrayBuffer(4);
// Creates a 4-byte buffer

🧪 Using DataView
const view = new DataView(a);
// DataView allows fine-grained control
You can use DataView to read/write different types (signed, unsigned, 16-bit, 32-bit, float, etc.)

✍️ Setting Values in the Buffer
We can use multiple ways to write the same value (80):
view.setInt8(0, 80); // Decimal
view.setInt8(1, 0b1010000); // Binary
view.setInt8(2, 0x50); // Hexadecimal
view.setInt8(3, 0o120); // Octal
All 4 ways set the value 80 in different bytes.

📥 Reading Values from the Buffer
const value = view.getInt8(1); // Reads the byte at index 1 as signed integer
console.log(value); // 80

➖ Negative Numbers
view.setInt8(0, -1); // Store -1 in first byte
view.getInt8(0); // -1
view.getUint8(0); // 255
getInt8() → reads as signed (interprets MSB as sign bit)
getUint8() → reads as unsigned
