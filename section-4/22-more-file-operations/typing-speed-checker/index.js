import { watch } from "node:fs";
import { readFile, appendFile } from "node:fs/promises";

let startTime = null;
let maxWords = 0;
let debouncerTime;

watch("text.txt", async (eventType) => {
  clearTimeout(debouncerTime);

  debouncerTime = setTimeout(handleTyping, 300);
  if (eventType !== "change") {
    return;
  }
});

async function handleTyping() {
  if (!startTime) startTime = Date.now();

  const content = await readFile("text.txt", "utf-8");
  const words = content.trim().split(/\s+/).filter(Boolean);
  const wordsLength = words.length;

  maxWords = Math.max(maxWords, wordsLength);

  const elapsedMinutes = (Date.now() - startTime) / 60_000;

  if (elapsedMinutes < 0.1) return;

  const wpm = Math.round(words.length / elapsedMinutes || 0);

  console.clear();
  console.log(`Words: ${wordsLength}`);
  console.log(`Time: ${elapsedMinutes.toFixed(2)} min`);
  console.log(`Speed: ${wpm} WPM`);
}

process.on("SIGINT", async () => {
  const elapsedMinutes = (Date.now() - startTime) / 60_000;
  const wpm = Math.round(maxWords / elapsedMinutes);

  await appendFile(
    "typingSpeedLog.log",
    `\nDate: ${new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "full",
    })}
Words: ${maxWords}
Time: ${elapsedMinutes.toFixed(2)} min
WPM: ${wpm}
-------------------------`
  );

  console.log("\nSession saved. Bye 👋");
  process.exit();
});
