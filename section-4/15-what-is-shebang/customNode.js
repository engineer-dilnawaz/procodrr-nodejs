#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");

const filePath = process.argv[2];

if (!filePath) {
  console.error("❌ filepath is required to execute.");
  process.exit(1);
}

const absolutePath = path.resolve(process.cwd(), filePath);

spawn("node", [absolutePath], {
  stdio: "inherit",
});
