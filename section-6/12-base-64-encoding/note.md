# Base64 Encoding

## Rules for Base64 Encoding

1. Base64 converts binary data into a text representation using 6-bit groups.
2. Each group of 3 bytes (24 bits) is divided into four 6-bit groups.
3. If the input length is not a multiple of 3 bytes, padding characters (`<span>=</span>`) are added to make the encoded output a multiple of 4 characters.
4. Padding works as follows:
   - **3 bytes:** No padding is required.
   - **2 bytes:** One `<span>=</span>` is added.
   - **1 byte:** Two `<span>=</span>` characters are added.
5. Base64 uses a character set of 64 characters to represent each 6-bit value.

---

## Examples

### 1. Encoding `<span>abc</span>`

The string `<span>abc</span>` contains 3 bytes in ASCII (also UTF-8 for these characters).

**Step 1: Convert each character to binary**

```
a          b          c
01100001   01100010   01100011
```

Combined binary representation:

```
01100001 01100010 01100011
```

**Step 2: Divide the bits into 6-bit groups**

```
011000 010110 001001 100011
```

**Step 3: Convert each 6-bit group to a Base64 character**

```
011000 → Y
010110 → W
001001 → J
100011 → j
```

**Final Base64 output:**

```
YWJj
```

No padding is required because the input contains exactly 3 bytes.

---

### 2. Encoding `<span>ab</span>`

The string `<span>ab</span>` contains 2 bytes.

**Step 1: Convert each character to binary**

```
a          b
01100001   01100010
```

Combined binary representation:

```
01100001 01100010
```

**Step 2: Divide the bits into 6-bit groups**

The input contains 16 bits. Two zero bits are appended to complete the third 6-bit group, and the fourth group is filled with zeros for the encoding process.

```
011000 010110 001000 000000
```

**Step 3: Convert the groups to Base64 characters**

```
011000 → Y
010110 → W
001000 → I
```

The fourth character is replaced with `<span>=</span>` because the input contains only 2 bytes.

**Final Base64 output:**

```
YWI=
```

---

### 3. Encoding `<span>a</span>`

The string `<span>a</span>` contains 1 byte.

**Step 1: Convert the character to binary**

```
a
01100001
```

**Step 2: Divide the bits into 6-bit groups**

The input contains 8 bits. Four zero bits are appended to complete the second 6-bit group. Two additional Base64 positions are represented by padding.

```
011000 010000 000000 000000
```

**Step 3: Convert the groups to Base64 characters**

```
011000 → Y
010000 → Q
```

The last two positions are represented by `<span>==</span>` because the input contains only 1 byte.

**Final Base64 output:**

```
YQ==
```

---

### 4. Encoding `<span>abcd</span>`

The string `<span>abcd</span>` contains 4 bytes.

**Step 1: Convert each character to binary**

```
a          b          c          d
01100001   01100010   01100011   01100100
```

**Step 2: Encode the first 3 bytes**

The first three bytes, `<span>abc</span>`, produce:

```
011000 010110 001001 100011
   Y      W      J      j
```

Encoded result:

```
YWJj
```

**Step 3: Encode the remaining byte**

The remaining byte, `<span>d</span>`, is:

```
01100100
```

Its 6-bit groups are:

```
011001 000000 000000 000000
   Z      A      =      =
```

Encoded result:

```
ZA==
```

**Final Base64 output:**

```
YWJjZA==
```

---

## JavaScript Examples

The browser provides `<span>btoa()</span>` and `<span>atob()</span>` for Base64 encoding and decoding.

```
// Encode a string into Base64
btoa("abc"); // "YWJj"
btoa("ab");  // "YWI="
btoa("a");   // "YQ=="
btoa("abcd"); // "YWJjZA=="

// Decode a Base64 string
atob("YWJj");   // "abc"
atob("YWI=");   // "ab"
atob("YQ==");   // "a"
atob("YWJjZA=="); // "abcd"
```

**Important:** `<span>btoa()</span>` expects a binary string whose characters fit within the Latin-1 range. It does not directly encode arbitrary Unicode strings as UTF-8. For Unicode text, convert the text to UTF-8 bytes before encoding it.

---

## Quick Reference

| Input               | Input bytes | Base64 output           | Padding           |
| ------------------- | ----------- | ----------------------- | ----------------- |
| `<span>a</span>`    | 1           | `<span>YQ==</span>`     | `<span>==</span>` |
| `<span>ab</span>`   | 2           | `<span>YWI=</span>`     | `<span>=</span>`  |
| `<span>abc</span>`  | 3           | `<span>YWJj</span>`     | None              |
| `<span>abcd</span>` | 4           | `<span>YWJjZA==</span>` | `<span>==</span>` |

## Key Takeaway

Base64 processes input in groups of 3 bytes and produces 4 Base64 characters per group. When the final group contains fewer than 3 bytes, padding characters (`<span>=</span>`) indicate the missing Base64 positions.
