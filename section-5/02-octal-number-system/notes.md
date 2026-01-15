Octal Number System
In Octal number system is the combinations of (0,1,2,3,4,5,6,7)
These are eight digits that's why it is called as octal number system.
In ES6, We cannot direct write the octal numbers since it's deprecated.
Instead we can use the modern syntax of 0o12.

    In parseInt() we can also pass an extra argument for telling which number system we are using.
    In .toString() if we pass the power of any number system it will convert it to that, for Ex -> num.toString(8)

    In today's time we don't use octal number system that much, but it is used for operation in Linux behind the scenes.

    It is also called Base8 Number system. (Cuz it has 8 digits to represent)

---

🧮 Octal Number System (Base-8)
🔢 What is Octal Number System?

Octal Number System ek Base-8 number system hai

Isme sirf 8 digits use hote hain:

0, 1, 2, 3, 4, 5, 6, 7

❌ Digits 8 aur 9 allowed nahi hote

📐 Why Base-8?

Kyunki total 8 unique digits hote hain

Isliye place values powers of 8 me hote hain

Place Values:
Position Value
8⁰ 1
8¹ 8
8² 64
8³ 512
🧠 Octal → Decimal Conversion
Example:
125 (octal)

Calculation:
= 1 × 8² + 2 × 8¹ + 5 × 8⁰
= 1 × 64 + 2 × 8 + 5 × 1
= 64 + 16 + 5
= 85 (decimal)

✅ 125₈ = 85₁₀

🚫 Octal in JavaScript (Important)

Old JavaScript (pre-ES6) me:

012 // ❌ deprecated

Modern JavaScript (ES6+) me:

0o12 // ✅ correct octal literal

✅ Octal Literal Example (JS)
let oct = 0o12;
console.log(oct); // 10

📌 Reason:

1 × 8 + 2 = 10

📥 parseInt() with Octal

String ko octal se decimal me convert karne ke liye:

parseInt("12", 8);

Explanation:

"12" → number string

8 → radix (base-8)

Calculation:
1 × 8 + 2 = 10

📤 Decimal → Octal Conversion

JavaScript me decimal ko octal me convert karne ke liye:

let num = 85;
console.log(num.toString(8)); // "125"

📌 toString(8) → base-8 representation

🧑‍💻 Practical Usage

JavaScript me rarely used

Linux / Unix systems me important role

Example (Linux File Permissions):
chmod 755 file.txt

Digit Permission
7 rwx
5 r-x
5 r-x

➡️ Ye permissions octal system par based hoti hain

🔑 Quick Recall Points (Exam / Interview)

Octal = Base-8

Digits = 0–7

Place values = powers of 8

JS octal prefix = 0o

parseInt(str, 8) → octal to decimal

.toString(8) → decimal to octal

Linux permissions use octal

🧠 One-Line Memory Trick

Octal system = digits (0–7) × powers of 8
