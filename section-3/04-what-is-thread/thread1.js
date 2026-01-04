console.time();

console.log("Thread 1");
for (let i = 0; i <= 1000000000; i++) {
  if (i % 40000000 === 0) {
    console.log(i);
  }
}
console.timeEnd();
