import fs from "fs/promises";

const bufferContent = await fs.readFile("./hello.txt");

function bufferToString(buffer) {
  let content = "";
  content += buffer.map((el) => {
    console.log(String.fromCharCode(el));
    return el;
  });
  return content;
}

bufferToString(bufferContent);
