# Creating & Publishing a Node.js CLI Tool (Complete Reference Notes)

These notes summarize the **end-to-end process** of creating, testing, and publishing a **Node.js CLI package** to npm, and linking it with GitHub.

---

## 1. What Is a Node.js CLI Tool?

A CLI (Command Line Interface) tool is a Node.js script that:

- Can be executed directly from the terminal
- Accepts arguments (`process.argv`)
- Can be run **globally from anywhere** after installation

Example:

```bash
count-word ./file.txt hello
```

````

---

## 2. Core Requirements for a CLI Tool

### 1️⃣ Shebang (Mandatory)

At the **top of the entry file**:

```js
#!/usr/bin/env node
```

This tells the OS:

> “Run this file using Node.js”

---

### 2️⃣ Entry File (CLI Logic)

- Read arguments using `process.argv`
- Perform logic (file read, processing, etc.)
- Output result using `console.log`

Example:

```js
const filePath = process.argv[2];
```

---

### 3️⃣ Use `fs/promises` (Recommended)

```js
import fs from "node:fs/promises";

const content = await fs.readFile(filePath, "utf-8");
```

- Non-blocking
- Cleaner with `async/await`
- Avoids callback hell

---

## 3. package.json Setup for CLI

### Minimal Required Fields

```json
{
  "name": "@scope/package-name",
  "version": "1.0.0",
  "type": "module",
  "bin": {
    "count-word": "./app.js"
  }
}
```

### What `bin` Does

- Exposes a **global command**
- Format:

```json
"bin": {
  "<command-name>": "<file-path>"
}
```

After install:

```bash
count-word
```

---

## 4. Making the CLI Work Globally

### Local Testing (Before Publish)

```bash
npm link
```

Now the command works **from any directory**:

```bash
count-word ./test.txt
```

To unlink:

```bash
npm unlink
```

---

## 5. Publishing as an npm CLI Package

### Step-by-Step

1️⃣ Login to npm

```bash
npm login
```

2️⃣ Ensure version is correct

```bash
npm version patch   # or minor / major
```

3️⃣ Publish

```bash
npm publish --access public
```

> `--access public` is required for **scoped packages**

---

## 6. How npm Links CLI Internally

- npm creates a symlink:

```text
~/.nvm/versions/node/<version>/bin/count-word
```

- That symlink points to your CLI file
- `bin` field controls this behavior

---

## 7. GitHub Repository Setup

### package.json → repository field

```json
"repository": {
  "type": "git",
  "url": "https://github.com/engineer-dilnawaz/word-count.git"
}
```

### Benefits

- npm automatically links:

  - **GitHub → npm**
  - **npm → GitHub**

- Shown on npm package page

---

## 8. Automatic npm ↔ GitHub Linking (Best Practices)

### 1️⃣ Add npm Badge in README

```md
[![npm version](https://img.shields.io/npm/v/@engineer.dilnawaz.khan/count-word)](https://www.npmjs.com/package/@engineer.dilnawaz.khan/count-word)
```

---

### 2️⃣ Use `npm version` for Releases

```bash
npm version patch
```

This automatically:

- Updates `package.json`
- Creates a **git tag**
- Prepares versioned releases

---

### 3️⃣ (Optional) GitHub Release Workflow

- Use GitHub Actions to:

  - Create releases on tag push
  - Automate publishing later if needed

---

## 9. ES Modules Note (`type: module`)

- Even without `"type": "module"`, you can use `import` if:

  - File extension is `.mjs`
  - Or Node version supports implicit ESM (newer Node)

Best practice:

```json
"type": "module"
```

---

## 10. Common Gotchas

- ❌ Forgot shebang → command won’t run
- ❌ Forgot `npm link` → CLI works only locally
- ❌ Missing `--access public` → publish fails
- ❌ Using `readFileSync` → blocks main thread

---

## 11. Mental Model (Important)

> **bin + shebang + npm install = global CLI**

- `bin` → command name
- shebang → how to execute
- npm → symlink creation

---

## 12. When NOT to Use `pkg`

- `pkg` is for creating binaries
- **Not required** for npm CLI tools
- npm + Node is enough for most cases

---

## Final Takeaway

A professional Node.js CLI tool needs:

- Clean argument parsing
- Async file handling
- Proper `bin` setup
- Versioned publishing
- GitHub + npm linkage

This pattern is **industry-standard** and used by tools like:

- `create-vite`
- `eslint`
- `prettier`
- `npm-create-*`

---

✅ You now have a **complete reference** for building and publishing Node.js CLI tools.
````
