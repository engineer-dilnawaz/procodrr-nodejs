let time = 1;
console.log("This is basic Node timer which can be stopped via control+c");
setInterval(() => {
  console.log(time++);
}, 1000);
