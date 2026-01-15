import { watch } from "node:fs";
import {
  rename,
  copyFile,
  cp,
  unlink,
  rmdir,
  rm,
  writeFile,
  appendFile,
  mkdir,
  stat,
  constants,
  readFile,
} from "node:fs/promises";

// await rename("nodejs.png", "node-js.png");

// copy single file
// await copyFile("node-js.png", "node-jsCopied.png");

// copy directory content from source to destination
// cp("./src", "./destination", { recursive: true });

// move file and for moving we use rename
// rename("./src/node-jsCopied.png", "./destination/node-jsCopied1.png");

// Delete file
// unlink("./test.txt");
// rm("./test"); // can be used to delete a file

// Delete Directory
// Empty Directory
// rmdir("src");
// Not-empty directory
// rm("./destination", { recursive: true });

// create file
// writeFile("style.css", "");
// appendFile("style.css", "");

// create directory
// mkdir("build");

// stats
// const stats = await stat("src");
// console.log(stats);

// watch file
watch("text.txt", async (eventType, fileName) => {
  if (eventType === "change") {
    const content = await readFile("text.txt", "utf-8");
    console.log(content);
  }
  // console.log(eventType, fileName);
});
