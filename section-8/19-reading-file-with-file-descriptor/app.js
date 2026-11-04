import fs from "fs";

const fd = fs.openSync("text.txt");
// console.log(fd);

const readBuffer = Buffer.alloc(10);

fs.read(
  fd,
  {
    buffer: readBuffer, // set the size of buffer by default its 16kb
    length: 3, // how many btyes read
    position: 1, // from where to start reading
    offset: 2, // how many slots skip
  },
  (err, bytesRead, buffData) => {
    console.log(err);
    console.log(bytesRead);
    console.log(buffData);
    console.log(buffData.toString());
    console.log(buffData.byteLength);
  },
);
