## Package Versioning System (SemVer)

**Format:** `major.minor.patch`

Example: `1.4.2`

---

## Version Range Symbols

### `^` (caret)

- Allows **minor and patch** updates (no major change)
- Example:
  - `^1.1.1` → can install up to `<2.0.0` (e.g. `1.9.9`)
- **Special case (0.x.x):**
  - `^0.1.1` → only patch updates allowed (acts like `~`)
  - Result: `0.1.9` but **not** `0.2.0`

---

### `~` (tilde)

- Allows **patch** updates only
- Example:
  - `~1.1.1` → `1.1.9` but not `1.2.0`

---

### `>`

- Installs the **latest version greater than** the specified version
- Example:
  - `>1.1.1` → highest available version above `1.1.1`

---

### `<`

- Installs the **latest version lower than** the specified version
- Example:
  - `<1.5.0` → highest version below `1.5.0`

---

### `>=`

- Installs the **latest version greater than or equal to** the specified version
- Example:
  - `>=1.1.1` → `1.1.1` or highest available above it

---

### `<=`

- Installs the **highest version less than or equal to** the specified version
- Example:
  - `<=1.5.0` → `1.5.0` or closest lower version

---

### `*`

- Installs **the latest available version**
- No restrictions

---

## Key Notes

- `package-lock.json` **locks exact versions**
  - If it exists, npm installs the locked versions regardless of symbols
- To observe version-range behavior:
  - Delete `package-lock.json`
  - Run `npm install`
- Installed versions:
  - Not reflected by symbols in `package.json`
  - Actual versions appear in:
    - `node_modules/<package>/package.json`
    - `package-lock.json` under the package entry
