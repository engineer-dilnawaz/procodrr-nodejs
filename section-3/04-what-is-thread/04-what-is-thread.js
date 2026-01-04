const { Worker } = require("worker_threads");

new Worker("./thread1.js");
new Worker("./thread2.js");
new Worker("./thread3.js");

//  2.488s
