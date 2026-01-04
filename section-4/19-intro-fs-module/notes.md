## `node:fs` vs `node:fs/promises`

---

## `node:fs`

- Provides **both synchronous and asynchronous (callback-based)** APIs.
- Common methods:
  - `readFileSync` (sync)
  - `readFile` (async with callback)

### `readFileSync`

- **Blocks the main thread** until the file is fully read.
- Suitable only for:
  - Startup scripts
  - One-off scripts / CLI tools

```js
import fs from "node:fs";

const content = fs.readFileSync("./index.html", "utf-8");
console.log(content);
```

**Note**

- Passing `"utf-8"` returns a **string**
- Without encoding, it returns a **Buffer**

---

### `readFile` (callback-based)

- **Non-blocking**
- Uses Node’s async I/O (libuv thread pool)
- Result is provided via a callback

```js
import fs from "node:fs";

fs.readFile("./index.html", (err, data) => {
  if (err) {
    console.error(err.message);
    return;
  }

  const content = data.toString();
  console.log(content);
});
```

**Note**

- Returned data is a **Buffer**
- `toString()` converts it into readable text

---

## `node:fs/promises`

- Promise-based version of `fs`
- Designed for **async / await**
- Exposes **async APIs only**
- Internally behaves like async `fs` (non-blocking)

### `readFile` (promise-based)

```js
import fs from "node:fs/promises";

const content = await fs.readFile("./index.html", "utf-8");
console.log(content);
```

**Key points**

- No callbacks
- Cleaner control flow with `async / await`
- Returns:

  - `string` (if encoding is provided)
  - `Buffer` (if encoding is omitted)

---

## Key Differences

| Feature              | `fs`           | `fs/promises` |
| -------------------- | -------------- | ------------- |
| Sync APIs            | ✅             | ❌            |
| Callback-based async | ✅             | ❌            |
| Promise-based        | ❌             | ✅            |
| `async / await`      | ❌             | ✅            |
| Blocks main thread   | `readFileSync` | ❌            |

---

## Takeaways

- ❌ Avoid `readFileSync` in servers and production apps
- ✅ Use `fs/promises` with `async / await` for cleaner code
- Async `readFile` (both variants) is **non-blocking**
- Performance depends on file size and I/O, not just sync vs async
- Prefer `fs/promises` in modern Node.js codebases
