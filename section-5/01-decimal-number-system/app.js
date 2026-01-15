const digitsList1 = [2, 4, 6, 5];
const digitsList2 = [3, 7, 9];

// function digitstToNumber(digits) {
//   let digitResult = [];
//   let multiplier = 1;

//   digits.forEach((digit) => {
//     digitResult.push(digit * multiplier);
//     multiplier *= 10;
//   });

//   return digitResult.reduce((acc, cur) => acc + cur);
// }

function reverseDigits(numbersArray) {
  //   let revereseNumber = 0;

  //   numbersArray.forEach((element, index) => {
  //     revereseNumber += element * Math.pow(10, index);
  //   });

  //   return revereseNumber;

  return numbersArray.reduce(
    (acc, cur, index) => acc + cur * Math.pow(10, index),
    0
  );
}

console.log(reverseDigits(digitsList1));
console.log(reverseDigits(digitsList2));
