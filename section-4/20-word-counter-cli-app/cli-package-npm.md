# Publishing a Node.js CLI Package to npm (Step-by-Step)

This guide explains how to publish a Node.js CLI tool to the npm registry.

---

## Step 1: Verify CLI entry file

Ensure your CLI file starts with a **shebang**:

```js
#!/usr/bin/env node
```

✔ Required for CLI execution
✔ Must be the **first line** in the file

---

## Step 2: Ensure correct `package.json` configuration

```json
{
  "name": "@engineer.dilnawaz.khan/count-word",
  "version": "1.0.0",
  "type": "module",
  "bin": {
    "count-word": "./app.js"
  }
}
```

### Important points

- `bin` key:

  - Command name → `count-word`
  - Executable file → `app.js`

- `"type": "module"` enables ESM
- Scoped package (`@scope/name`) is valid for CLI tools

---

## Step 3: Make the CLI file executable

```bash
chmod +x app.js
```

This is required for Unix-based systems (macOS / Linux).

---

## Step 4: Test the CLI locally (before publishing)

### Option A: Use `npm link` (recommended)

```bash
npm link
```

Now test from anywhere:

```bash
count-word ./file.txt
count-word ./file.txt hello
```

### Option B: Run directly

```bash
node app.js ./file.txt
```

---

## Step 5: Login to npm

If you don’t have an npm account, create one first:
👉 [https://www.npmjs.com/signup](https://www.npmjs.com/signup)

Then login:

```bash
npm login
```

Verify:

```bash
npm whoami
```

---

## Step 6: Ensure package name availability

For scoped packages, availability is automatic under your scope.

(Optional check)

```bash
npm view @engineer.dilnawaz.khan/count-word
```

---

## Step 7: Publish the package

Because this is a **scoped package**, you must publish it as **public**:

```bash
npm publish --access public
```

✔ Required for first-time scoped publishes

---

## Step 8: Verify installation from npm registry

Install globally:

```bash
npm install -g @engineer.dilnawaz.khan/count-word
```

Run from anywhere:

```bash
count-word ./file.txt
count-word ./file.txt hello
```

---

## Step 9: Version updates (important)

When making changes:

```bash
npm version patch   # 1.0.1
npm version minor   # 1.1.0
npm version major   # 2.0.0
```

Then republish:

```bash
npm publish
```

---

## Optional Enhancements (Recommended)

- Add a `README.md` (shown on npm page)
- Add a `description` field
- Add `"files"` to limit published files
- Add error handling for missing / invalid files

Example:

```json
"files": ["app.js"]
```

---

## Final Checklist

- [x] Shebang added
- [x] `bin` configured
- [x] Executable permission set
- [x] CLI tested via `npm link`
- [x] Logged into npm
- [x] Published with `--access public`

---

## Summary

- `bin` makes your package a CLI
- `npm link` tests locally
- `npm publish` ships it to the registry
- Users install it globally and run it as a command

This is the same pattern used by tools like `eslint`, `prettier`, and `vite`.
