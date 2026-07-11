📦 What is ArrayBuffer?
ArrayBuffer represents a fixed-length binary buffer.
It is essentially an array of raw bytes.
Mainly used for handling binary data, especially in:
Web APIs (e.g., fetch, FileReader)
Low-level operations like streams, WebSockets, etc.

🧰 How to Create an ArrayBuffer

let buffer = new ArrayBuffer(16);  
// Creates 16 bytes (128 bits)
This creates a memory block with 16 bytes.
Initial content (in hex):
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00

📌 Key Properties
Property
Description
byteLength
Returns the total size (in bytes) of the buffer.
detached
(Internal slot) Indicates if buffer is detached.
maxByteLength
Only available for resizable ArrayBuffers.
resizable
Newer feature – allows buffer to grow/shrink.

⚠️ Not all engines support resizable and maxByteLength yet.
🧹 Memory Handling
ArrayBuffers are automatically garbage collected by JS when no longer referenced.
Efficient for handling binary files (images, audio, etc.).

📏 Limitations
Maximum size (browser): ~1.99 GiB (2^31 - 1 bytes)
