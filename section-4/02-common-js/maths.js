function sum(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}

function product(...numbers) {
  return numbers.reduce((acc, cur) => acc * cur);
}
console.log("Maths");

// new Promise((res, rej) =>
//   setTimeout(() => {
//     res("WAITING...");
//   }, 5000)
// );

(function () {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
})();
// module.exports = {
//   sum,
//   product,
// };

// module.exports.sum = sum;
// module.exports.product = product;

exports.sum = sum;
exports.product = product;
