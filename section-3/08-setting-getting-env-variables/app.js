const fs = require("fs");

const content = fs.readFileSync("./.env").toString();

const splittingKey = content.includes("\r\n") ? "\r\n" : "\n";
// content.split(splittingKey).forEach((data) => {
content.split(/\r?\n/).forEach((data) => {
  const [key, value] = data.split("=");
  process.env[key] = value;
});
console.log(process.env);
