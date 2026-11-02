import { createReadStream } from "node:fs";
import process from "node:process";

const readStream = createReadStream(
  "/Users/dilnawazkhan/Downloads/islamabad.mp4",
);

readStream.pipe(process.stdout);
