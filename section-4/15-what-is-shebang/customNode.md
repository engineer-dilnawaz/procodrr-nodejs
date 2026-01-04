````md
# Creating a Custom Node CLI Executor (Step-by-Step)

This guide explains how to create a custom Node.js CLI command that:

- Can be run from anywhere in the system
- Accepts a file path (e.g. `customnode ./app.js`)
- Executes the file using Node
- Uses a shebang for CLI execution

---

## Step 1: Initialize a Node project

```bash
mkdir custom-node-cli
cd custom-node-cli
npm init -y
```
````

---

## Step 2: Create the executor file

Create a file (example: `customNode.js`):

```js
#!/usr/bin/env node

const { spawn } = require("node:child_process");
const path = require("node:path");

const filePath = process.argv[2];

if (!filePath) {
  console.error("❌ Please provide a file path");
  process.exit(1);
}

const absolutePath = path.resolve(process.cwd(), filePath);

spawn("node", [absolutePath], {
  stdio: "inherit",
});
```

---

## Step 3: Add `bin` entry in `package.json`

```json
{
  "name": "customnode",
  "version": "1.0.0",
  "bin": {
    "customnode": "./customNode.js"
  }
}
```

- Key = command name
- Value = executable JS file

---

## Step 4: Make the file executable

```bash
chmod +x customNode.js
```

---

## Step 5: Link the CLI globally (for development)

```bash
npm link
```

This exposes the command system-wide.

---

## Step 6: Execute from anywhere

From **any directory**:

```bash
customnode ./app.js
```

---

## Step 7: Verify global availability

```bash
which customnode
```

Expected (example with nvm):

```text
~/.nvm/versions/node/vXX.X.X/bin/customnode
```

---

## Important Notes

- `#!/usr/bin/env node`

  - Tells the OS to run the file using Node.js

- `bin`

  - Tells npm to expose the file as a CLI command

- `npm link`

  - Activates the CLI globally (symlinked)

- `chmod +x`

  - Grants execution permission

- With **nvm**, global CLIs are Node-version specific

  - Re-run `npm link` after switching Node versions

---

## Unlink / Remove the CLI

```bash
npm unlink -g customnode
```

---

## Summary

- `bin` defines the CLI
- Shebang enables execution
- `npm link` makes it available globally
- File path is passed via `process.argv`
- Execution is handled via `child_process.spawn`

This is the standard pattern used by Node.js CLIs like `npm`, `npx`, `eslint`, and `nodemon`.
