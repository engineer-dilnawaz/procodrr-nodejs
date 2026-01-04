#!/usr/bin/env node
//above method works on all systems
// #!/Users/dilnawazkhan/.nvm/versions/node/v24.5.0/bin/node full path but only runs in mac or linux

console.log("Hello app.js");

let num = 1;

const timer = setInterval(() => {
  if (num === 5) {
    clearInterval(timer);
  }

  console.log(num++);
}, 500);
