import fs from "node:fs/promises";

const filePath = process.argv[2];
const filteringWord = process.argv[3];

if (!filePath) {
  console.log("File path is needed.");
  process.exit(1);
}

const file1Content = await fs.readFile(filePath, "utf-8");
// const wordsArray = file1Content.split(" ");
const wordsArray = file1Content.split(/[\W]/).filter((word) => word);

const wordsCount = {};
// let i = 0;

// while (i <= wordsArray.length) {
//   const currentWord = wordsArray[i];
//   if (wordsCount[currentWord]) {
//     wordsCount[currentWord] += 1;
//   } else {
//     wordsCount[currentWord] = 1;
//   }
//   i++;
// }

if (filteringWord) {
  const filteredWords = wordsArray.filter(
    (word) => word.toLowerCase() === filteringWord.toLowerCase()
  );

  console.log({
    [filteringWord.toLowerCase()]: filteredWords.length,
  });
  process.exit(0);
}

wordsArray.forEach((word) => {
  if (word in wordsCount) {
    wordsCount[word] += 1;
  } else {
    wordsCount[word] = 1;
  }
});

console.log(wordsCount);
