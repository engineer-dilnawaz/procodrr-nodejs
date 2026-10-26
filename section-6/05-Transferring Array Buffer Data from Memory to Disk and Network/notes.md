🚀 Transferring ArrayBuffer Data from Memory to Disk and Network
Binary data is not just meant to stay inside the memory (RAM) — we can store it into files or even send it over the internet 🌐.
Let’s see how we can:

💾 Write ArrayBuffer to Disk
✅ Using TypedArray:
import fs from "fs/promises";
// Create an 8-byte Uint8Array
const uint8Array = new Uint8Array(8);
// Storing text "ProCodrr" in hex
uint8Array[0] = 0x50; // P
uint8Array[1] = 0x72; // r
uint8Array[2] = 0x6f; // o
uint8Array[3] = 0x43; // C
uint8Array[4] = 0x6f; // o
uint8Array[5] = 0x64; // d
uint8Array[6] = 0x72; // r
uint8Array[7] = 0x72; // r
// Decode and check (Optional)
// const decoder = new TextDecoder("utf-8");
// console.log(decoder.decode(uint8Array));
// Output: ProCodrr
// Save to a file
fs.writeFile("buffer-text.txt", uint8Array);

✅ Using DataView:
const view = new DataView(uint8Array.buffer);
fs.writeFile("buffer-text.txt", view);
📝 Both methods will write the binary content of "ProCodrr" to buffer-text.txt.

🌐 Sending ArrayBuffer Over Network (Browser Access)
We can even send our binary data via HTTP and view it on a browser!
import http from "http";
// Create and fill ArrayBuffer data
const uint8Array = new Uint8Array(8);
uint8Array[0] = 0x50;
uint8Array[1] = 0x72;
uint8Array[2] = 0x6f;
uint8Array[3] = 0x43;
uint8Array[4] = 0x6f;
uint8Array[5] = 0x64;
uint8Array[6] = 0x72;
uint8Array[7] = 0x72;
startServer(uint8Array);
function startServer(responseData) {  
const server = http.createServer((req, res) => { res.setHeader("Content-Type", "text/plain; charset=utf-8");  
res.setHeader("Access-Control-Allow-Origin", "\*"); // Ignore favicon  
if (req.url === "/favicon.ico") {  
res.end();  
return;  
}  
// Send buffer data as HTTP response res.end(Buffer.from(responseData.buffer));  
});  
server.listen(3000, () => {  
console.log("Listening on http://localhost:3000"); });
}
🔍 Now visit: http://localhost:3000
📄 You’ll see the decoded text: ProCodrr
