🧮 Binary Number System (Base-2)
🔢 What is Binary?

Binary is a Base-2 number system.

It uses only two digits:

0 and 1

Binary Digit Meaning
0 OFF / FALSE
1 ON / TRUE
⚙️ Why Binary?

Computers work using electrical signals, which have two states:

⚡ ON

⚫ OFF

These are perfectly represented as:

1 → ON

0 → OFF

👉 That’s why all computer data (text, images, videos, audio, programs) is ultimately stored and processed in binary form.
🔄 Binary ↔ Decimal Conversion
1️⃣ Binary → Decimal (Step-by-Step)
Example: 1010 (Binary)
📐 Place Values
Binary: 1 0 1 0
Position: 3 2 1 0
Power: 2³ 2² 2¹ 2⁰
Value: 8 4 2 1

🧮 Calculation
1 × 8 = 8
0 × 4 = 0
1 × 2 = 2
0 × 1 = 0

---

Total = 10 (Decimal)

💻 Binary → Decimal (JavaScript Code)
let binary = "1010";
let decimal = 0;

for (let i = 0; i < binary.length; i++) {
let bit = binary[binary.length - 1 - i];
decimal += bit \* Math.pow(2, i);
}

console.log(decimal); // 10

⚡ Shortcut
parseInt("1010", 2); // 10

2️⃣ Decimal → Binary (Reverse Process)
Example: 10 (Decimal)
🧠 Logic

👉 Number ko 2 se divide karo
👉 Remainder store karo
👉 Quotient ko phir divide karo
👉 Bottom to Top read karo

🧮 Visual Division Method
10 ÷ 2 = 5 remainder 0
5 ÷ 2 = 2 remainder 1
2 ÷ 2 = 1 remainder 0
1 ÷ 2 = 0 remainder 1

✅ Bottom to Top:
Binary = 1010

💻 Decimal → Binary (JavaScript Code)
let num = 10;
let binary = "";

while (num > 0) {
binary = (num % 2) + binary;
num = Math.floor(num / 2);
}

console.log(binary); // 1010

⚡ Shortcut
(10).toString(2); // "1010"

🔁 One-Glance Summary
Conversion Method
Binary → Decimal bit × 2^position
Decimal → Binary divide by 2
JS Shortcut parseInt() / toString()

💻 Binary in JavaScript
✅ Syntax
const binary = 0b1010; // Binary for decimal 10
console.log(binary); // Output: 10

0b → prefix used for binary literals in JavaScript

🔢 Mathematical Operations on Binary

Binary numbers behave just like decimal numbers in programming.

You can perform:

➕ Addition

➖ Subtraction

✖️ Multiplication

➗ Division

Example:
const a = 0b101; // 5 in decimal
const b = 0b011; // 3 in decimal

console.log(a + b); // Output: 8

Explanation:

101₂ = 5₁₀

011₂ = 3₁₀

5 + 3 = 8

🔄 Binary Conversions
1️⃣ Binary → Decimal
parseInt("1010", 2); // 10

2️⃣ Decimal → Binary
const num = 10;
console.log(num.toString(2)); // "1010"

---

## Binary Number System

- Understanding Binary Number system is very important as our whole system understands and run on binary number system.
- Binary number system is the combinations of (0,1)
- It is called as Base2 Number system. (Cuz it has 2 to represent)
- In JS, we can represent binary number by using this syntax 0b<Binary Number>
- We can do all mathematical operations on binary numbers. (like addition, substraction, multiplication, etc)
