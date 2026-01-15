Tum exam-ready notes chahte ho — short, clear, recall-friendly, bilkul tumhare diye hue content + code ke according.
Main isko aise likh raha hoon ki ek baar padhoge → sab yaad aa jaaye.

📘 Decimal Number System (Notes)
🔢 What is Decimal Number System?

Decimal Number System base-10 par kaam karta hai

Isme 10 digits use hote hain:

0, 1, 2, 3, 4, 5, 6, 7, 8, 9

Childhood se hum isi number system ka use karte aaye hain
(prime, even, odd, rational, irrational numbers)

Numbers banane ke liye hum power of 10 ka use karte hain

🏛 Place Value System

Har digit ka value uski position (place) par depend karta hai.

Example Number:
5 6 4 2
Th H T U

Place Name Value
Th Thousand 1000
H Hundred 100
T Ten 10
U Unit 1

👉 Har step par place value 10 se multiply hoti hai.

🧠 Mathematical Representation
5642 =
(5 × 1000) +
(6 × 100) +
(4 × 10) +
(2 × 1)

🔄 Array → Number (Practical Example)
Given Digits:
const digits = [2, 4, 6, 5];

Logic (Decimal System Based)

Start with Unit place = 1

Har next digit ke liye place value ×10

Digit × place value add karte jao

✅ Code (Notes Style)
const digits = [2, 4, 6, 5];

let place = 1;
let reverse = 0;

for (let i = 0; i < digits.length; i++) {
reverse += digits[i] _ place;
place _= 10;
}

console.log(reverse); // 5642

🧪 Dry Run (Fast Recall Table)
Digit Place Calculation Result
2 1 2 × 1 2
4 10 4 × 10 40
6 100 6 × 100 600
5 1000 5 × 1000 5000
Total 5642
🔑 Key Recall Points (Exam / Interview)

Decimal system = Base 10

Place value = powers of 10

Unit → Ten → Hundred → Thousand

Number = Σ (digit × place value)

Code me:

place = 1

har step place \*= 10

📌 One-Line Memory Trick

Decimal system me number = digit × 10ⁿ (place value)

Agar chaho to next main ye bhi bana deta hoon:

👉 Binary Number System (same style notes)

👉 Why base-10? (logic + history)

👉 Decimal ↔ Binary conversion (DSA based)
