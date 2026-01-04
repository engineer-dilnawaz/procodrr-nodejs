console.log("Thread 2");
for (let i = 0; i <= 100_000_000_00; i++) {
  if (i % 400_000_000 === 0) {
    console.log(i);
  }
}
