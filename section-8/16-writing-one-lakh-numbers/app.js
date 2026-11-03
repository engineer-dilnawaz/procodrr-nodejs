import fs from "fs";

console.time();
// for (let i = 1; i <= 5000; i++) {
//   if (i === 1) {
//     fs.writeFile("numbers.txt", `${i}, `, (error) => {
//       if (error) {
//         console.log(error);
//       }
//     });
//   } else {
//     fs.appendFile("numbers.txt", `${i}, `, (error) => {
//       if (error) {
//         console.log(error);
//       }
//       if (i === 5000) {
//         console.timeEnd();
//       }
//     });
//   }
// }

//time taken: 100.299ms
for (let i = 1; i <= 100_000; i++) {
  if (i === 1) {
    fs.writeFileSync("numbers.txt", `${i}, `);
  } else {
    fs.appendFileSync("numbers.txt", `${i}, `);
  }
}
console.timeEnd();
// fs.appendFileSync("numbers.txt", `\n\n\ntime taken: ${console.timeEnd()}`);
