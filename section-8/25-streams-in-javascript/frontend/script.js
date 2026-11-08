console.time();

const decoder = new TextDecoder();

const response = await fetch("http://localhost:4000/");
// const result = await response.text();
// console.log(result);

for await (const chunk of response.body) {
  console.log(decoder.decode(chunk));
}

console.timeEnd();
