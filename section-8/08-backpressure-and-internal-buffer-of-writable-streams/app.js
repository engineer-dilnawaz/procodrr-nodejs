import fs from "fs";

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

let i = 1;

write100As();

writeStream.on("drain", () => {
  write100As();
});

function write100As() {
  while (i <= 100) {
    let hasSpace = writeStream.write(`b`);
    i++;
    if (!hasSpace) {
      break;
    }
  }
}
