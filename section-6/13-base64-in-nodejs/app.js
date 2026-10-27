import fs from "fs/promises";

//btoa() - binary to ascii
// const buffer = await fs.readFile("test.txt");

// const string = buffer.toString("base64");

//atob() - ascii to binary - when we convert into base64 the size of content increases by 8/6 * contentSize :- simplify it 4/3 * contentSize
// fs.writeFile("output.txt", string);

const buffer = await fs.readFile("image.png", "base64");

fs.writeFile("output.txt", buffer);

const imageBase64 = await fs.readFile("output.txt", "utf8");
fs.writeFile("generatedImage.png", imageBase64, "base64");
