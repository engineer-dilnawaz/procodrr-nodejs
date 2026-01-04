function product(...numbers) {
  return numbers.reduce((acc, cur) => acc * cur);
}

module.exports = product;
