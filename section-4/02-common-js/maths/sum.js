function sum(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}

module.exports = sum;
