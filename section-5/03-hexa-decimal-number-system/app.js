const hexanum = 0x843;
const number = hexanum.toString(16);

// console.log(number);

/**
 * 845A
 * 8 * 16^3 = 32768
 * 4 * 16^2 = 1024
 * 5 * 16^1 = 80
 * 10 * 16^0 = 10
 * Answer = 33,882
 * */
const num1 = 0x845a;

// to hexadecimal
console.log(num1.toString(16));
// hexa to decimal
console.log(parseInt(num1, 16));

// function digitsToNumber(digits, radix = 10) {
//   let _digits = [...digits];
//   if (_digits.some((digit) => typeof digit === "string")) {

// _digits = _digits.map(digit=> typeof digit === "string"?)
//   }
//   return 0;
// }

function digitsToNumber(numbers, radix = 10) {
  const hexValue = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  if (
    numbers.some(
      (digit) =>
        typeof digit === "string" &&
        !hexValue.hasOwnProperty(digit.toLowerCase())
    )
  ) {
    return "Incorrect Hex Character";
  }

  return numbers.reduce((acc, cur, index) => {
    let _cur = cur;

    if (
      typeof _cur === "string" &&
      hexValue.hasOwnProperty(_cur.toLowerCase())
    ) {
      _cur = hexValue[_cur.toLowerCase()];
    }
    return acc + _cur * Math.pow(radix, index);
  }, 0);
}

console.log(digitsToNumber([1, "A", "C", 3]));
