Character Set Vs Character Encoding
In Character Set, each character is assigned a code to represent it.
The most popular character set are:
ASCII (American Standard code for Information Interchange) -> 128 Characters
2^7 = 128 (It will be represented in 7 bits)
Unicode is capable of encoding 1.1 Million characters

    In Character Encoding, every set has it's own way of encoding.
    In case of ASCII, It's encoding is ASCII only. It uses 7 bits.
    In case of UTF-8, it uses 8 Bits

    ---
    ✳️ Character Set vs Character Encoding

📘 Character Set
A Character Set is a collection of characters and the codes assigned to represent them.
It defines which characters exist — letters, digits, symbols, control characters, etc.
✅ Popular Character Sets:
ASCII (American Standard Code for Information Interchange):
Supports 128 characters
Uses 7 bits to represent characters → 2⁷ = 128
Includes: A–Z, a–z, 0–9, punctuation, and control characters
Unicode:
A much larger set capable of representing over 1.1 million characters
Supports characters from all major languages, emojis, symbols, etc.
🧠 Character Encoding
Character Encoding defines how characters from the set are represented as binary data (0s and 1s).
It is the actual implementation that translates characters into bytes.
🧾 Examples:
ASCII Encoding:
Uses 7 bits per character
Encodes only ASCII character set
UTF-8 (Unicode Transformation Format - 8 bit):
Variable-length encoding (1 to 4 bytes)
Backward-compatible with ASCII (first 128 characters are same)
Most popular Unicode encoding today (used in HTML, web, etc.)
