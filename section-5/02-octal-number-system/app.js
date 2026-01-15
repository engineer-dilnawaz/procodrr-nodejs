const octalNum1 = 0o12;
console.log(octalNum1);

// octal to decimal
console.log(parseInt(octalNum1, 8));

// decimal to octal
const num1 = 10;
console.log(num1.toString(8));

function digitsToNumber(numbers, radix = 10) {
  return numbers.reduce(
    (acc, cur, index) => acc + cur * Math.pow(radix, index),
    0
  );
}

function numberToOctal(number) {
  return number.toString(8);
}

function octalToNumber(octal) {
  return parseInt(octal, 8);
}

const reversedNumber = digitsToNumber([1, 2, 3]);
console.log(reversedNumber);
const decimalToOctal = numberToOctal(reversedNumber);
console.log(decimalToOctal);
const octalToDecimal = octalToNumber(decimalToOctal);
console.log(octalToDecimal);
