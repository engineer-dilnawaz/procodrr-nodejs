const { sum } = customLoadModule("./sum");

const result = sum(1, 2, 3, 4, 5);

console.log(result, "---->Sum result");

send.result = result;
