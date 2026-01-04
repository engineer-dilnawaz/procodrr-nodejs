Find notes here

#! -> shebang

Purpose:
Tells the operating system which interpreter should execute this file
when the script is run directly (without typing `node`, `python`, etc.).

Rules:

1. Must be the VERY FIRST line of the file (no spaces or comments before it)
2. No quotes (" ") are allowed around the interpreter path
3. No space is allowed between `#!` and the interpreter path
4. Path must be a valid executable location
5. File must have executable permission (chmod +x filename)
6. Mostly works on Unix/Linux/macOS (not native to Windows)

❌ Invalid examples:
#!/ "usr/bin/node" -> quotes not allowed
#! /usr/bin/node -> space after #! not allowed
// #!/usr/bin/node -> not first line

✅ Valid examples:
#!/usr/bin/node
#!/usr/bin/env node -> recommended (portable across systems)

How to solve common issues:

- Interpreter path differs → use `/usr/bin/env node`
- Permission denied → run `chmod +x filename`
- Script not running → ensure shebang is on line 1 with no spaces

Example usage:
./app.js (instead of `node app.js`)
