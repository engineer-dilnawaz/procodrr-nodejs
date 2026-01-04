const fs = require("fs");
const path = require("path");

// console.log(process.chdir("./tmp"));
// console.log(process.cwd());

// const directoryPath = process.cwd();

// fs.readdir(directoryPath, (error, files) => {
//   if (error) {
//     return console.error("Unable to scan the directory.");
//   }

//   files.forEach((file) => {
//     console.log(file);
//   });
// });

// fs.readdir(directoryPath, { withFileTypes: true }, (error, entries) => {
//   if (error) {
//     return console.error("Unable to scan the directory.");
//   }

//   entries.forEach((entry) => {
//     if (entry.isDirectory()) {
//       console.log(`${entry.name} -> Directory`);

//     } else if (entry.isFile()) {
//       console.log(`${entry.name} -> File`);
//     }
//   });
// });

function walkDir(dir, indent = "", depth = 0, maxDepth = 5) {
  fs.readdir(dir, { withFileTypes: true }, (err, entries) => {
    if (err) return;

    for (const entry of entries) {
      if (depth > maxDepth) return;

      if (entry.isSymbolicLink()) return;

      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        console.log(`${indent}📁 ${entry.name}/`);
        walkDir(fullPath, indent + "  ", depth + 1, maxDepth);
      } else {
        console.log(`${indent}📄 ${entry.name}`);
      }
    }
  });
}
// try {
//   process.chdir("./next");
//   walkDir(process.cwd(), "", 0, 3);
// } catch (error) {
//   console.error(error.message);
// }

// console.log(
process.emitWarning("This is a custom warning message!", {
  code: "MY_WARNING_CODE",
  detail: "This is some additional warning detail.",
  type: "Custom type",
});
// );
// process.stdout.write("Hello, stdout!\n");
// process.stderr.write("Hello, stderr!\n");
process.on("warning", (warning) => {
  // Handle warning
  console.log("Warning: ", warning);
});
