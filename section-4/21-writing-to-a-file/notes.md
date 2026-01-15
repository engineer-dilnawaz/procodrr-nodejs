fs.writeFile(filePath, content)
It take filePath/filename and content to write as argument.
If file exist it clear all the content and write the new one.
If file does not exist it create a new and write the content in it.

fs.appendFile(filePath, content)
It works similar to writeFile() but instead of clearing the content and writing the new content,
it append the new content with the existing one.

Time Assignment:
import fs from "node:fs/promises";

setInterval(() => {
fs.writeFile("./time.txt", new Date().toLocaleTimeString());
}, 1000);

Example of error.log file for storing error.
