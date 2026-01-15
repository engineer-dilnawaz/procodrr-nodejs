import fs from "node:fs/promises";

//1. Create if file is not existing
//2. Replace the content if file exists
//3. We can pass content text, buffer

// fs.writeFile("text-1.txt", "Hello World!!");

//1. Create if file is not existing
//2. append the content if file exists
//3. We can pass content text, buffer

// fs.appendFile("text-1.txt", "\nHow are you doing today?");

// /Users/dilnawazkhan/Desktop/Screenshot 2025-11-22 at 10.18.58 PM.png

// Task Read the content from text-1.txt and then write a file on desktop with read cotent from text-1.txt

// const fileContent = await fs.readFile(
//   "/Users/dilnawazkhan/Desktop/text-1.txt",
//   "utf-8"
// );
// if (fileContent) {
//   fs.writeFile("text-1.txt", fileContent);
// }

// Task read image file and place on desktop
// const imageFile = await fs.readFile("./image.png");
// console.log(imageFile);
// fs.appendFile("/.text-1.txt", imageFile);

// Task add time in text-1.txt file in format 12:20:33 am
// the time should be updating realtime
// setInterval(() => {
//   fs.writeFile("text-1.txt", new Date().toLocaleTimeString());
// }, 500);

// Task to log the errors in error.log and keep the details there with date and time
try {
  const imageFile = await fs.readFile("./imagse.png");
} catch (error) {
  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();
  fs.appendFile(
    "error.log",
    `Date:\n${currentDate} at ${currentTime}\n\nError Message:\n${
      error.message
    }\n\nError Stack:\n${error.stack}\n\n${"-".repeat(100)}\n\n`
  );
  console.log(error.message);
  console.log("Opps there is an error. Error is logged into ./error.log");
}
